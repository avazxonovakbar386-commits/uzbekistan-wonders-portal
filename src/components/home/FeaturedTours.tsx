import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Clock, Users, Star, MapPin } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const tours = [
  {
    id: 1,
    title: "Fergana Valley Discovery",
    description: "Explore the lush Fergana Valley, famous for its crafts, silk production, and stunning mountain scenery.",
    duration: "4 days",
    groupSize: "2-8",
    price: 549,
    rating: 4.6,
    reviews: 78,
    category: "Cultural",
    locations: ["Fergana", "Margilan", "Kokand"],
    featured: true,
  },
  {
    id: 2,
    title: "Classic Silk Road Journey",
    description: "Experience the best of Uzbekistan's ancient cities in this comprehensive tour.",
    duration: "8 days",
    groupSize: "2-12",
    price: 1299,
    rating: 4.9,
    reviews: 156,
    category: "Cultural",
    locations: ["Tashkent", "Samarkand", "Bukhara", "Khiva"],
    featured: true,
  },
  {
    id: 3,
    title: "Samarkand Explorer",
    description: "Deep dive into the jewel of the Silk Road with expert local guides.",
    duration: "4 days",
    groupSize: "2-8",
    price: 599,
    rating: 4.8,
    reviews: 89,
    category: "Historical",
    locations: ["Samarkand"],
    featured: false,
  },
  {
    id: 4,
    title: "Uzbek Gastronomy Tour",
    description: "Discover Uzbekistan through its delicious cuisine and cooking traditions.",
    duration: "6 days",
    groupSize: "4-10",
    price: 899,
    rating: 4.9,
    reviews: 67,
    category: "Gastronomy",
    locations: ["Tashkent", "Samarkand", "Bukhara"],
    featured: false,
  },
];

export function FeaturedTours() {
  const navigate = useNavigate();

  const handleViewDetails = (tour: typeof tours[0]) => {
    navigate("/payment", { state: { title: tour.title, price: tour.price } });
  };

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

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour) => (
            <Card key={tour.id} hover className="overflow-hidden h-full flex flex-col group">
              {/* Image Placeholder with Category */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-primary/50" />
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm">
                    {tour.category}
                  </Badge>
                </div>
                {tour.featured && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-accent text-accent-foreground">Featured</Badge>
                  </div>
                )}
              </div>

              <CardContent className="flex-1 pt-4">
                <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {tour.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {tour.description}
                </p>

                {/* Tour Info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {tour.groupSize}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-3">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="font-medium">{tour.rating}</span>
                  <span className="text-muted-foreground text-sm">
                    ({tour.reviews} reviews)
                  </span>
                </div>
              </CardContent>

              <CardFooter className="border-t bg-secondary/30">
                <div className="flex items-center justify-between w-full">
                  <div>
                    <span className="text-muted-foreground text-sm">From</span>
                    <div className="text-xl font-bold text-primary">${tour.price}</div>
                  </div>
                  <Button size="sm" onClick={() => handleViewDetails(tour)}>
                    View Details
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
