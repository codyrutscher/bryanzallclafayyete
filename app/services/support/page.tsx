"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { FaHeadset, FaClock, FaShieldAlt, FaUserFriends } from "react-icons/fa";

export default function SupportPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const offerings = [
    { icon: <FaHeadset />, title: "24/7 Availability", description: "Round-the-clock support when you need it" },
    { icon: <FaClock />, title: "Rapid Response", description: "Quick resolution to keep you moving" },
    { icon: <FaShieldAlt />, title: "Proactive Monitoring", description: "We catch issues before they impact you" },
    { icon: <FaUserFriends />, title: "Dedicated Team", description: "Your personal support specialists" },
  ];

  return (
    <main className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Ongoing <span className="text-gradient">Support</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              24/7 dedicated support to ensure your continued success
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
              className="bg-gradient-to-br from-green-400 to-teal-600 rounded-2xl h-96 flex items-center justify-center text-white text-8xl order-2 md:order-1"
            >
              <FaHeadset />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-4xl font-bold mb-6">Always Here For You</h2>
              <p className="text-gray-600 mb-4">
                Our commitment doesn&apos;t end at implementation. We provide ongoing support to ensure your long-term success.
              </p>
              <p className="text-gray-600 mb-6">
                With proactive monitoring, regular check-ins, and immediate assistance when needed, you&apos;ll never face challenges alone.
              </p>
              <Link
                href="/booking"
                className="inline-block bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Get Support Now
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-2xl shadow-lg text-center"
              >
                <div className="text-5xl text-gradient mb-4 flex justify-center">
                  {offering.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{offering.title}</h3>
                <p className="text-gray-600">{offering.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need Support?"
        description="Our team is ready to help you succeed"
        buttonText="Contact Support"
        buttonLink="/contact"
        variant="secondary"
      />
    </main>
  );
}
