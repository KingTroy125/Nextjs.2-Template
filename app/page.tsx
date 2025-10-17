import Navbar from "@/components/Navbar"
import HeroSection from "@/components/Hero"
import StatsHero from "@/components/StatsHero"
import PricingSection from "@/components/PricingSection"
import Testimonials from "@/components/Testimonials"
import FAQSection from "@/components/FAQSection"
import FooterSection from "@/components/FooterSection"

export default function Home() {
  return (
    <main className="min-screen bg-cover bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/1939.png')",
      }}
    >
      <Navbar />
      <HeroSection />
      <StatsHero />
      <Testimonials />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </main>
  )
}
