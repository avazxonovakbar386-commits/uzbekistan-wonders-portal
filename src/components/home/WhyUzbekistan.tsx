import { Shield, HeartHandshake, Compass, Sparkles, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Licensed tours with professional guides and 24/7 support throughout your journey.",
  },
  {
    icon: HeartHandshake,
    title: "Local Expertise",
    description: "Experience authentic culture with local guides who share hidden gems and stories.",
  },
  {
    icon: Compass,
    title: "Tailored Experiences",
    description: "Customize your itinerary to match your interests, pace, and travel style.",
  },
  {
    icon: Sparkles,
    title: "Unique Access",
    description: "Exclusive access to historical sites, artisan workshops, and local homes.",
  },
  {
    icon: Clock,
    title: "Flexible Booking",
    description: "Easy online booking with free cancellation up to 48 hours before departure.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized excellence in tourism with numerous international travel awards.",
  },
];

export function WhyUzbekistan() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6">
              Your Journey to <span className="text-primary">Uzbekistan</span> Starts Here
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              With over 15 years of experience, we've perfected the art of showcasing 
              Uzbekistan's treasures. Our passionate team ensures every traveler 
              experiences the magic of the Silk Road.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "50+", label: "Expert Guides" },
                { value: "98%", label: "Satisfaction Rate" },
                { value: "24/7", label: "Support" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-secondary/50 border border-border"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
