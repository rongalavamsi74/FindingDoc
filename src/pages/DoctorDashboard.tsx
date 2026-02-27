import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return navigate("/login");

    const decoded: any = jwtDecode(token);

    if (decoded.role !== "doctor") {
      navigate("/dashboard");
      return;
    }

    fetch("http://localhost:5000/api/appointments", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  const updateStatus = async (id: string, status: string) => {
    await fetch(`http://localhost:5000/api/appointments/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ status }),
    });

    window.location.reload();
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24 p-8 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Doctor Dashboard</h1>

        {appointments.length === 0 && (
          <p className="text-muted-foreground">No appointments</p>
        )}

        {appointments.map((a) => (
          <div key={a._id} className="border p-4 rounded mb-4">
            <p>Date: {a.date}</p>
            <p>Time: {a.time}</p>
            <p>Status: {a.status}</p>

            <div className="flex gap-3 mt-3">
              <Button size="sm" onClick={() => updateStatus(a._id, "accepted")}>
                Accept
              </Button>

              <Button
                size="sm"
                variant="destructive"
                onClick={() => updateStatus(a._id, "rejected")}
              >
                Reject
              </Button>
            </div>
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default DoctorDashboard;
