import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Calendar, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-doctor.jpg";

const HeroSection = () => {
  const features = [
    "Verified Doctors",
    "Easy Booking",
    "24/7 Support",
  ];

  return (
    <section className="bg-primary pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Book Your Doctor
              <span className="block mt-2">Appointment Online</span>
            </h1>

            <p className="text-lg text-primary-foreground/80 mb-6 max-w-lg">
              Find and book appointments with qualified doctors. Simple, fast, and convenient healthcare booking.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Search Box */}
            <div className="bg-card rounded-lg p-2 mb-6 max-w-xl">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search doctors, specialties..."
                    className="w-full h-11 pl-10 pr-4 rounded-md bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <Link to="/doctors">
                  <Button className="w-full sm:w-auto h-11 gap-2">
                    <Calendar className="w-4 h-4" />
                    Find Doctors
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <span className="text-2xl font-bold">500+</span>
                <p className="text-sm text-primary-foreground/70">Doctors</p>
              </div>
              <div>
                <span className="text-2xl font-bold">50K+</span>
                <p className="text-sm text-primary-foreground/70">Patients</p>
              </div>
              <div>
                <span className="text-2xl font-bold">4.9</span>
                <p className="text-sm text-primary-foreground/70">Rating</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="hidden lg:block">
            <img
              src={heroImage}
              alt="Doctor"
              className="rounded-lg w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
