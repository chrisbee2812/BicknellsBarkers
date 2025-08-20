import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah L.",
    avatar: "SL",
    image: "https://placehold.co/100x100.png",
    hint: 'woman portrait',
    rating: 5,
    quote: "Bicknell's is the only place I'll take my dog, Buster. The staff is incredible, and he comes home happy and tired every time. I can't recommend them enough!"
  },
  {
    name: "Michael B.",
    avatar: "MB",
    image: "https://placehold.co/100x100.png",
    hint: 'man smiling',
    rating: 5,
    quote: "We boarded our two golden retrievers here for a week, and the experience was seamless. We got daily photo updates and peace of mind knowing they were in great hands."
  },
  {
    name: "Jessica R.",
    avatar: "JR",
    image: "https://placehold.co/100x100.png",
    hint: 'person smiling',
    rating: 5,
    quote: "The grooming service is fantastic! They are so patient with my anxious poodle and he always looks so handsome after his appointment. Truly top-notch."
  },
  {
    name: "David C.",
    avatar: "DC",
    image: "https://placehold.co/100x100.png",
    hint: 'man portrait',
    rating: 4,
    quote: "A great daycare facility. My beagle loves going there to play with her friends. The space is clean and the staff are very friendly and professional."
  },
    {
    name: "Emily W.",
    avatar: "EW",
    image: "https://placehold.co/100x100.png",
    hint: 'woman happy',
    rating: 5,
    quote: "The best doggy daycare in town! My corgi gets so excited when we pull into the parking lot. It's his home away from home."
  },
  {
    name: "Chris P.",
    avatar: "CP",
    image: "https://placehold.co/100x100.png",
    hint: 'person happy',
    rating: 5,
    quote: "I used the AI Breed Recommender on their site for fun and it was surprisingly accurate! It suggested a breed I hadn't considered and now I'm doing research. Cool feature!"
  },
];

const Rating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-primary fill-primary' : 'text-muted'}`} />
    ))}
  </div>
);

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">What Our Clients Say</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We're proud to have the trust of so many pet parents. Read what they have to say about their experience with Bicknell's Barkers Hub.
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <Quote className="w-8 h-8 text-primary/50" />
            </CardHeader>
            <CardContent className="flex-grow">
              <blockquote className="text-muted-foreground italic">"{testimonial.quote}"</blockquote>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <span className="font-semibold">{testimonial.name}</span>
              </div>
              <Rating rating={testimonial.rating} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
