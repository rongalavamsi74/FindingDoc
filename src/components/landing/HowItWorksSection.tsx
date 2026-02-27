import { UserPlus, Search, CalendarCheck, Stethoscope } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      step: "1",
      title: "Create Account",
      description: "Sign up with your email in seconds.",
    },
    {
      icon: Search,
      step: "2",
      title: "Find Doctor",
      description: "Browse doctors by specialty and location.",
    },
    {
      icon: CalendarCheck,
      step: "3",
      title: "Book Appointment",
      description: "Select a time slot and confirm booking.",
    },
    {
      icon: Stethoscope,
      step: "4",
      title: "Get Care",
      description: "Visit the doctor or consult online.",
    },
  ];

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            How It Works
          </h2>
          <p className="text-muted-foreground">
            Book your appointment in 4 simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative inline-block mb-4">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-xs font-bold">
                  {step.step}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
