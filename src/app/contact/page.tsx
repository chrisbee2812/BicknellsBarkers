'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";



function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      <path d="M14.05 6.02a9 9 0 0 1 0 7.94m3.52-11.48a15 15 0 0 1 0 15.42" />
    </svg>
  );
}


export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Get In Touch</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Have questions or want to book a service? We'd love to hear from you. Reach out, and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and our team will be in touch shortly.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="e.g., Booking Inquiry" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us how we can help..." className="min-h-[150px]" />
                </div>
                <Button type="submit" className="w-full sm:w-auto">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-8">
            <h2 className="text-3xl font-headline font-bold">Contact Information</h2>
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-full">
                        <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Our Address</h3>
                        <p className="text-muted-foreground">Highbanks, Wickham Road, Fareham, PO17 5BT</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                     <div className="p-3 bg-primary/20 rounded-full">
                        <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Phone Number</h3>
                        <p className="text-muted-foreground">07983 159553</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-full">
                        <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Email Address</h3>
                        <p className="text-muted-foreground">admin@bicknellsdoglove.org</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-full">
                        <WhatsappIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">WhatsApp</h3>
                        <p className="text-muted-foreground">+44 7983 159553</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
