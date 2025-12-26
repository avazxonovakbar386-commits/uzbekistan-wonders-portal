// TourCard Component - Reusable card for displaying tour information
import { useNavigate } from "react-router-dom";
import { Clock, Users, Star, MapPin } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Tour } from "@/data/tours";

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  const navigate = useNavigate();

  // Navigate to dynamic payment page with tour ID
  const handleViewDetails = () => {
    navigate(`/payment/${tour.id}`);
  };

  return (
    <Card hover className="overflow-hidden h-full flex flex-col group">
      {/* Image Placeholder with Category Badge */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <MapPin className="h-8 w-8 text-primary/50" />
          </div>
        </div>
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm">
            {tour.category}
          </Badge>
        </div>
        {/* Featured Badge */}
        {tour.featured && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-accent text-accent-foreground">Featured</Badge>
          </div>
        )}
      </div>

      <CardContent className="flex-1 pt-4">
        {/* Tour Title */}
        <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
          {tour.title}
        </h3>
        {/* Tour Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {tour.description}
        </p>

        {/* Tour Info: Duration & Group Size */}
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

        {/* Rating Display */}
        <div className="flex items-center gap-1 mt-3">
          <Star className="h-4 w-4 fill-accent text-accent" />
          <span className="font-medium">{tour.rating}</span>
          <span className="text-muted-foreground text-sm">
            ({tour.reviews} reviews)
          </span>
        </div>
      </CardContent>

      {/* Card Footer with Price and CTA */}
      <CardFooter className="border-t bg-secondary/30">
        <div className="flex items-center justify-between w-full">
          <div>
            <span className="text-muted-foreground text-sm">From</span>
            <div className="text-xl font-bold text-primary">${tour.price}</div>
          </div>
          <Button size="sm" onClick={handleViewDetails}>
            View Details
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
