// Payment Page - Dynamic route with tour ID parameter
// Handles payment for specific tours with form validation
import { useParams, useNavigate, Link } from "react-router-dom";
import { CreditCard, ArrowLeft, Lock, Clock, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getTourById, type Tour } from "@/data/tours";

const Payment = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [tour, setTour] = useState<Tour | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
  });

  // Effect to find tour by ID from URL params
  // Redirects to home if tour not found (no 404 shown)
  useEffect(() => {
    if (id) {
      const tourId = parseInt(id, 10);
      const foundTour = getTourById(tourId);

      if (foundTour) {
        setTour(foundTour);
      } else {
        // Invalid ID - redirect to home instead of showing 404
        navigate("/", { replace: true });
      }
    } else {
      // No ID provided - redirect to home
      navigate("/", { replace: true });
    }
    setIsLoading(false);
  }, [id, navigate]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tour) {
      alert(`Payment Successful for ${tour.title}`);
      navigate("/");
    }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  // Tour not found - this should not render as we redirect, but just in case
  if (!tour) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header with Back Button */}
      <div className="bg-primary/5 border-b">
        <div className="container-custom py-4">
          <Link
            to="/"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tours
          </Link>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="max-w-2xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">
              Complete Your Booking
            </h1>
            <p className="text-muted-foreground">
              Secure payment for your adventure
            </p>
          </div>

          <div className="grid gap-6">
            {/* Tour Summary Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Tour Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Tour Title */}
                  <div>
                    <h3 className="font-serif text-xl font-semibold">
                      {tour.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {tour.description}
                    </p>
                  </div>

                  {/* Tour Info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {tour.duration}
                    </div>
                    <span>•</span>
                    <span>{tour.category}</span>
                  </div>

                  {/* Price */}
                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="font-semibold">Total Price</span>
                    <span className="text-2xl font-bold text-primary">
                      ${tour.price}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Form Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Payment Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Cardholder Name Input */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Cardholder Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Card Number Input */}
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Security Notice */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 p-3 rounded-lg">
                    <Lock className="h-4 w-4" />
                    <span>Your payment information is secure and encrypted</span>
                  </div>

                  {/* Pay Now Button */}
                  <Button type="submit" size="lg" className="w-full">
                    Pay Now - ${tour.price}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Back to Tours Button */}
            <div className="text-center">
              <Link to="/">
                <Button variant="outline" size="lg">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Tours
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
