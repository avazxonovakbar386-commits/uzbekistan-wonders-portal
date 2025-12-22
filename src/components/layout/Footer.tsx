import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Newsletter Section */}
      <div className="bg-primary">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-primary-foreground/80">
                Get travel tips, exclusive offers, and destination guides
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 min-w-[250px]"
              />
              <Button variant="gold" size="lg">
                <Send className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-bold">
                Uzbekistan<span className="text-accent">Travel</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 text-sm leading-relaxed">
              Your trusted partner for exploring the ancient Silk Road treasures.
              Discover Uzbekistan's rich history, culture, and hospitality.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Destinations", "Tours", "Travel Info", "About Us", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Destinations</h4>
            <ul className="space-y-3">
              {["Tashkent", "Samarkand", "Bukhara", "Khiva", "Fergana Valley"].map(
                (city) => (
                  <li key={city}>
                    <Link
                      to={`/destinations/${city.toLowerCase().replace(" ", "-")}`}
                      className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                    >
                      {city}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  12 Amir Temur Street, Tashkent 100047, Uzbekistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="tel:+998712345678"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  +998 71 234 56 78
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="mailto:info@uzbekistantravel.uz"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  info@uzbekistantravel.uz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} UzbekistanTravel.uz. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
