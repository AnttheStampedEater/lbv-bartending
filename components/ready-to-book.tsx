import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ReadyToBook() {
  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Book?</h2>
        <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
          Let&apos;s make your event unforgettable.
        </p>
        <Button asChild size="lg" variant="secondary" className="font-semibold">
          <Link href="/chat">Book Now</Link>
        </Button>
      </div>
    </section>
  );
}
