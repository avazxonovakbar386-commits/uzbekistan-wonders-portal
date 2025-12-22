import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container-custom">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Have questions about our tours? We're here to help plan your perfect Uzbekistan adventure.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-serif text-2xl font-bold mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input placeholder="Your Name" required />
                      <Input type="email" placeholder="Email Address" required />
                    </div>
                    <Input placeholder="Subject" required />
                    <Textarea placeholder="Your message..." rows={6} required />
                    <Button type="submit" size="lg">
                      <Send className="h-4 w-4 mr-2" /> Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Address", content: "12 Amir Temur Street, Tashkent 100047, Uzbekistan" },
                { icon: Phone, title: "Phone", content: "+998 71 234 56 78" },
                { icon: Mail, title: "Email", content: "info@uzbekistantravel.uz" },
              ].map((item, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.content}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center">
                <p className="text-muted-foreground">Google Map Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
