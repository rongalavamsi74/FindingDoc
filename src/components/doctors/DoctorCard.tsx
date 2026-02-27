import { useState } from "react";
import { Star, MapPin, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  rating: number;
  reviews: number;
  experience: number;
  location: string;
  availability: string;
  fee: number;
  verified: boolean;
}

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const bookAppointment = async () => {
    if (!token) return navigate("/login");

    if (!date || !time) {
      alert("Please select date and time");
      return;
    }

    await fetch("http://localhost:5000/api/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        doctor: doctor.name,
        date,
        time,
      }),
    });

    navigate("/dashboard");
  };

  return (
    <div className="group bg-card rounded-2xl border overflow-hidden p-4 space-y-3">

      <img
        src={doctor.image}
        className="w-full h-40 object-cover rounded"
      />

      {doctor.verified && (
        <Badge className="bg-success w-fit">Verified</Badge>
      )}

      <h3 className="font-semibold text-lg">{doctor.name}</h3>
      <p className="text-primary text-sm">{doctor.specialty}</p>

      <div className="text-sm space-y-1">
        <div className="flex gap-2"><MapPin size={14} /> {doctor.location}</div>
        <div className="flex gap-2"><Clock size={14} /> {doctor.experience} yrs</div>
        <div className="flex gap-2 text-success"><Calendar size={14} /> {doctor.availability}</div>
      </div>

      {/* DATE PICKER */}
      <input
        type="date"
        className="w-full border rounded px-2 py-1"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      {/* TIME PICKER */}
      <input
        type="time"
        className="w-full border rounded px-2 py-1"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <div className="flex justify-between items-center pt-2 border-t">
        <p className="font-bold">${doctor.fee}</p>

        <Button size="sm" onClick={bookAppointment}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default DoctorCard;
