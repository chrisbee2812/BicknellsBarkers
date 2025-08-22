
'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";


export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  // Please update the Access Key in the .env
  const apiKey = process.env.PUBLIC_ACCESS_KEY || "9a0e090e-13ef-45ad-8047-5ec30c641cdb";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Bicknell's Barkers Website",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });


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
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    type="checkbox"
                    id=""
                    className="hidden"
                    style={{ display: "none" }}
                    {...register("botcheck")}></Input>
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Your Name"
                      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm  ${
                        errors.name
                          ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                          : ""
                      }`}
                      {...register("name", { 
                        required: "Name is required" 
                      })} 
                    />
                    {errors.name && (
                      <div className="mt-1 text-red-600">
                        <small>{typeof errors.name?.message === "string" ? errors.name.message : null}</small>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm  ${
                        errors.email
                          ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                          : ""
                      }`}
                      {...register("email", { 
                        required: "Email is required", 
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Please enter a valid email",
                        },
                      })}
                    />
                    {errors.email && (
                      <div className="mt-1 text-red-600">
                        <small>{typeof errors.email?.message === "string" ? errors.email.message : null}</small>
                      </div>
                    )}
                  </div>
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    type="text" 
                    placeholder="e.g., Booking Inquiry"
                    className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm  ${
                        errors.subject
                          ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                          : ""
                      }`}
                    {...register("subject", { 
                      required: "Subject is required" 
                    })}  
                  />
                  {errors.subject && (
                      <div className="mt-1 text-red-600">
                        <small>{typeof errors.subject?.message === "string" ? errors.subject.message : null}</small>
                      </div>
                    )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can help..."
                    // className="min-h-[150px]"
                    className={`flex min-h-[150px] h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm  ${
                        errors.message
                          ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                          : ""
                      }`}
                    {...register("message", { 
                      required: "Message is required" 
                    })}   
                  />
                  {errors.message && (
                      <div className="mt-1 text-red-600">
                        <small>{typeof errors.message?.message === "string" ? errors.message.message : null}</small>
                      </div>
                    )}
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  {isSubmitting ? (
                    <svg
                      className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
              {isSubmitSuccessful && isSuccess && (
                <div className="mt-3 text-sm text-center text-green-500">
                  {message || "Success. Message sent successfully"}
                </div>
              )}
              {isSubmitSuccessful && !isSuccess && (
                <div className="mt-3 text-sm text-center text-red-500">
                  {message || "Something went wrong. Please try later."}
                </div>
              )}
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
