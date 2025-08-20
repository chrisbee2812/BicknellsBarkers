
'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";


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
                        <p className="text-muted-foreground">Highbanks, Wikham Road, Fareham, PO17 5BT</p>
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
                        <FaWhatsapp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">WhatsApp</h3>
                        <p className="text-muted-foreground">+44 7983 159553</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                  <Link href="https://www.facebook.com/profile.php?id=61574947135337" target="_blank" aria-label="Facebook">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/20 rounded-full">
                              <FaFacebook className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Facebook</h3>                        
                        </div>
                    </div>
                  </Link>
                </div>
                <div className="flex items-start gap-4">
                  <Link href="https://www.instagram.com/bicknells_barkers/" target="_blank" aria-label="Instagram">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/20 rounded-full">
                            <FaInstagram className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Instagram</h3>
                        </div>
                    </div>
                  </Link>
                </div>
                <div className="flex items-start gap-4">
                  <Link href="https://www.tiktok.com/@bicknellsbarkers" target="_blank" aria-label="TikTok">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/20 rounded-full">
                            <FaTiktok className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">TikTok</h3>
                        </div>
                    </div>
                  </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
