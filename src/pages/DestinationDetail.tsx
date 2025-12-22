import { useParams, Link } from "react-router-dom";
import { MapPin, Clock, Star, Calendar, ChevronRight, Camera, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import samarkandImg from "@/assets/destination-samarkand.jpg";
import bukharaImg from "@/assets/destination-bukhara.jpg";
import khivaImg from "@/assets/destination-khiva.jpg";
import tashkentImg from "@/assets/destination-tashkent.jpg";
import ferganaImg from "@/assets/destination-fergana.jpg";

const destinationData: Record<string, any> = {
  samarkand: {
    name: "Samarkand",
    tagline: "The Jewel of the Silk Road",
    description: "Samarkand is one of the oldest continuously inhabited cities in Central Asia. As a vital stop on the Silk Road, it became a melting pot of cultures, religions, and ideas. Today, its stunning Islamic architecture and rich history make it a must-visit destination.",
    image: samarkandImg,
    rating: 4.9,
    reviews: 1250,
    bestTime: "April - June, September - November",
    avgDuration: "2-3 days",
    attractions: [
      { name: "Registan Square", description: "The heart of ancient Samarkand, featuring three magnificent madrasas", icon: "landmark" },
      { name: "Shah-i-Zinda", description: "A stunning avenue of mausoleums with the most intricate tile work", icon: "temple" },
      { name: "Gur-e-Amir", description: "The mausoleum of Amir Timur (Tamerlane), adorned with azure domes", icon: "monument" },
      { name: "Bibi-Khanym Mosque", description: "Once the largest mosque in Central Asia, built for Timur's wife", icon: "mosque" },
    ],
    tips: [
      "Visit Registan Square at sunset for the most magical lighting",
      "Hire a local guide to understand the rich history",
      "Don't miss the paper-making workshop in Konigil village",
      "Try local plov at the Central Bazaar for authentic taste",
    ],
  },
  bukhara: {
    name: "Bukhara",
    tagline: "An Open-Air Museum",
    description: "Bukhara is a living museum of 2,500 years of history. With over 140 architectural monuments, this holy city was once a major center of Islamic learning and a key trading hub on the Silk Road.",
    image: bukharaImg,
    rating: 4.8,
    reviews: 980,
    bestTime: "March - May, September - November",
    avgDuration: "2-3 days",
    attractions: [
      { name: "Kalyan Minaret", description: "The iconic 47m tower that even Genghis Khan spared from destruction", icon: "tower" },
      { name: "Ark Fortress", description: "The ancient royal residence dating back over 2,000 years", icon: "castle" },
      { name: "Lyab-i Hauz", description: "A peaceful plaza with ancient mulberry trees and traditional teahouses", icon: "water" },
      { name: "Chor Minor", description: "A unique four-towered structure, each dome representing a religion", icon: "church" },
    ],
    tips: [
      "Stay in a traditional courtyard hotel for authentic experience",
      "Explore the covered bazaars for silk and crafts",
      "Evening walks through the old city are magical",
      "Visit hammams (traditional baths) for relaxation",
    ],
  },
  khiva: {
    name: "Khiva",
    tagline: "A Frozen Moment in Time",
    description: "Khiva's Itchan Kala (inner walled city) is a UNESCO World Heritage Site that feels like stepping into a living museum. Its perfectly preserved mud-brick walls contain mosques, madrasas, and minarets unchanged for centuries.",
    image: khivaImg,
    rating: 4.9,
    reviews: 856,
    bestTime: "April - June, September - October",
    avgDuration: "1-2 days",
    attractions: [
      { name: "Itchan Kala", description: "The inner walled city with 50+ historical monuments", icon: "wall" },
      { name: "Kalta Minor", description: "The unfinished turquoise-tiled minaret, Khiva's symbol", icon: "tower" },
      { name: "Juma Mosque", description: "Features 213 carved wooden columns, each unique", icon: "mosque" },
      { name: "Tosh-Hovli Palace", description: "The Stone House with stunning tilework and courtyards", icon: "palace" },
    ],
    tips: [
      "Arrive early morning to see the city wake up",
      "Climb Islam Khoja Minaret for panoramic views",
      "Watch traditional puppet shows in the evening",
      "Buy handwoven carpets directly from artisans",
    ],
  },
  tashkent: {
    name: "Tashkent",
    tagline: "Where Tradition Meets Modernity",
    description: "Uzbekistan's vibrant capital is a fascinating blend of Soviet architecture, ancient traditions, and modern development. Rebuilt after a devastating 1966 earthquake, Tashkent offers wide boulevards, beautiful parks, and the world's most decorated metro system.",
    image: tashkentImg,
    rating: 4.6,
    reviews: 720,
    bestTime: "March - May, September - November",
    avgDuration: "1-2 days",
    attractions: [
      { name: "Chorsu Bazaar", description: "Central Asia's largest covered market under a stunning blue dome", icon: "shop" },
      { name: "Metro Art", description: "Each station is a unique art gallery with chandeliers and mosaics", icon: "train" },
      { name: "Amir Temur Museum", description: "Learn about the great conqueror who shaped Central Asia", icon: "museum" },
      { name: "Independence Square", description: "The heart of modern Tashkent with fountains and monuments", icon: "flag" },
    ],
    tips: [
      "Take a metro tour to see the ornate stations",
      "Visit Chorsu Bazaar early morning for fresh produce",
      "Try shashlik (grilled meat) at any street vendor",
      "Evening stroll along Broadway pedestrian street",
    ],
  },
  fergana: {
    name: "Fergana Valley",
    tagline: "The Silk Road's Green Heart",
    description: "Nestled between the Tian Shan mountains, the Fergana Valley is Uzbekistan's most fertile region. Famous for silk production, distinctive ceramics, and the warmth of its people, this area offers a different perspective on Uzbek culture.",
    image: ferganaImg,
    rating: 4.7,
    reviews: 430,
    bestTime: "April - June, September - October",
    avgDuration: "2-3 days",
    attractions: [
      { name: "Margilan Silk Factory", description: "Watch the entire silk-making process from cocoon to fabric", icon: "fabric" },
      { name: "Rishtan Ceramics", description: "Visit workshops producing the famous blue-and-white pottery", icon: "pot" },
      { name: "Kokand Palace", description: "The last Khanate's stunning palace with intricate tilework", icon: "palace" },
      { name: "Chust Knives", description: "Traditional blade-making craft passed down for generations", icon: "knife" },
    ],
    tips: [
      "Stay overnight to experience true Uzbek hospitality",
      "Learn to make silk at Yodgorlik factory",
      "Commission custom ceramics from Rishtan masters",
      "Visit local homes for homemade meals",
    ],
  },
};

const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const destination = id ? destinationData[id] : null;

  if (!destination) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Destination not found</h1>
          <Link to="/destinations">
            <Button>Back to Destinations</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/30 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="container-custom">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-4">
              <Link to="/" className="hover:text-primary-foreground">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/destinations" className="hover:text-primary-foreground">Destinations</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-primary-foreground">{destination.name}</span>
            </nav>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-2">
              {destination.name}
            </h1>
            <p className="text-xl text-accent font-medium mb-4">{destination.tagline}</p>

            <div className="flex flex-wrap items-center gap-4 text-primary-foreground/80">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-accent text-accent" />
                <span className="font-semibold text-primary-foreground">{destination.rating}</span>
                <span>({destination.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-5 w-5" />
                <span>Recommended: {destination.avgDuration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-5 w-5" />
                <span>Best time: {destination.bestTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start mb-8 bg-secondary/50">
                  <TabsTrigger value="overview" className="flex gap-2">
                    <Info className="h-4 w-4" />
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="attractions" className="flex gap-2">
                    <Camera className="h-4 w-4" />
                    Attractions
                  </TabsTrigger>
                  <TabsTrigger value="tips" className="flex gap-2">
                    <MapPin className="h-4 w-4" />
                    Travel Tips
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="animate-fade-in">
                  <h2 className="font-serif text-2xl font-bold mb-4">About {destination.name}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {destination.description}
                  </p>

                  {/* Map Placeholder */}
                  <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center mb-8">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="attractions" className="animate-fade-in">
                  <h2 className="font-serif text-2xl font-bold mb-6">Top Attractions</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {destination.attractions.map((attraction: any, idx: number) => (
                      <Card key={idx} className="hover:border-primary/30 transition-colors">
                        <CardContent className="p-5">
                          <h3 className="font-semibold text-lg mb-2">{attraction.name}</h3>
                          <p className="text-muted-foreground text-sm">{attraction.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="tips" className="animate-fade-in">
                  <h2 className="font-serif text-2xl font-bold mb-6">Travel Tips</h2>
                  <ul className="space-y-4">
                    {destination.tips.map((tip: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-primary text-sm font-medium">{idx + 1}</span>
                        </div>
                        <span className="text-muted-foreground">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-28">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-4">Book a Tour</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Explore {destination.name} with our expert local guides. Choose from multiple tour options.
                  </p>
                  <Link to={`/tours?destination=${id}`}>
                    <Button className="w-full mb-3" size="lg">
                      View Tours
                    </Button>
                  </Link>
                  <Link to="/booking">
                    <Button variant="outline" className="w-full" size="lg">
                      Custom Trip
                    </Button>
                  </Link>

                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-semibold mb-3">Quick Facts</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Best Season</span>
                        <span className="font-medium">Spring & Fall</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Avg. Duration</span>
                        <span className="font-medium">{destination.avgDuration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">UNESCO Sites</span>
                        <span className="font-medium">Yes</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetail;
