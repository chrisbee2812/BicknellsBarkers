import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Holly Divs Cole",
    avatar: "HC",
    image: "hdc.jpg",
    hint: 'woman portrait',
    rating: 5,
    quote: "Our 2 dogs have been going to sally 4 days a week for over a year now and they absolutely love it. Sally takes care of our pups as if they were her own and ensures they get lots of cuddles and exercise whilst we are at work. We highly recommend."
  },
  {
    name: "Andrew Jenks",
    avatar: "AJ",
    image: "aj.jpg",
    hint: 'man smiling',
    rating: 5,
    quote: "Sally has looked after our boy, Angus, for over 2 years. He is always delighted to spend the day with her and the pack and loves his walks and adventures, particularly sneaking off for high jinx with his pal, Monty. Bicknell’s Barkers tailors its doggy care to your pup and we feel confident in the care provided."
  },
  {
    name: "Lucy Clark",
    avatar: "LC",
    image: "lc.jpg",
    hint: 'person smiling',
    rating: 5,
    quote: "Sally has cared for our pup for nearly 5 years. He's happy to go in every day, always with a waggy tail and not a backwards look. What we love the most about Bicknells is each dog is cared for dependant on its personality and preferences. Sally spends time getting to know each dog, and their loyalty to her is obvious to see.  We highly recommend Bicknell's Barkers as a home from home environment for the 4 legged member of your family, somewhere for them to have fun, exercise and explore, but remain safe and feel loved."
  },
  {
    name: "Amy McRobbie",
    avatar: "AM",
    image: "am.jpg",
    hint: 'woman portrait',
    rating: 4,
    quote: "Our dog goes to Sally and has the best time there. Sally really cares for all the dogs she also has helped with him loosing weight. All the dogs that go are really friendly and he has the best time with all his furry friends. When we go away our dog stays overnights it’s so nice to know he is being taken care of with love and cuddles. I would 100% recommend Bicknell’s Barkers to anyone as a great place to send your dogs!!"
  },
    {
    name: "Becca Skinner-Smith",
    avatar: "BS",
    image: "bs.jpg",
    hint: 'woman happy',
    rating: 5,
    quote: "Dudley absolutely loves going to Sally’s—he gets so excited to see her! Sally has access to a great open space for the dogs to explore, and you can tell she really cares about them. Sally’s always easy to deal with and happy to accommodate any changes. We really appreciate her."
  },
  {
    name: "Erica Grealy",
    avatar: "EG",
    image: "eg.jpg",
    hint: 'person happy',
    rating: 5,
    quote: "Our lab, Alan, waits at the window for Sally to collect him for his twice-weekly walk and as soon as he hears the van (long before I do) his tail is wagging.  Although I work from home, I know Alan is going to get a good long romp around with his pals so a couple of longer walks in the week works well for both of us.  Sally has access to a large (private) walking area that has different terrains and this means Alan gets to do all the things he enjoys, like carrying big sticks or jumping in water.  His walks are worth every penny.  Sally is extremely experienced with dogs and I trust her implicitly.  She offers excellent advice and an excellent dog care service and would recommend 100%."
  },
  {
    name: "Rebecca Crouch",
    avatar: "RC",
    image: "rc.jpg",
    hint: 'woman happy',
    rating: 5,
    quote: "Our dog Frodo goes to Sally 3 days a week and stays overnight a few times a month. He loves going to Bicknell’s and practically drags me there. Sally has really helped with getting him back in shape, she cares about their health. There is a lovely group of dogs who go and socialise, it really is a weight of my mind when he goes to daycare as I know Sally loves them all and cares for them well! I completely recommend!"
  },
  {
    name: "Pippa Lazaro",
    avatar: "PL",
    image: "pl.jpg",
    hint: 'person happy',
    rating: 5,
    quote: "My dog Coco has been going to Bicknells Barkers for over a year and a half now. Sally the owner has been fantastic, she is so flexible, she understands when work hours change or a weekend is needed. She never gets annoyed and is always accommodating. Plus she looks out for their health and helps out where she can. Coco absolutely loves going there and is totally at home there. We have had to have a break now due to my work situation but as soon as things improve we ll be going back to Sally as long as she has spaces. I would give her five stars 100% !"
  }
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
          We're proud to have the trust of so many pet parents. Read what they have to say about their experience with Bicknell's Barkers. All reviews from facebook.
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
