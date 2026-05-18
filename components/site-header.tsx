"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/chat", label: "Chat With Us" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      {/* Top bar with contact info */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-center gap-6 text-sm">
          <a href="tel:+15551234567" className="flex items-center gap-2 hover:opacity-80">
            <Phone className="h-4 w-4" style={{ color: '#ff1493', filter: 'drop-shadow(0 0 6px #ff1493)' }} />
            <span className="font-medium" style={{ color: '#ff1493', textShadow: '0 0 8px rgba(255,20,147,0.6), 0 0 16px rgba(255,20,147,0.4)' }}>(555) 123-4567</span>
          </a>
          <a href="mailto:book@lbvbartending.com" className="flex items-center gap-2 hover:opacity-80">
            <Mail className="h-4 w-4" style={{ color: '#ff1493', filter: 'drop-shadow(0 0 6px #ff1493)' }} />
            <span className="font-medium" style={{ color: '#ff1493', textShadow: '0 0 8px rgba(255,20,147,0.6), 0 0 16px rgba(255,20,147,0.4)' }}>book@lbvbartending.com</span>
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col items-center gap-4">
          {/* Business name - prominent */}
          <div className="text-center">
            <Link href="/" className="text-2xl md:text-3xl font-bold tracking-tight">
              LB<span style={{ color: '#ff1493', textShadow: '0 0 8px rgba(255,20,147,0.6), 0 0 16px rgba(255,20,147,0.4)' }}>V</span> BARTENDING
            </Link>
            <p className="text-sm mt-1 italic" style={{ color: '#ff1493', textShadow: '0 0 8px rgba(255,20,147,0.6), 0 0 16px rgba(255,20,147,0.4)' }}>
              If We&apos;re There, It&apos;s an Event
            </p>
          </div>

          {/* Navigation tabs */}
          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
