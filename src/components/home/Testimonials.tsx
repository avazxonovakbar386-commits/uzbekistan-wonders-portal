import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    avatar: "SJ",
    rating: 5,
    text: "An absolutely magical experience! The Registan Square at sunset was breathtaking. Our guide Aziz was incredibly knowledgeable and made history come alive. This trip exceeded all expectations.",
    tour: "Classic Silk Road Journey",
  },
  {
    id: 2,
    name: "Marcus Weber",
    location: "Berlin, Germany",
    avatar: "MW",
    rating: 5,
    text: "I've traveled extensively, but Uzbekistan surprised me in the best way. The hospitality, the food, the architecture – everything was perfect. Already planning my return trip!",
    tour: "Samarkand Explorer",
  },
  {
    id: 3,
    name: "Emma Thompson",
    location: "London, UK",
    avatar: "ET",
    rating: 5,
    text: "The cooking classes and market visits gave me such an authentic taste of Uzbek culture. The plov we made together was the best I've ever had. Highly recommend the gastronomy tour!",
    tour: "Uzbek Gastronomy Tour",
  },
  {
    id: 4,
    name: "Hiroshi Tanaka",
    location: "Tokyo, Japan",
    avatar: "HT",
    rating: 5,
    text: "The desert camping experience was surreal. Sleeping under millions of stars, waking up to camel bells – it felt like stepping back in time on the ancient Silk Road.",
    tour: "Desert Adventure",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = typeof window !== "undefined" && window.innerWidth >= 1024 ? 3 : 1;

  const next = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerView >= testimonials.length ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, testimonials.length - itemsPerView) : prev - 1
    );
  };

  return (
    <section className="section-padding bg-primary text-primary-foreground overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Traveler Stories
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-primary-foreground/80">
            Don't just take our word for it. Hear from travelers who've experienced 
            the magic of Uzbekistan with us.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full lg:w-1/3 flex-shrink-0 px-3"
                >
                  <Card className="bg-primary-foreground/10 border-primary-foreground/20 h-full">
                    <CardContent className="p-6">
                      {/* Quote Icon */}
                      <Quote className="h-8 w-8 text-accent mb-4" />

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-accent text-accent"
                          />
                        ))}
                      </div>

                      {/* Text */}
                      <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                        "{testimonial.text}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-semibold">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-primary-foreground/60">
                            {testimonial.location}
                          </div>
                        </div>
                      </div>

                      {/* Tour Badge */}
                      <div className="mt-4 pt-4 border-t border-primary-foreground/10">
                        <span className="text-xs text-primary-foreground/50">Tour taken:</span>
                        <div className="text-sm text-accent">{testimonial.tour}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="hero-outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="hero-outline"
              size="icon"
              onClick={next}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
