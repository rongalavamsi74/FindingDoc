import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Moon, Sun } from "lucide-react";
import { jwtDecode } from "jwt-decode";

type Role = "doctor" | "patient";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState<Role | null>(null);
  const [dark, setDark] = useState(document.documentElement.classList.contains("dark"));

  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    try {
      if (token) {
        const decoded: any = jwtDecode(token);
        setRole(decoded.role || "patient");
      } else setRole(null);
    } catch {
      localStorage.removeItem("token");
      setRole(null);
    }
  }, [token]);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    const enabled = document.documentElement.classList.contains("dark");
    setDark(enabled);
    localStorage.setItem("theme", enabled ? "dark" : "light");
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isActive = (path: string) => location.pathname === path;

  const doctorLinks = [
    { path: "/dashboard", label: "Doctor Home" },
    { path: "/settings", label: "Settings" },
  ];

  const patientLinks = [
    { path: "/", label: "Home" },
    { path: "/doctors", label: "Find Doctors" },
    { path: "/dashboard", label: "My Appointments" },
  ];

  const navLinks = role === "doctor" ? doctorLinks : patientLinks;
  const homePath = role ? "/dashboard" : "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card border-b">
      <div className="container mx-auto px-4">

        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <span
            onClick={() => navigate(homePath)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center">
              <Heart className="text-white" size={18} />
            </div>
            <span className="font-bold text-xl">mediConnect</span>
          </span>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            {navLinks.map(link => (
              <span
                key={link.label}
                onClick={() => navigate(link.path)}
                className={`text-sm cursor-pointer ${
                  isActive(link.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </span>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-3 items-center">

            <Button variant="ghost" size="sm" onClick={toggleTheme}>
              {dark ? <Sun size={18}/> : <Moon size={18}/>}
            </Button>

            {!token ? (
              <>
                <Button size="sm" variant="ghost" onClick={() => navigate("/login")}>
                  Login
                </Button>
                <Button size="sm" onClick={() => navigate("/register")}>
                  Register
                </Button>
              </>
            ) : (
              <Button variant="outline" size="sm" onClick={logout}>
                Logout
              </Button>
            )}

          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X/> : <Menu/>}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">

            {navLinks.map(link => (
              <div
                key={link.label}
                onClick={() => {
                  navigate(link.path);
                  setIsOpen(false);
                }}
                className="block py-2 cursor-pointer"
              >
                {link.label}
              </div>
            ))}

            <Button className="w-full mt-2" onClick={toggleTheme}>
              {dark ? "Light Mode" : "Dark Mode"}
            </Button>

            {token && (
              <Button
                className="w-full mt-2"
                variant="outline"
                onClick={() => {
                  setIsOpen(false);
                  logout();
                }}
              >
                Logout
              </Button>
            )}

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
