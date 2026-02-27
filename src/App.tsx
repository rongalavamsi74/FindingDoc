import { Routes, Route } from "react-router-dom";

import Navbar from "@/components/layout/Navbar";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Doctors from "./pages/Doctors";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Index />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
}

export default App;
