import { SiteHeader } from "@/components/site-header";
import { ReadyToBook } from "@/components/ready-to-book";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const pricingItems = [
  {
    title: "Base Rate",
    price: "$50",
    unit: "/ hour",
    description: "4 hour minimum",
  },
  {
    title: "Per Guest",
    price: "$1.75",
    unit: "/ guest / hour",
    description: "Standard service",
  },
];

const addOns = [
  {
    title: "Mixers Package",
    price: "$5",
    unit: "/ guest / hour",
    description: "We provide the mixers too",
  },
  {
    title: "Infused Water Station",
    price: "$30",
    unit: "flat rate",
    description: "Refreshing addition",
  },
];

const reviews = [
  {
    name: "Sarah M.",
    event: "Wedding Reception",
    text: "LBV made our wedding reception amazing! The drinks were perfect and the service was top-notch.",
    rating: 5,
  },
  {
    name: "James T.",
    event: "Corporate Event",
    text: "Professional, punctual, and great cocktails. Will definitely book again for our next company event.",
    rating: 5,
  },
  {
    name: "Maria L.",
    event: "Birthday Party",
    text: "Everyone loved the personalized drink menu. Made the party so much easier to host!",
    rating: 5,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Pricing Header */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Simple Pricing
            </h1>
            <p className="text-xl text-muted-foreground text-center max-w-lg mx-auto">
              Transparent rates with no hidden fees
            </p>
          </div>
        </section>

        {/* Main Pricing */}
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {pricingItems.map((item) => (
                <Card key={item.title} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-lg text-muted-foreground">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-primary">
                        {item.price}
                      </span>
                      <span className="text-muted-foreground ml-1">
                        {item.unit}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Add-Ons</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {addOns.map((item) => (
                <Card key={item.title} className="text-center bg-background">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-2">
                      <span className="text-2xl font-bold text-primary">
                        {item.price}
                      </span>
                      <span className="text-muted-foreground ml-1 text-sm">
                        {item.unit}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {reviews.map((review) => (
                <Card key={review.name}>
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {review.event}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <ReadyToBook />
      </main>
    </div>
  );
}
