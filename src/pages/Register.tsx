import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Stethoscope, Mail, Lock, User, ArrowRight } from "lucide-react";

const Register = () => {
  const [userType, setUserType] = useState<"patient" | "doctor">("patient");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();
      console.log("Registered:", data);
      alert("Registration successful");

    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">

            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-4 shadow-card">
                <Stethoscope className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">Create Account</h1>
              <p className="text-muted-foreground mt-2">
                Join DocSpot and start booking appointments
              </p>
            </div>

            <div className="flex gap-2 p-1 bg-secondary rounded-xl mb-8">
              <button
                onClick={() => setUserType("patient")}
                className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                  userType === "patient"
                    ? "bg-card text-foreground shadow-soft"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                I'm a Patient
              </button>

              <button
                onClick={() => setUserType("doctor")}
                className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                  userType === "doctor"
                    ? "bg-card text-foreground shadow-soft"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                I'm a Doctor
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="pl-12 h-12"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="pl-12 h-12"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Password</Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="pl-12 h-12"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="pl-12 h-12"
                    required
                  />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full gap-2">
                Create Account
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>

            <p className="text-center text-muted-foreground mt-6">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-medium hover:underline">
                Log in
              </Link>
            </p>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Register;
