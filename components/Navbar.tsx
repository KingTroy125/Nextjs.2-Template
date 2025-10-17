"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Pages", href: "/pages" },
  ];

  return (
    <nav className="relative z-50 border-b border-border/5">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-16 md:h-24 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex items-center"
          >
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-lg md:text-xl font-bold text-transparent">
              Nexio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="relative px-4 py-2"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link 
                  href={item.href}
                  className="relative z-20 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.name}
                </Link>
                {hoveredIndex === index && (
                  <>
                    <div className="absolute bottom-2 left-4 right-4 h-px bg-primary transition-all duration-300" />
                    <div className="absolute inset-0 -z-10 rounded-lg bg-accent/50 transition-all duration-300" />
                  </>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <div className="relative">
              <Button 
                variant="default" 
                size="default" 
                className="relative z-10 rounded-full bg-primary font-medium text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                Get Started
              </Button>
              <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-primary/25 blur-lg" />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all active:scale-95"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-border/5 bg-background md:hidden">
            <div className="space-y-1 py-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-4 py-3.5 text-base font-medium text-muted-foreground transition-all hover:bg-accent/50 hover:text-foreground active:scale-[0.98]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="border-t border-border/5 px-4 py-4">
              <Button 
                variant="default" 
                size="lg" 
                className="w-full rounded-full bg-primary text-primary-foreground shadow-lg active:scale-[0.98] transition-transform"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;