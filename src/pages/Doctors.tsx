import { useState, useMemo } from "react";
import Footer from "@/components/layout/Footer";
import DoctorCard from "@/components/doctors/DoctorCard";
import DoctorFilters from "@/components/doctors/DoctorFilters";
import { mockDoctors } from "@/data/mockDoctors";

const Doctors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [location, setLocation] = useState("");

  const filteredDoctors = useMemo(() => {
    return mockDoctors.filter((doctor) => {
      const matchesSearch = doctor.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesSpecialty =
        !specialty ||
        specialty === "all specialties" ||
        doctor.specialty.toLowerCase() === specialty;

      const matchesLocation =
        !location ||
        location === "all locations" ||
        doctor.location.toLowerCase() === location;

      return matchesSearch && matchesSpecialty && matchesLocation;
    });
  }, [searchQuery, specialty, location]);

  return (
    <div className="min-h-screen bg-background">

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">

          <div className="text-center max-w-2xl mx-auto mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Your <span className="text-gradient">Perfect Doctor</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Browse through our network of verified healthcare professionals and book your appointment today.
            </p>
          </div>

          <DoctorFilters
            onSearch={setSearchQuery}
            onSpecialtyChange={setSpecialty}
            onLocationChange={setLocation}
          />

          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {filteredDoctors.length}
              </span>{" "}
              doctors
            </p>
          </div>

          {filteredDoctors.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">
                No doctors found
              </p>
              <p className="text-sm text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Doctors;
