import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import samarkandImg from "@/assets/destination-samarkand.jpg";
import bukharaImg from "@/assets/destination-bukhara.jpg";
import khivaImg from "@/assets/destination-khiva.jpg";
import tashkentImg from "@/assets/destination-tashkent.jpg";
import ferganaImg from "@/assets/destination-fergana.jpg";

const destinations = [
  {
    id: "samarkand",
    name: "Samarkand",
    description: "The jewel of the Silk Road with stunning Registan Square",
    image: samarkandImg,
    highlights: ["Registan Square", "Shah-i-Zinda", "Gur-e-Amir"],
  },
  {
    id: "bukhara",
    name: "Bukhara",
    description: "An open-air museum of 2,500 years of history",
    image: bukharaImg,
    highlights: ["Kalyan Minaret", "Ark Fortress", "Lyab-i Hauz"],
  },
  {
    id: "khiva",
    name: "Khiva",
    description: "A perfectly preserved ancient walled city",
    image: khivaImg,
    highlights: ["Itchan Kala", "Kalta Minor", "Juma Mosque"],
  },
  {
    id: "tashkent",
    name: "Tashkent",
    description: "A modern capital blending tradition with innovation",
    image: tashkentImg,
    highlights: ["Chorsu Bazaar", "Amir Temur Museum", "Metro Art"],
  },
  {
    id: "fergana",
    name: "Fergana Valley",
    description: "Silk production and stunning natural landscapes",
    image: ferganaImg,
    highlights: ["Silk Workshops", "Rishtan Ceramics", "Mountains"],
  },
];

export function FeaturedDestinations() {
  return (
    <section className="section-padding bg-pattern-uzbek">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Explore Uzbekistan
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Top Destinations
          </h2>
          <p className="text-muted-foreground">
            From ancient Silk Road cities to vibrant modern capitals, discover the treasures
            that await you in Uzbekistan.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {destinations.slice(0, 3).map((destination, idx) => (
            <Link
              key={destination.id}
              to={`/destinations/${destination.id}`}
              className="block group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <Card hover className="overflow-hidden h-full">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-serif text-2xl font-bold text-primary-foreground">
                      {destination.name}
                    </h3>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground mb-3">{destination.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs px-2 py-1 bg-secondary rounded-full text-secondary-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Secondary Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-6 lg:mt-8">
          {destinations.slice(3).map((destination, idx) => (
            <Link
              key={destination.id}
              to={`/destinations/${destination.id}`}
              className="block group"
            >
              <Card hover className="overflow-hidden flex flex-col md:flex-row h-full">
                <div className="relative w-full md:w-48 h-48 md:h-auto shrink-0 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="flex-1 py-4 md:py-6">
                  <h3 className="font-serif text-xl font-bold mb-2">{destination.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{destination.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs px-2 py-1 bg-secondary rounded-full text-secondary-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/destinations">
            <Button variant="outline" size="lg">
              View All Destinations
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
