import { useState } from "react";
import { Search, Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  className?: string;
  variant?: "hero" | "page";
}

export function SearchBar({ className, variant = "hero" }: SearchBarProps) {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [tourType, setTourType] = useState("");
  const [travelers, setTravelers] = useState("");

  const isHero = variant === "hero";

  return (
    <div
      className={cn(
        "w-full rounded-2xl overflow-hidden",
        isHero
          ? "bg-card/95 backdrop-blur-lg shadow-xl"
          : "bg-card border shadow-sm",
        className
      )}
    >
      <div className="p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Destination */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" />
              Destination
            </label>
            <Select value={destination} onValueChange={setDestination}>
              <SelectTrigger className="h-12 border-0 bg-secondary">
                <SelectValue placeholder="Where to?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tashkent">Tashkent</SelectItem>
                <SelectItem value="samarkand">Samarkand</SelectItem>
                <SelectItem value="bukhara">Bukhara</SelectItem>
                <SelectItem value="khiva">Khiva</SelectItem>
                <SelectItem value="fergana">Fergana Valley</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Date */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5" />
              Travel Date
            </label>
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="h-12 border-0 bg-secondary"
            />
          </div>

          {/* Tour Type */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Tour Type
            </label>
            <Select value={tourType} onValueChange={setTourType}>
              <SelectTrigger className="h-12 border-0 bg-secondary">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cultural">Cultural</SelectItem>
                <SelectItem value="historical">Historical</SelectItem>
                <SelectItem value="adventure">Adventure</SelectItem>
                <SelectItem value="gastronomy">Gastronomy</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Travelers */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
              <Users className="h-3.5 w-3.5" />
              Travelers
            </label>
            <Select value={travelers} onValueChange={setTravelers}>
              <SelectTrigger className="h-12 border-0 bg-secondary">
                <SelectValue placeholder="How many?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Person</SelectItem>
                <SelectItem value="2">2 People</SelectItem>
                <SelectItem value="3-4">3-4 People</SelectItem>
                <SelectItem value="5+">5+ People</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <Button variant="gold" size="xl" className="w-full h-12">
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
