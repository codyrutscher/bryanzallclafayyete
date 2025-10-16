"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  variant?: "primary" | "secondary";
}

export default function CTASection({ 
  title, 
  description, 
  buttonText, 
  buttonLink,
  variant = "primary" 
}: CTASectionProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const bgClass = variant === "primary" 
    ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" 
    : "bg-gradient-to-r from-gray-800 to-gray-900";

  return (
    <section ref={ref} className={`${bgClass} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <Link
            href={buttonLink}
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
