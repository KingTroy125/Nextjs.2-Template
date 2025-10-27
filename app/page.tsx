"use client"

import Navbar from "@/components/Navbar"
import HeroSection from "@/components/Hero"
import StatsHero from "@/components/StatsHero"
import PricingSection from "@/components/PricingSection"
import Testimonials from "@/components/Testimonials"
import FAQSection from "@/components/FAQSection"
import FooterSection from "@/components/FooterSection"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.main
      className="min-screen bg-cover bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/1939.png')",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <HeroSection />
      <StatsHero />
      <Testimonials />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </motion.main>
  )
}
