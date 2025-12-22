import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Star, ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import samarkandImg from "@/assets/destination-samarkand.jpg";
import bukharaImg from "@/assets/destination-bukhara.jpg";
import khivaImg from "@/assets/destination-khiva.jpg";
import tashkentImg from "@/assets/destination-tashkent.jpg";
import ferganaImg from "@/assets/destination-fergana.jpg";

const allDestinations = [
  {
    id: "samarkand",
    name: "Samarkand",
    region: "Central",
    type: "Historical",
    description: "The jewel of the Silk Road, home to the legendary Registan Square and stunning Islamic architecture.",
    image: samarkandImg,
    rating: 4.9,
    reviews: 1250,
    highlights: ["Registan Square", "Shah-i-Zinda", "Gur-e-Amir", "Bibi-Khanym Mosque"],
    tours: 12,
  },
  {
    id: "bukhara",
    name: "Bukhara",
    region: "Central",
    type: "Historical",
    description: "An open-air museum of 2,500 years of history with over 140 architectural monuments.",
    image: bukharaImg,
    rating: 4.8,
    reviews: 980,
    highlights: ["Kalyan Minaret", "Ark Fortress", "Lyab-i Hauz", "Chor Minor"],
    tours: 10,
  },
  {
    id: "khiva",
    name: "Khiva",
    region: "Khorezm",
    type: "Historical",
    description: "A perfectly preserved ancient walled city that feels like stepping back in time.",
    image: khivaImg,
    rating: 4.9,
    reviews: 856,
    highlights: ["Itchan Kala", "Kalta Minor", "Juma Mosque", "Tosh-Hovli Palace"],
    tours: 8,
  },
  {
    id: "tashkent",
    name: "Tashkent",
    region: "Capital",
    type: "Modern",
    description: "A modern capital blending Soviet heritage with ancient traditions and vibrant bazaars.",
    image: tashkentImg,
    rating: 4.6,
    reviews: 720,
    highlights: ["Chorsu Bazaar", "Amir Temur Museum", "Metro Art", "Independence Square"],
    tours: 15,
  },
  {
    id: "fergana",
    name: "Fergana Valley",
    region: "East",
    type: "Nature",
    description: "Lush valley famous for silk production, ceramics, and stunning mountain landscapes.",
    image: ferganaImg,
    rating: 4.7,
    reviews: 430,
    highlights: ["Silk Workshops", "Rishtan Ceramics", "Margilan Bazaar", "Mountain Views"],
    tours: 6,
  },
];

const Destinations = () => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const filteredDestinations = allDestinations
    .filter((dest) => {
      const matchesSearch = dest.name.toLowerCase().includes(search.toLowerCase());
      const matchesType = typeFilter === "all" || dest.type === typeFilter;
      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "reviews") return b.reviews - a.reviews;
      return b.reviews - a.reviews; // default: popular
    });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Explore <span className="text-accent">Destinations</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              From ancient Silk Road cities to vibrant modern capitals, discover the 
              treasures that await you across Uzbekistan.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b bg-card sticky top-16 md:top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex flex-wrap gap-3 items-center w-full md:w-auto">
              <Input
                placeholder="Search destinations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full md:w-64"
              />
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-40">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Historical">Historical</SelectItem>
                  <SelectItem value="Modern">Modern</SelectItem>
                  <SelectItem value="Nature">Nature</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="reviews">Most Reviews</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="section-padding bg-pattern-uzbek">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <Link
                key={destination.id}
                to={`/destinations/${destination.id}`}
                className="group"
              >
                <Card hover className="overflow-hidden h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-card/90 backdrop-blur-sm text-sm">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="font-medium">{destination.rating}</span>
                    </div>

                    {/* Location & Type */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-primary-foreground/80 text-sm mb-2">
                        <MapPin className="h-4 w-4" />
                        {destination.region} Uzbekistan
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-primary-foreground">
                        {destination.name}
                      </h3>
                    </div>
                  </div>

                  <CardContent className="pt-4">
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {destination.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {destination.highlights.slice(0, 3).map((highlight) => (
                        <span
                          key={highlight}
                          className="text-xs px-2 py-1 bg-secondary rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                      {destination.highlights.length > 3 && (
                        <span className="text-xs px-2 py-1 text-muted-foreground">
                          +{destination.highlights.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-sm text-muted-foreground">
                        {destination.tours} tours available
                      </span>
                      <Button variant="ghost" size="sm" className="text-primary">
                        Explore <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No destinations found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Destinations;
