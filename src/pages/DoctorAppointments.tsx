import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const DoctorAppointments = () => {
  const [appointments, setAppointments] = useState<any[]>([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:5000/api/appointments", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setAppointments(data));
  }, []);

  const updateStatus = async (id: string, status: string) => {
    await fetch(`http://localhost:5000/api/appointments/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });

    setAppointments(prev =>
      prev.map(a => (a._id === id ? { ...a, status } : a))
    );
  };

  return (
    <>
      <Navbar />

      <div className="pt-24 container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Doctor Appointments</h1>

        <div className="overflow-x-auto bg-card border rounded">
          <table className="w-full text-sm">

            <thead className="bg-muted">
              <tr>
                <th className="p-3">Patient</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map(app => (
                <tr key={app._id} className="border-t">
                  <td className="p-3">{app.userId?.email}</td>
                  <td>{app.date}</td>
                  <td>{app.time}</td>
                  <td>{app.status}</td>

                  <td className="flex gap-2 p-2">

                    <Button
                      size="sm"
                      onClick={() => updateStatus(app._id, "accepted")}
                    >
                      Accept
                    </Button>

                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => updateStatus(app._id, "rejected")}
                    >
                      Reject
                    </Button>

                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorAppointments;
