import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const BookAppointment = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");

    await fetch("http://localhost:5000/api/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        doctor: id,
        date,
        time,
      }),
    });

    navigate("/dashboard");
  };

  return (
    <div>
      <Navbar />

      <main className="pt-24 p-10 max-w-md mx-auto">
        <h1 className="text-xl font-bold mb-4">Book Appointment</h1>

        <input
          type="date"
          className="border w-full p-2 mb-3"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="time"
          className="border w-full p-2 mb-4"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <Button className="w-full" onClick={handleSubmit}>
          Confirm Booking
        </Button>
      </main>

      <Footer />
    </div>
  );
};

export default BookAppointment;
