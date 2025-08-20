import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PawPrint, Bone, Heart, Moon, Sun } from 'lucide-react';

const featuredDogs = [
  { name: 'Buddy', breed: 'Golden Retriever', image: '/dog1.jpg', hint: 'golden retriever' },
  { name: 'Lucy', breed: 'Poodle', image: '/dog2.jpg', hint: 'poodle dog' },
  { name: 'Max', breed: 'Beagle', image: '/dog3.jpg', hint: 'beagle puppy' },
  { name: 'Daisy', breed: 'German Shepherd', image: '/dog4.jpg', hint: 'german shepherd' },
  { name: 'Rocky', breed: 'Bulldog', image: '/dog5.jpg', hint: 'bulldog puppy' },
  { name: 'Burt', breed: 'Bulldog', image: '/dog6.jpg', hint: 'bulldog puppy' }
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      
      <section className="flex flex-col items-center w-full py-4 md:pt-8 md:pb-16 bg-secondary text-center">
        <Image
          src="/bicknellsbarkerswhite.png"
          alt="bicknells barkers logo"
          width={200}
          height={200}
          className="object-fill"
        />
        <div className="container mx-auto px-4 md:px-6">
          
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter mb-4 text-secondary-foreground">
            Welcome to Bicknell's Barkers
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Where every dog is treated like family. Explore our services and use our AI tool for dog breed information.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/services">Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
            Meet Our Featured Pups
          </h2>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {featuredDogs.map((dog) => (
                <CarouselItem key={dog.name} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                      <CardContent className="p-0">
                        <Image
                          src={dog.image}
                          alt={`A photo of ${dog.name}, a ${dog.breed}`}
                          width={600}
                          height={400}
                          className="aspect-[3/2] w-full object-cover"
                          data-ai-hint={dog.hint}
                        />
                        <div className="p-6">
                          <h3 className="text-xl font-headline font-semibold">{dog.name}</h3>
                          <p className="text-muted-foreground">{dog.breed}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-12" />
            <CarouselNext className="mr-12" />
          </Carousel>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Premium Care for Your Best Friend</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              We offer a range of services designed for your dog's happiness and your peace of mind.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card className="text-center flex flex-col items-center p-6">
              <Sun className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-headline font-semibold">Daycare</h3>
              <p className="mt-2 text-muted-foreground">Fun-filled days of play and socialization.</p>
            </Card>
            <Card className="text-center flex flex-col items-center p-6">
              <Moon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-headline font-semibold">Boarding</h3>
              <p className="mt-2 text-muted-foreground">A safe and cozy home away from home.</p>
            </Card>
          </div>
           <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/services">Explore all services</Link>
            </Button>
           </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tighter mb-4">
            Discover Dog Breed Information With Our AI Tool
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground mb-8">
            Our AI-powered tool helps you discover care information for your dog's breed and will also advise on the ideal dog breed to match your lifestyle and preferences.
          </p>
          <Button asChild size="lg">
            <Link href="/breed-recommender">Launch AI Tool</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
