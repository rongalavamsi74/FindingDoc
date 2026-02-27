import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="rounded-lg bg-primary p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Join DocSpot today and experience convenient healthcare booking.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button variant="secondary" size="lg" className="gap-2">
                <Calendar className="w-4 h-4" />
                Get Started
              </Button>
            </Link>
            <Link to="/doctors">
              <Button variant="hero-outline" size="lg" className="gap-2">
                Browse Doctors
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
