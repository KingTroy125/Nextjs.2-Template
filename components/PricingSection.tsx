"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Basic plan",
    price: 9,
    description: "Perfect for small businesses or startups, our Starter Plan gives you the essential tools to manage your finances with ease",
    features: [
      "Unlimited Invoices",
      "Next-Day Payments",
      "Secure Payment Gateway",
      "Basic Analytics and Reporting",
      "Email Support",
    ],
    gradient: false,
  },
  {
    name: "Pro plan",
    price: 19,
    description: "Designed for growing businesses, the Basic Plan expands on our Starter package with additional features",
    features: [
      "Unlimited Invoices",
      "Next-Day Payments",
      "Secure Payment Gateway",
      "Basic Analytics and Reporting",
      "Email Support",
    ],
    gradient: true,
  },
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-28">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center gap-6 sm:mb-16 sm:gap-8">
          {/* Badge with decorative lines */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="h-px w-12 bg-border/50 sm:w-32"></div>
            <Badge variant="hero">
              <span className="text-sm font-medium">Pricing</span>
            </Badge>
            <div className="h-px w-12 bg-border/50 sm:w-32"></div>
          </div>

          {/* Heading */}
          <h2 className="bg-gradient-to-br from-foreground to-primary bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
            Simple and transparent pricing
          </h2>

          {/* Description */}
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
            Choose a plan that fits your business needs and budget. No hidden fees, no surprises—just
            straightforward pricing for powerful financial management.
          </p>

          {/* Toggle */}
          <div className="flex items-center gap-0 rounded-full border border-border bg-accent/50 p-2 backdrop-blur-sm">
            <button
              onClick={() => setIsYearly(false)}
              className={`rounded-full px-6 py-3 text-sm font-medium transition-all ${
                !isYearly
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-foreground hover:bg-accent"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`rounded-full px-6 py-3 text-sm font-medium transition-all ${
                isYearly
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-foreground hover:bg-accent"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg sm:p-8"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="mb-8 flex items-center gap-4">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full border border-border/50 shadow-lg ${
                      plan.gradient ? "bg-gradient-to-b from-primary to-primary/20" : "bg-accent/50"
                    }`}
                  >
                    <Check className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                </div>

                {/* Price */}
                <div className="mb-8 flex items-end gap-2">
                  <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-5xl font-bold text-transparent">
                    ${isYearly ? plan.price * 10 : plan.price}
                  </span>
                  <span className="mb-2 text-muted-foreground">/Month</span>
                </div>

                {/* Description */}
                <p className="mb-8 leading-relaxed text-muted-foreground">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="mb-8 flex-grow space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className="w-full rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                  size="lg"
                >
                  Get started
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="relative flex flex-col items-center justify-between gap-6 rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm sm:flex-row sm:p-8">
          <h3 className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
            Book a 15-min intro call
          </h3>
          <Button 
            className="rounded-full bg-primary px-8 text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl whitespace-nowrap"
            size="lg"
          >
            Get started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;