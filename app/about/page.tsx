"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CTASection from "@/components/CTASection";
import { FaAward, FaUsers, FaLightbulb, FaHandshake } from "react-icons/fa";

export default function AboutPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const values = [
    { icon: <FaAward />, title: "Excellence", description: "We strive for excellence in everything we do" },
    { icon: <FaUsers />, title: "Collaboration", description: "Working together to achieve extraordinary results" },
    { icon: <FaLightbulb />, title: "Innovation", description: "Constantly pushing boundaries and exploring new solutions" },
    { icon: <FaHandshake />, title: "Integrity", description: "Building trust through transparency and honesty" },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">Elite Business</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a team of passionate professionals dedicated to transforming businesses through innovative solutions and exceptional service
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section - Zigzag Layout */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {/* First Row - Image Left */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, rotate: -2 }}
              className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl h-96 flex items-center justify-center text-white text-7xl shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <FaUsers className="relative z-10" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-5xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                Founded with a vision to revolutionize business consulting, Elite Business has grown from a small startup to a trusted partner for companies worldwide.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our journey began with a simple belief: every business deserves access to world-class strategic guidance and support.
              </p>
            </motion.div>
          </div>

          {/* Second Row - Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-2 md:order-1"
            >
              <h2 className="text-5xl font-bold mb-6">
                <span className="text-gradient">500+</span> Success Stories
              </h2>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                Today, we&apos;ve helped over 500 companies achieve their goals and exceed their expectations through innovative strategies and dedicated support.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We combine cutting-edge technology with human expertise to deliver solutions that drive real, measurable results.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.02, rotate: 2 }}
              className="bg-gradient-to-br from-pink-400 to-orange-600 rounded-3xl h-96 flex items-center justify-center text-white text-7xl shadow-2xl relative overflow-hidden order-1 md:order-2"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <FaLightbulb className="relative z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Circular Layout */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          {/* Diamond Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Top center */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="md:col-start-2 bg-gradient-to-br from-blue-500 to-purple-600 p-10 rounded-3xl shadow-2xl text-white text-center"
            >
              <div className="text-6xl mb-6 flex justify-center">
                {values[0].icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{values[0].title}</h3>
              <p className="text-white/90 text-lg">{values[0].description}</p>
            </motion.div>

            {/* Middle row - two cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white p-8 rounded-3xl shadow-xl text-center border-2 border-purple-100"
            >
              <div className="text-5xl text-gradient mb-4 flex justify-center">
                {values[1].icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{values[1].title}</h3>
              <p className="text-gray-600">{values[1].description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="md:col-start-3 bg-white p-8 rounded-3xl shadow-xl text-center border-2 border-purple-100"
            >
              <div className="text-5xl text-gradient mb-4 flex justify-center">
                {values[2].icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{values[2].title}</h3>
              <p className="text-gray-600">{values[2].description}</p>
            </motion.div>

            {/* Bottom center */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="md:col-start-2 bg-gradient-to-br from-orange-500 to-pink-600 p-10 rounded-3xl shadow-2xl text-white text-center"
            >
              <div className="text-6xl mb-6 flex justify-center">
                {values[3].icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{values[3].title}</h3>
              <p className="text-white/90 text-lg">{values[3].description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work Together?"
        description="Let's create something amazing"
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </main>
  );
}
