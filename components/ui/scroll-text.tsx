"use client";

import { motion } from '@/lib/framer';
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface TextAnimationProps {
  text: string;
  variants?: any;
  classname?: string;
  letterAnime?: boolean;
  lineAnime?: boolean;
  direction?: "left" | "right" | "down";
  as?: keyof JSX.IntrinsicElements;
}

const TextAnimation = ({
  text,
  variants,
  classname,
  letterAnime,
  lineAnime,
  direction = "left",
  as: Component = "h1",
}: TextAnimationProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const defaultVariants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "down" ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const staggerChildren = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  if (letterAnime) {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerChildren}
        className={cn(classname)}
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  if (lineAnime) {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerChildren}
        className={cn(classname)}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={letterVariants}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants || defaultVariants}
      className={cn(classname)}
    >
      <Component>{text}</Component>
    </motion.div>
  );
};

export default TextAnimation;