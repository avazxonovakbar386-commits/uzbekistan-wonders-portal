// Tours data - central source of truth for all tour information
export interface Tour {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: string;
  groupSize: string;
  rating: number;
  reviews: number;
  category: string;
  locations: string[];
  image: string;
  featured: boolean;
}

export const tours: Tour[] = [
  {
    id: 1,
    title: "Fergana Valley Discovery",
    description: "Explore the lush Fergana Valley, famous for its crafts, silk production, and stunning mountain scenery.",
    price: 549,
    duration: "4 days",
    groupSize: "2-8",
    rating: 4.6,
    reviews: 78,
    category: "Cultural",
    locations: ["Fergana", "Margilan", "Kokand"],
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: 2,
    title: "Classic Silk Road Journey",
    description: "Experience the best of Uzbekistan's ancient cities in this comprehensive tour.",
    price: 1299,
    duration: "8 days",
    groupSize: "2-12",
    rating: 4.9,
    reviews: 156,
    category: "Cultural",
    locations: ["Tashkent", "Samarkand", "Bukhara", "Khiva"],
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: 3,
    title: "Samarkand Explorer",
    description: "Deep dive into the jewel of the Silk Road with expert local guides.",
    price: 599,
    duration: "4 days",
    groupSize: "2-8",
    rating: 4.8,
    reviews: 89,
    category: "Historical",
    locations: ["Samarkand"],
    image: "/placeholder.svg",
    featured: false,
  },
  {
    id: 4,
    title: "Uzbek Gastronomy Tour",
    description: "Discover Uzbekistan through its delicious cuisine and cooking traditions.",
    price: 899,
    duration: "6 days",
    groupSize: "4-10",
    rating: 4.9,
    reviews: 67,
    category: "Gastronomy",
    locations: ["Tashkent", "Samarkand", "Bukhara"],
    image: "/placeholder.svg",
    featured: false,
  },
  {
    id: 5,
    title: "Desert Adventure",
    description: "Camp under the stars in the Kyzylkum Desert with camel trekking.",
    price: 799,
    duration: "5 days",
    groupSize: "2-6",
    rating: 4.7,
    reviews: 45,
    category: "Adventure",
    locations: ["Bukhara", "Nurata"],
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: 6,
    title: "Ancient Khiva Experience",
    description: "Step back in time in the perfectly preserved ancient city of Khiva.",
    price: 649,
    duration: "3 days",
    groupSize: "2-10",
    rating: 4.8,
    reviews: 92,
    category: "Historical",
    locations: ["Khiva", "Urgench"],
    image: "/placeholder.svg",
    featured: false,
  },
];

// Helper function to find a tour by ID
export const getTourById = (id: number): Tour | undefined => {
  return tours.find((tour) => tour.id === id);
};
