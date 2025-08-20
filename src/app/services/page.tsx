import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Moon, PawPrint } from "lucide-react";

const daycareFeatures = [
  "Drop-off by 9am – All dogs arrive ready for a fun-filled day ahead.",
  "Off on our adventure – We head out in our secure, purpose-equipped van to our private land.",
  "Walk, play & snuffle – Dogs enjoy off-lead fun, sniffing, running, playing, and searching for treats in a safe, enclosed environment.",
  "Back home – After their outing, it’s back in the van and home for some well-earned rest.",
  "Lunch for those that require it",
  "Chill time – Dogs relax in our dedicated dog room with comfy beds, cuddles, and belly rubs.",
  "Pick-ups – Collection starts mid-afternoon, after a day full of fun and enrichment."
];

const services = [
  {
    icon: Sun,
    title: "Doggy Daycare",
    price: "£25 / day",
    description: "A fun-filled day of supervised play, socialization, and activities to keep your dog happy and engaged while you're away. Here's a look at our daily schedule:",
    features: daycareFeatures
  },
  {
    icon: Moon,
    title: "Overnight Boarding",
    price: "Starting at £40 / night",
    description: "A safe, comfortable, and loving environment for your dog to stay when you're out of town. Our boarders enjoy the full daycare experience, plus a relaxing evening routine.",
    features: [
      "Our boarders enjoy the full daycare itinerary, plus:",
      "Dinner time – Boarders settle in for the evening and enjoy their tea in a calm, homely space.",
      "Evening stroll or garden play – A gentle walk or a game in the garden before bedtime.",
      "Lights out – Dogs sleep wherever they feel most comfortable, based on your guidance and their individual needs."
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Services</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Providing top-tier care for your furry family members. We offer a range of services to meet every need and ensure your dog is happy, healthy, and safe.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-1">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="items-center text-center">
              <div className="p-4 bg-primary/20 rounded-full mb-4">
                <service.icon className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              <CardDescription className="text-lg font-semibold text-accent">{service.price}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-6 text-center">{service.description}</p>
              <ul className="space-y-3 text-left columns-1 md:columns-2">
                {service.features.map(feature => (
                  <li key={feature} className="flex items-start break-inside-avoid">
                    <PawPrint className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <a href="/contact">Enquire Now</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
