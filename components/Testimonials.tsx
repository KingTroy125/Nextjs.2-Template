"use client";

import { Marquee } from "@/components/ui/marquee";
import { Quote } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const testimonialsData = [
  {
    name: "Emma Robertson",
    title: "Freelancer",
    quote: "The automation features are a game-changer. No more manual work!",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e792bc4d-ecf9-4e22-bc8d-be42faeccc44-nexio-temlis-webflow-io/assets/images/67f70667bbc9554c154f54f9_profiles-5-14.webp",
    isLong: false,
  },
  {
    name: "Ryan Palmer",
    title: "Owner of Trendy Goods",
    quote: "With this platform, I finally have a clear understanding of my store's finances. The profit and loss tracking tools, combined with easy tax preparation, have saved me so much time and money. Best decision I've made for my business.",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e792bc4d-ecf9-4e22-bc8d-be42faeccc44-nexio-temlis-webflow-io/assets/images/67f70667bbc9554c154f5575_profiles-4-15.webp",
    isLong: true,
  },
  {
    name: "Linda Kiely",
    title: "E-commerce Seller",
    quote: "Simple, reliable, and effective. It's perfect for my business.",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e792bc4d-ecf9-4e22-bc8d-be42faeccc44-nexio-temlis-webflow-io/assets/images/67f70667bbc9554c154f5514_profiles-3-17.webp",
    isLong: false,
  },
  {
    name: "Alex Jan",
    title: "CEO",
    quote: "When scaling a startup, staying on top of cash flow is crucial. This has been our go-to tool for managing finances efficiently. The customizable dashboards and predictive analytics give us a clear view of where we're headed financially.",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e792bc4d-ecf9-4e22-bc8d-be42faeccc44-nexio-temlis-webflow-io/assets/images/67f70667bbc9554c154f5518_profiles-2-18.webp",
    isLong: true,
  },
  {
    name: "Mark Julio",
    title: "Entrepreneur",
    quote: "I finally feel in control of my finances. Thank you so much!",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e792bc4d-ecf9-4e22-bc8d-be42faeccc44-nexio-temlis-webflow-io/assets/images/67f70667bbc9554c154f54fd_profiles-8-19.webp",
    isLong: false,
  },
  {
    name: "James Luis",
    title: "Startup Founder",
    quote: "This tool has saved us hours every month. Highly recommend it!",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e792bc4d-ecf9-4e22-bc8d-be42faeccc44-nexio-temlis-webflow-io/assets/images/67f70667bbc9554c154f5574_profiles-20.webp",
    isLong: false,
  },
];

type TestimonialCardProps = (typeof testimonialsData)[0];

const TestimonialCard = ({ name, title, quote, avatar, isLong }: TestimonialCardProps) => (
  <div 
    className={cn(
      "relative flex h-[311px] w-[360px] flex-col rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg",
      isLong && "h-[431px]"
    )}
  >
    <div className="group relative">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Quote Icon */}
      <div className="relative mb-12 h-16 w-16 overflow-hidden rounded-full">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20" />
        <div className="absolute inset-0 rounded-full border border-primary/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Quote className="h-6 w-6 text-primary" strokeWidth={1.5} />
        </div>
      </div>

      {/* Quote Text */}
      <p className="mb-auto flex-1 text-base leading-relaxed text-muted-foreground">
        "{quote}"
      </p>

      {/* Author Info */}
      <div className="mt-8 flex items-center gap-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-base font-medium text-foreground">
            {name}
          </div>
          <div className="text-sm text-muted-foreground">
            {title}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 md:py-32">
      {/* Header */}
      <div className="mb-16 px-4 sm:mb-20 sm:px-6 md:mb-24 md:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center gap-8 sm:gap-12 md:gap-16">
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              {/* Badge */}
              <div className="flex items-center justify-center gap-2">
                <div className="h-px w-16 bg-border/50 sm:w-20" />
                <div className="relative flex items-center justify-center overflow-hidden rounded-full border border-primary/20 px-5 py-2 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-50" />
                  <span className="relative z-10 text-sm font-medium tracking-widest text-primary">
                    TESTIMONIALS
                  </span>
                </div>
                <div className="h-px w-16 bg-border/50 sm:w-20" />
              </div>

              {/* Heading and Description */}
              <div className="flex flex-col items-center gap-4 sm:gap-6">
                <h2 className="bg-gradient-to-br from-foreground to-primary bg-clip-text px-4 text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
                  What our clients are saying
                </h2>
                <p className="max-w-xl px-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Our financial management platform is transforming the way people manage their money. Here's what some of our users have to say about their experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <Marquee pauseOnHover className="[--duration:40s] [--gap:1.5rem]">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </Marquee>
    </section>
  );
};

export default Testimonials;