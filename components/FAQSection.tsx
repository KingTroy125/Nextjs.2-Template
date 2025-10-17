"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "What is Auto-AI?",
    answer: "Auto-AI is an intelligent automation platform that helps teams streamline their workflows and eliminate repetitive tasks. It uses AI to connect your tools and automate processes from start to finish.",
  },
  {
    question: "How does Auto-AI work?",
    answer: "Auto-AI works by creating automated workflows that connect your favorite apps and services. You set up triggers and actions, and our AI handles the rest, learning from your patterns to optimize processes over time.",
  },
  {
    question: "Is Auto-AI secure?",
    answer: "Yes, Auto-AI is built with enterprise-grade security. We use encryption for data in transit and at rest, comply with industry standards, and regularly undergo security audits to protect your information.",
  },
  {
    question: "Can Auto-AI integrate with other software?",
    answer: "Absolutely! Auto-AI integrates with hundreds of popular tools and platforms. From CRMs to project management tools, we support a wide range of integrations to fit seamlessly into your existing workflow.",
  },
  {
    question: "What support options are available?",
    answer: "We offer multiple support channels including email support for all plans, priority support for Pro users, and dedicated account management for Enterprise customers. Our comprehensive documentation and community forum are also available 24/7.",
  },
];

const FAQSection = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-28">
      {/* Header */}
      <div className="mx-auto mb-12 max-w-7xl px-4 sm:mb-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
          {/* Badge */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="h-px w-12 bg-border/50 sm:w-20"></div>
            <Badge variant="hero">
              <span className="text-sm font-medium">Questions</span>
            </Badge>
            <div className="h-px w-12 bg-border/50 sm:w-20"></div>
          </div>

          {/* Heading and Description */}
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <h2 className="bg-gradient-to-br from-foreground to-primary bg-clip-text px-4 text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
              Frequently asked questions
            </h2>
            <p className="max-w-3xl px-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Find answers to common questions about Auto-AI. Can't find what you're looking for? 
              Reach out to our support team for personalized assistance.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="group rounded-2xl border border-border/50 bg-card/50 px-6 transition-all hover:border-primary/50 hover:shadow-lg sm:px-8"
            >
              <AccordionTrigger className="py-6 text-left text-lg font-medium text-foreground hover:no-underline sm:py-8 sm:text-xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground sm:pb-8 sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
    </section>
  );
};

export default FAQSection;