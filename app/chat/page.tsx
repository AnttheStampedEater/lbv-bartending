"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Twitter, Facebook } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/lbvbartending",
    label: "@lbvbartending",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/lbvbartending",
    label: "@lbvbartending",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/lbvbartending",
    label: "LBV Bartending",
  },
];

export default function ChatPage() {
  const [formType, setFormType] = useState<"book" | "feedback">("book");

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Chat With Us
              </h1>
              <p className="text-xl text-muted-foreground">
                We&apos;d love to hear from you!
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-10">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card hover:bg-secondary transition-colors"
                >
                  <social.icon className="h-6 w-6" />
                  <span className="text-sm text-muted-foreground">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>

            {/* Form Toggle */}
            <div className="flex justify-center gap-2 mb-8">
              <Button
                variant={formType === "book" ? "default" : "outline"}
                onClick={() => setFormType("book")}
              >
                Book an Event
              </Button>
              <Button
                variant={formType === "feedback" ? "default" : "outline"}
                onClick={() => setFormType("feedback")}
              >
                Leave Feedback
              </Button>
            </div>

            {/* Form */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {formType === "book"
                    ? "Book Your Event"
                    : "Share Your Experience"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@email.com"
                        required
                      />
                    </div>
                  </div>

                  {formType === "book" ? (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="date">Event Date</Label>
                          <Input id="date" type="date" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="guests">Guest Count</Label>
                          <Input
                            id="guests"
                            type="number"
                            placeholder="50"
                            min="1"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="event-type">Event Type</Label>
                        <Input
                          id="event-type"
                          placeholder="Wedding, birthday, corporate, etc."
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="details">Event Details</Label>
                        <Textarea
                          id="details"
                          placeholder="Tell us about your event..."
                          rows={4}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="event-date">When Was Your Event?</Label>
                        <Input id="event-date" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="feedback">Your Feedback</Label>
                        <Textarea
                          id="feedback"
                          placeholder="Tell us about your experience..."
                          rows={6}
                          required
                        />
                      </div>
                    </>
                  )}

                  <Button type="submit" size="lg" className="w-full">
                    {formType === "book" ? "Request Booking" : "Submit Feedback"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
