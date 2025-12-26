// FeaturedTours Section - Displays popular tours on the home page
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TourCard } from "@/components/tours";
import { tours } from "@/data/tours";

export function FeaturedTours() {
  // Show only the first 4 tours on home page
  const featuredTours = tours.slice(0, 4);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Curated Experiences
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
              Popular Tours
            </h2>
          </div>
          <Link to="/tours">
            <Button variant="ghost" className="text-primary">
              View All Tours
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Tours Grid - Using TourCard component */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}
