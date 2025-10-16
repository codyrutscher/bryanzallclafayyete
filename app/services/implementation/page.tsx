"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { FaCogs, FaCheckCircle, FaTools, FaSync } from "react-icons/fa";

export default function ImplementationPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const steps = [
    { icon: <FaCogs />, title: "Planning", description: "Detailed implementation roadmap" },
    { icon: <FaTools />, title: "Execution", description: "Seamless deployment and integration" },
    { icon: <FaSync />, title: "Optimization", description: "Continuous improvement and refinement" },
    { icon: <FaCheckCircle />, title: "Validation", description: "Results tracking and verification" },
  ];

  return (
    <main className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Implementation</span> Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamless execution of solutions tailored to your unique business needs
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">From Plan to Reality</h2>
              <p className="text-gray-600 mb-4">
                We don&apos;t just create strategies—we bring them to life. Our implementation services ensure smooth execution from start to finish.
              </p>
              <p className="text-gray-600 mb-6">
                With our proven methodologies and experienced team, we minimize disruption while maximizing results.
              </p>
              <Link
                href="/booking"
                className="inline-block bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Start Implementation
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl h-96 flex items-center justify-center text-white text-8xl"
            >
              <FaCogs />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl shadow-lg text-center"
              >
                <div className="text-5xl text-gradient mb-4 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Execute?"
        description="Let's turn your vision into reality"
        buttonText="Begin Implementation"
        buttonLink="/contact"
      />
    </main>
  );
}
