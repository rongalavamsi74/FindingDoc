import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Stethoscope, Mail, Lock, ArrowRight } from "lucide-react";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data || "Login failed");
        return;
      }

      // Save token
      localStorage.setItem("token", data.token);

      // Decode token to get role
      const decoded: any = jwtDecode(data.token);

      if (decoded.role === "doctor") {
        navigate("/dashboard");
      } else {
        navigate("/dashboard");
      }

    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">

            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-4 shadow-card">
                <Stethoscope className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">Welcome Back</h1>
              <p className="text-muted-foreground mt-2">
                Log in to manage your appointments
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="space-y-2">
                <Label>Email</Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
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

              <div className="flex items-center gap-2">
                <Checkbox
                  checked={formData.rememberMe}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      rememberMe: checked as boolean,
                    })
                  }
                />
                <Label className="text-sm text-muted-foreground">
                  Remember me
                </Label>
              </div>

              <Button type="submit" size="lg" className="w-full gap-2">
                Log In
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>

            <p className="text-center text-muted-foreground mt-8">
              Don't have an account?{" "}
              <Link to="/register" className="text-primary hover:underline">
                Sign up
              </Link>
            </p>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
