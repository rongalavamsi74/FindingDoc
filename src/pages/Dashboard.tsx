import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [appointments, setAppointments] = useState<any[]>([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return navigate("/login");

    const decoded: any = jwtDecode(token);
    setEmail(decoded.email);
    setRole(decoded.role);

    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    const res = await fetch("http://localhost:5000/api/appointments", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    setAppointments(data);
  };

  const updateStatus = async (id: string, status: string) => {
    await fetch(`http://localhost:5000/api/appointments/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });

    loadAppointments();
  };

  const pending = appointments.filter(a => a.status === "pending").length;
  const accepted = appointments.filter(a => a.status === "accepted").length;

  return (
    <div className="min-h-screen bg-background">

      <main className="pt-24 max-w-5xl mx-auto p-6">

        <h1 className="text-2xl font-bold mb-2">Welcome {email}</h1>

        {role === "doctor" && (
          <p className="text-muted-foreground mb-6">Doctor Dashboard</p>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <div className="border p-4 rounded">
            <p className="text-sm text-muted-foreground">Total</p>
            <h2 className="text-xl font-bold">{appointments.length}</h2>
          </div>

          <div className="border p-4 rounded">
            <p className="text-sm text-muted-foreground">Pending</p>
            <h2 className="text-xl font-bold text-yellow-500">{pending}</h2>
          </div>

          <div className="border p-4 rounded">
            <p className="text-sm text-muted-foreground">Accepted</p>
            <h2 className="text-xl font-bold text-green-600">{accepted}</h2>
          </div>
        </div>

        <h2 className="font-semibold mb-4">
          {role === "doctor" ? "Patient Appointments" : "My Appointments"}
        </h2>

        {appointments.length === 0 && (
          <p className="text-muted-foreground">No appointments</p>
        )}

        {appointments.map(a => (
          <div key={a._id} className="border p-4 rounded mb-4">

            <p><b>Date:</b> {a.date}</p>
            <p><b>Time:</b> {a.time}</p>

            <p className="mb-2">
              Status:{" "}
              <span className={
                a.status === "accepted"
                  ? "text-green-600"
                  : a.status === "rejected"
                  ? "text-red-600"
                  : "text-yellow-600"
              }>
                {a.status}
              </span>
            </p>

            {role === "doctor" && a.status === "pending" && (
              <div className="flex gap-3 mt-2">
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
            )}

          </div>
        ))}

        <Button
          className="w-full mt-8"
          variant="outline"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          Logout
        </Button>

      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
