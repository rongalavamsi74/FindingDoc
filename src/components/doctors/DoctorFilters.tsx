import { useState } from "react";
import { Search, MapPin, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DoctorFiltersProps {
  onSearch: (query: string) => void;
  onSpecialtyChange: (specialty: string) => void;
  onLocationChange: (location: string) => void;
}

const specialties = [
  "All Specialties",
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Ophthalmology",
  "Pediatrics",
  "Dermatology",
  "General Medicine",
  "Family Medicine",
];

const locations = [
  "All Locations",
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
];

const DoctorFilters = ({ onSearch, onSpecialtyChange, onLocationChange }: DoctorFiltersProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <div className="bg-card rounded-2xl border border-border p-4 mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search doctors by name..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full h-12 pl-12 pr-4 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {searchQuery && (
            <button
              onClick={() => handleSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Desktop Filters */}
        <div className="hidden lg:flex gap-3">
          <Select onValueChange={onSpecialtyChange}>
            <SelectTrigger className="w-[180px] h-12">
              <SelectValue placeholder="Specialty" />
            </SelectTrigger>
            <SelectContent>
              {specialties.map((specialty) => (
                <SelectItem key={specialty} value={specialty.toLowerCase()}>
                  {specialty}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={onLocationChange}>
            <SelectTrigger className="w-[160px] h-12">
              <MapPin className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location.toLowerCase()}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Mobile Filter Toggle */}
        <Button
          variant="outline"
          className="lg:hidden h-12 gap-2"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
        </Button>
      </div>

      {/* Mobile Filters */}
      {showFilters && (
        <div className="lg:hidden flex flex-col gap-3 mt-4 pt-4 border-t border-border">
          <Select onValueChange={onSpecialtyChange}>
            <SelectTrigger className="w-full h-12">
              <SelectValue placeholder="Specialty" />
            </SelectTrigger>
            <SelectContent>
              {specialties.map((specialty) => (
                <SelectItem key={specialty} value={specialty.toLowerCase()}>
                  {specialty}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={onLocationChange}>
            <SelectTrigger className="w-full h-12">
              <MapPin className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location.toLowerCase()}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};

export default DoctorFilters;
