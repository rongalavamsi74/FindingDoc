import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "DocSpot made finding a specialist so easy! Booked an appointment within minutes.",
    },
    {
      name: "Michael Chen",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The video consultation feature is excellent. Got medical advice from home.",
    },
    {
      name: "Dr. Emily Roberts",
      role: "Cardiologist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "DocSpot has streamlined my practice. Managing appointments is now effortless.",
    },
  ];

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            What Our Users Say
          </h2>
          <p className="text-muted-foreground">
            Trusted by thousands of patients and doctors.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground text-sm mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-foreground text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
