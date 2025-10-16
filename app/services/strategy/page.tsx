"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { FaChartLine, FaRocket, FaCrosshairs, FaBullseye } from "react-icons/fa";

export default function StrategyPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    { icon: <FaChartLine />, title: "Market Analysis", description: "Deep dive into your market landscape" },
    { icon: <FaRocket />, title: "Growth Planning", description: "Scalable strategies for expansion" },
    { icon: <FaCrosshairs />, title: "Goal Setting", description: "Clear, measurable objectives" },
    { icon: <FaBullseye />, title: "Execution Roadmap", description: "Step-by-step implementation plan" },
  ];

  return (
    <main className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Growth <span className="text-gradient">Strategy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data-driven strategies designed to scale your business exponentially
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl h-96 flex items-center justify-center text-white text-8xl order-2 md:order-1"
            >
              <FaChartLine />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-4xl font-bold mb-6">Scale With Confidence</h2>
              <p className="text-gray-600 mb-4">
                Our growth strategy services help you identify opportunities, overcome obstacles, and achieve sustainable expansion.
              </p>
              <p className="text-gray-600 mb-6">
                We combine market research, competitive analysis, and proven methodologies to create a roadmap for your success.
              </p>
              <Link
                href="/booking"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Start Growing Today
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg text-center"
              >
                <div className="text-5xl text-gradient mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Scale?"
        description="Let's create a growth strategy tailored to your business"
        buttonText="Get Your Strategy"
        buttonLink="/contact"
        variant="secondary"
      />
    </main>
  );
}
