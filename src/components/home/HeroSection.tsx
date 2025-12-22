import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "./SearchBar";
import heroImage from "@/assets/hero-registan.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent border border-accent/30 mb-6">
            <span className="text-sm font-medium">Welcome to the Heart of the Silk Road</span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Discover{" "}
            <span className="text-accent">Uzbekistan</span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal italic">
              Your Ultimate Travel Guide
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Experience ancient cities, breathtaking architecture, and warm hospitality. 
            Journey through time along the legendary Silk Road.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/tours">
              <Button variant="hero" size="xl">
                Book a Tour
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link to="/destinations">
              <Button variant="hero-outline" size="xl">
                Explore Destinations
              </Button>
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-5xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <SearchBar />
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {[
            { value: "5+", label: "UNESCO Sites" },
            { value: "2000+", label: "Years of History" },
            { value: "10K+", label: "Happy Travelers" },
            { value: "50+", label: "Curated Tours" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</div>
              <div className="text-sm text-primary-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
