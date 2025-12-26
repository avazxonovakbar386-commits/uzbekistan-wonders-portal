import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Clock, Users, Star, MapPin, Filter, Grid, List, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

const allTours = [
  {
    id: 1,
    title: "Classic Silk Road Journey",
    description: "Experience the best of Uzbekistan's ancient cities in this comprehensive 8-day tour covering all major highlights.",
    duration: "8 days",
    durationDays: 8,
    groupSize: "2-12",
    price: 1299,
    rating: 4.9,
    reviews: 156,
    category: "Cultural",
    destinations: ["Tashkent", "Samarkand", "Bukhara", "Khiva"],
    featured: true,
    difficulty: "Easy",
    included: ["Accommodation", "Transport", "Guide", "Meals"],
  },
  {
    id: 2,
    title: "Samarkand Explorer",
    description: "Deep dive into the jewel of the Silk Road with expert local guides. Perfect for history enthusiasts.",
    duration: "4 days",
    durationDays: 4,
    groupSize: "2-8",
    price: 599,
    rating: 4.8,
    reviews: 89,
    category: "Historical",
    destinations: ["Samarkand"],
    featured: false,
    difficulty: "Easy",
    included: ["Accommodation", "Transport", "Guide"],
  },
  {
    id: 3,
    title: "Uzbek Gastronomy Tour",
    description: "Discover Uzbekistan through its delicious cuisine. Cooking classes, market visits, and local home meals.",
    duration: "6 days",
    durationDays: 6,
    groupSize: "4-10",
    price: 899,
    rating: 4.9,
    reviews: 67,
    category: "Gastronomy",
    destinations: ["Tashkent", "Samarkand", "Bukhara"],
    featured: true,
    difficulty: "Easy",
    included: ["Accommodation", "Transport", "Guide", "Meals", "Cooking Classes"],
  },
  {
    id: 4,
    title: "Desert Adventure",
    description: "Camp under the stars in the Kyzylkum Desert with camel trekking and traditional yurt stays.",
    duration: "5 days",
    durationDays: 5,
    groupSize: "2-6",
    price: 799,
    rating: 4.7,
    reviews: 45,
    category: "Adventure",
    destinations: ["Bukhara", "Nurata"],
    featured: false,
    difficulty: "Moderate",
    included: ["Accommodation", "Transport", "Guide", "Meals", "Camping Gear"],
  },
  {
    id: 5,
    title: "Photography Expedition",
    description: "Capture the beauty of Uzbekistan with a professional photographer guide. Best angles guaranteed.",
    duration: "10 days",
    durationDays: 10,
    groupSize: "4-8",
    price: 1899,
    rating: 5.0,
    reviews: 23,
    category: "Cultural",
    destinations: ["Tashkent", "Samarkand", "Bukhara", "Khiva"],
    featured: true,
    difficulty: "Easy",
    included: ["Accommodation", "Transport", "Guide", "Photo Workshops"],
  },
  {
    id: 6,
    title: "Fergana Valley Discovery",
    description: "Explore silk workshops, ceramic masters, and the lush landscapes of the famous Fergana Valley.",
    duration: "4 days",
    durationDays: 4,
    groupSize: "2-8",
    price: 549,
    rating: 4.6,
    reviews: 34,
    category: "Cultural",
    destinations: ["Fergana", "Margilan", "Rishtan"],
    featured: false,
    difficulty: "Easy",
    included: ["Accommodation", "Transport", "Guide", "Workshop Access"],
  },
  {
    id: 7,
    title: "Bukhara Heritage Walk",
    description: "Immerse yourself in the living museum of Bukhara. Explore 140+ monuments with expert historians.",
    duration: "3 days",
    durationDays: 3,
    groupSize: "2-10",
    price: 449,
    rating: 4.8,
    reviews: 78,
    category: "Historical",
    destinations: ["Bukhara"],
    featured: false,
    difficulty: "Easy",
    included: ["Accommodation", "Guide", "Entry Tickets"],
  },
  {
    id: 8,
    title: "Khiva Time Travel",
    description: "Step back in time within the perfectly preserved walls of Itchan Kala. A UNESCO World Heritage experience.",
    duration: "2 days",
    durationDays: 2,
    groupSize: "2-12",
    price: 299,
    rating: 4.9,
    reviews: 112,
    category: "Historical",
    destinations: ["Khiva"],
    featured: false,
    difficulty: "Easy",
    included: ["Accommodation", "Guide", "Entry Tickets"],
  },
];

const categories = ["Cultural", "Historical", "Adventure", "Gastronomy"];

const Tours = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [durationFilter, setDurationFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  const destinationParam = searchParams.get("destination");

  const filteredTours = allTours
    .filter((tour) => {
      const matchesSearch =
        tour.title.toLowerCase().includes(search.toLowerCase()) ||
        tour.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = categoryFilter === "all" || tour.category === categoryFilter;
      const matchesPrice = tour.price >= priceRange[0] && tour.price <= priceRange[1];
      const matchesDuration =
        durationFilter === "all" ||
        (durationFilter === "short" && tour.durationDays <= 3) ||
        (durationFilter === "medium" && tour.durationDays > 3 && tour.durationDays <= 7) ||
        (durationFilter === "long" && tour.durationDays > 7);
      const matchesDestination =
        !destinationParam ||
        tour.destinations.some((d) => d.toLowerCase() === destinationParam.toLowerCase());

      return matchesSearch && matchesCategory && matchesPrice && matchesDuration && matchesDestination;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "duration") return a.durationDays - b.durationDays;
      return b.reviews - a.reviews; // popular
    });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Explore Our <span className="text-accent">Tours</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              From cultural immersions to adventure expeditions, find your perfect 
              Uzbekistan experience with our expertly curated tours.
            </p>
            {destinationParam && (
              <Badge className="mt-4 bg-accent text-accent-foreground">
                Filtered by: {destinationParam}
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-pattern-uzbek">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className={cn(
              "lg:w-72 shrink-0",
              showFilters ? "block" : "hidden lg:block"
            )}>
              <Card className="sticky top-28">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filters
                  </h3>

                  {/* Search */}
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Search</label>
                    <Input
                      placeholder="Search tours..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>

                  {/* Category */}
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Category</label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="cat-all"
                          checked={categoryFilter === "all"}
                          onCheckedChange={() => setCategoryFilter("all")}
                        />
                        <label htmlFor="cat-all" className="text-sm cursor-pointer">
                          All Categories
                        </label>
                      </div>
                      {categories.map((cat) => (
                        <div key={cat} className="flex items-center gap-2">
                          <Checkbox
                            id={`cat-${cat}`}
                            checked={categoryFilter === cat}
                            onCheckedChange={() => setCategoryFilter(cat)}
                          />
                          <label htmlFor={`cat-${cat}`} className="text-sm cursor-pointer">
                            {cat}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-4 block">
                      Price Range: ${priceRange[0]} - ${priceRange[1]}
                    </label>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      min={0}
                      max={2000}
                      step={50}
                      className="mt-2"
                    />
                  </div>

                  {/* Duration */}
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Duration</label>
                    <Select value={durationFilter} onValueChange={setDurationFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any Duration</SelectItem>
                        <SelectItem value="short">1-3 Days</SelectItem>
                        <SelectItem value="medium">4-7 Days</SelectItem>
                        <SelectItem value="long">8+ Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setSearch("");
                      setCategoryFilter("all");
                      setPriceRange([0, 2000]);
                      setDurationFilter("all");
                    }}
                  >
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            </aside>

            {/* Tours List */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="lg:hidden"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                  <span className="text-muted-foreground text-sm">
                    {filteredTours.length} tours found
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="duration">Duration</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="hidden sm:flex border rounded-lg overflow-hidden">
                    <Button
                      variant="ghost"
                      size="icon"
                      className={cn("rounded-none", viewMode === "grid" && "bg-secondary")}
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={cn("rounded-none", viewMode === "list" && "bg-secondary")}
                      onClick={() => setViewMode("list")}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Tours Grid/List */}
              <div
                className={cn(
                  "gap-6",
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                    : "flex flex-col"
                )}
              >
                {filteredTours.map((tour) => (
                  <Link key={tour.id} to={`/tours/${tour.id}`} className="group">
                    <Card
                      hover
                      className={cn(
                        "overflow-hidden h-full",
                        viewMode === "list" && "flex flex-col md:flex-row"
                      )}
                    >
                      {/* Image */}
                      <div
                        className={cn(
                          "relative bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden",
                          viewMode === "grid" ? "h-48" : "h-48 md:h-auto md:w-64 shrink-0"
                        )}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <MapPin className="h-12 w-12 text-primary/30" />
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

                      <div className="flex flex-col flex-1">
                        <CardContent className="flex-1 pt-4">
                          <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                            {tour.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {tour.description}
                          </p>

                          {/* Destinations */}
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                            <MapPin className="h-4 w-4" />
                            {tour.destinations.join(" • ")}
                          </div>

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
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-accent text-accent" />
                              <span className="font-medium text-foreground">{tour.rating}</span>
                              <span>({tour.reviews})</span>
                            </div>
                          </div>
                        </CardContent>

                        <CardFooter className="border-t bg-secondary/30">
                          <div className="flex items-center justify-between w-full">
                            <div>
                              <span className="text-muted-foreground text-sm">From</span>
                              <div className="text-xl font-bold text-primary">${tour.price}</div>
                            </div>
                            <Button size="sm">
                              View Details
                              <ArrowRight className="h-4 w-4 ml-1" />
                            </Button>
                          </div>
                        </CardFooter>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>

              {filteredTours.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg mb-4">
                    No tours found matching your criteria.
                  </p>
                  <Button variant="outline" onClick={() => {
                    setSearch("");
                    setCategoryFilter("all");
                    setPriceRange([0, 2000]);
                    setDurationFilter("all");
                  }}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tours;
