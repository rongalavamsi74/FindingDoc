import { Link } from "react-router-dom";
import { Heart, Brain, Bone, Eye, Baby, Stethoscope } from "lucide-react";

const SpecialtiesSection = () => {
  const specialties = [
    { icon: Heart, name: "Cardiology", doctors: 45 },
    { icon: Brain, name: "Neurology", doctors: 32 },
    { icon: Bone, name: "Orthopedics", doctors: 38 },
    { icon: Eye, name: "Ophthalmology", doctors: 28 },
    { icon: Baby, name: "Pediatrics", doctors: 52 },
    { icon: Stethoscope, name: "General Medicine", doctors: 68 },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Browse by Specialty
          </h2>
          <p className="text-muted-foreground">
            Find specialists for your health needs.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {specialties.map((specialty, index) => (
            <Link
              key={index}
              to={`/doctors?specialty=${specialty.name.toLowerCase()}`}
              className="p-5 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/5 transition-colors text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <specialty.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground text-sm mb-1">
                {specialty.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {specialty.doctors} Doctors
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
