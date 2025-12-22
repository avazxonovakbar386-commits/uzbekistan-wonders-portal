import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Calendar, Car, Lightbulb } from "lucide-react";

const sections = [
  { icon: Plane, title: "Visa Information", content: "Most nationalities can obtain e-visas or visa-free entry for up to 30 days. Apply online 3 days before travel." },
  { icon: Calendar, title: "Best Time to Visit", content: "Spring (April-June) and Fall (September-November) offer ideal weather with mild temperatures." },
  { icon: Car, title: "Transportation", content: "High-speed trains connect major cities. Domestic flights, shared taxis, and private cars are also available." },
  { icon: Lightbulb, title: "Local Tips", content: "Carry cash (Uzbek Som), dress modestly at religious sites, and always accept tea when offered!" },
];

const faqs = [
  { q: "Is Uzbekistan safe for tourists?", a: "Yes! Uzbekistan is one of the safest countries in Central Asia with very low crime rates." },
  { q: "What currency is used?", a: "The Uzbek Som (UZS). USD is widely accepted. ATMs are available in cities." },
  { q: "Do I need vaccinations?", a: "No mandatory vaccinations. Standard travel vaccines recommended." },
  { q: "What language is spoken?", a: "Uzbek is official. Russian is widely spoken. English in tourist areas." },
];

const TravelInfo = () => (
  <div className="min-h-screen pt-20">
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container-custom">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Travel Information</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl">
          Everything you need to know to plan your perfect trip to Uzbekistan.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {sections.map((s, idx) => (
            <Card key={idx} className="text-center">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
);

export default TravelInfo;
