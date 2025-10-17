"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import dashboardPreview from "@/assets/dashboard-preview.jpg";
import TextAnimation from '@/components/ui/scroll-text';
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  return (
    <motion.section 
        className="relative min-h-screen overflow-hidden pt-16 sm:pt-20 md:pt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container relative z-10 mx-auto px-4 sm:px-6 pt-12 sm:pt-16 md:pt-24 pb-12 sm:pb-16 md:pb-20">
          {/* Badge */}
          <motion.div 
            className="mb-6 sm:mb-8 flex justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="hero" className="group">
              <span className="text-xs sm:text-sm font-medium">Simplify your workflow</span>
            </Badge>
          </motion.div>

          {/* Main headline */}
          <div className="mb-4 sm:mb-6 space-y-2 sm:space-y-4 text-center">
            <TextAnimation
              text="Enhance your financial control"
              variants={{
                hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
                visible: {
                  filter: 'blur(0px)',
                  opacity: 1,
                  y: 0,
                  transition: { 
                    duration: 0.8,
                    ease: [0.2, 0.65, 0.3, 0.9],
                  },
                },
              }}
              classname="bg-gradient-to-r from-foreground to-primary bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl"
            />
            <TextAnimation
              text="with Nexio"
              direction="right"
              variants={{
                hidden: { filter: 'blur(4px)', opacity: 0, x: 20 },
                visible: {
                  filter: 'blur(0px)',
                  opacity: 1,
                  x: 0,
                  transition: { 
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.2, 0.65, 0.3, 0.9],
                  },
                },
              }}
              classname="bg-gradient-to-r from-foreground to-primary bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl mt-2 sm:mt-4"
            />
          </div>

          {/* Subheading */}
          <TextAnimation
            text="Streamline your business's financial management with our intuitive, scalable SaaS platform. Designed for U.S. enterprises."
            direction="down"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { 
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.2, 0.65, 0.3, 0.9],
                },
              },
            }}
            classname="mx-auto mb-6 sm:mb-8 max-w-2xl text-center text-base sm:text-lg md:text-xl text-muted-foreground px-4"
          />

          {/* CTA Button */}
          <motion.div 
            className="mb-10 sm:mb-12 md:mb-16 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Button 
              variant="default" 
              size="lg" 
              className="group rounded-full bg-primary text-base sm:text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl px-6 sm:px-8"
            >
              Get started
              <svg 
                className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </motion.div>

          {/* Dashboard preview */}
          <motion.div 
            className="mx-auto max-w-6xl px-2 sm:px-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              delay: 1.2,
              ease: [0.2, 0.65, 0.3, 0.9],
            }}
          >
            <div className="dashboard-preview-container relative aspect-video w-full overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl sm:shadow-2xl ring-1 ring-foreground/10 transition-all hover:ring-2 hover:ring-primary/50">
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent"></div>
              <Image
                src={dashboardPreview}
                alt="Nexio Dashboard Preview"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>
  );
};

export default Hero;