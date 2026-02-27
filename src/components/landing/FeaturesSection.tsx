import { Calendar, Clock, Shield, Video, FileText, Bell } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Easy Booking",
      description: "Book appointments quickly with just a few clicks.",
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "View schedules and book anytime, anywhere.",
    },
    {
      icon: Video,
      title: "Video Consultation",
      description: "Connect with doctors through secure video calls.",
    },
    {
      icon: Shield,
      title: "Verified Doctors",
      description: "All doctors are verified professionals.",
    },
    {
      icon: FileText,
      title: "Medical Records",
      description: "Securely store and access your health records.",
    },
    {
      icon: Bell,
      title: "Reminders",
      description: "Get notifications for upcoming appointments.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Why Choose DocSpot
          </h2>
          <p className="text-muted-foreground">
            Everything you need for convenient healthcare management.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
