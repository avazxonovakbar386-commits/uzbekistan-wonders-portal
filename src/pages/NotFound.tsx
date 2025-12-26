import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { MapPin, Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30 flex items-center justify-center p-4">
      <div className="text-center max-w-lg">
        {/* Decorative Element */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
            <MapPin className="h-16 w-16 text-primary/50" />
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
        </div>

        {/* Error Code */}
        <h1 className="font-serif text-8xl md:text-9xl font-bold text-primary/20 mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
          Lost in the Silk Road?
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">
          The page you're looking for seems to have wandered off the ancient trade routes. 
          Let us guide you back to familiar territory.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="w-full sm:w-auto">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link to="/tours">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Search className="h-4 w-4 mr-2" />
              Explore Tours
            </Button>
          </Link>
        </div>

        {/* Attempted Path */}
        <p className="mt-8 text-sm text-muted-foreground">
          Attempted path: <code className="bg-secondary px-2 py-1 rounded">{location.pathname}</code>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
