import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const Settings = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    const decoded: any = jwtDecode(token);

    setEmail(decoded.email);
    setRole(decoded.role);
  }, []);

  return (
    <div className="min-h-screen bg-background">

      <main className="pt-24 max-w-xl mx-auto p-6">

        <h1 className="text-2xl font-bold mb-6">Doctor Settings</h1>

        {/* Profile Card */}
        <div className="border rounded p-5 mb-6">

          <p className="mb-2">
            <strong>Email:</strong> {email}
          </p>

          <p className="mb-2">
            <strong>Role:</strong> {role}
          </p>

        </div>

        {/* Actions */}
        <div className="space-y-3">

          <Button
            className="w-full"
            onClick={() => navigate("/dashboard")}
          >
            Back to Dashboard
          </Button>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            Logout
          </Button>

        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Settings;
