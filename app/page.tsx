import { SiteHeader } from "@/components/site-header";
import { ReadyToBook } from "@/components/ready-to-book";
import { Martini } from "lucide-react";
import Image from "next/image";

const whatWeProvide = [
  "Full bar setup & breakdown",
  "All bar equipment (shakers, strainers, jiggers)",
  "Cups, shot glasses & straws",
  "Garnishes & drink rims",
  "Syrups & bitters",
  "Ice chest",
  "Personalized 3-drink menu",
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                Professional Mobile Bartending
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                You provide the alcohol & mixers. We bring everything else.
              </p>
            </div>
          </div>
        </section>

        {/* What We Provide */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              What We Provide
            </h2>
            <div className="max-w-md mx-auto">
              <ul className="space-y-4">
                {whatWeProvide.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="flex-shrink-0 p-2 rounded-full bg-[#ff1493]/10 border border-[#ff1493]/20 backdrop-blur-sm">
                      <Martini className="h-5 w-5 text-[#ff1493]" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Simple Image Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="relative aspect-video max-w-3xl mx-auto rounded-lg overflow-hidden">
              <Image
                src="/images/hero-cocktail.jpg"
                alt="LBV Bartending in action"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <ReadyToBook />
      </main>
    </div>
  );
}
