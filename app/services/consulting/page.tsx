"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { FaBriefcase, FaChartLine, FaUsers, FaLightbulb } from "react-icons/fa";

export default function ConsultingPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const benefits = [
    { icon: <FaBriefcase />, title: "Strategic Planning", description: "Comprehensive business strategy development" },
    { icon: <FaChartLine />, title: "Performance Analysis", description: "Data-driven insights and recommendations" },
    { icon: <FaUsers />, title: "Team Development", description: "Leadership and organizational growth" },
    { icon: <FaLightbulb />, title: "Innovation", description: "Creative solutions to complex challenges" },
  ];

  return (
    <main className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Business <span className="text-gradient">Consulting</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic guidance to optimize your operations and maximize growth potential
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
              <h2 className="text-4xl font-bold mb-6">Transform Your Business</h2>
              <p className="text-gray-600 mb-4">
                Our consulting services provide you with the strategic insights and actionable plans needed to navigate today&apos;s complex business landscape.
              </p>
              <p className="text-gray-600 mb-6">
                We work closely with your team to understand your unique challenges and opportunities, delivering customized solutions that drive real results.
              </p>
              <Link
                href="/booking"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl h-96 flex items-center justify-center text-white text-8xl"
            >
              <FaBriefcase />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg text-center"
              >
                <div className="text-5xl text-gradient mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        description="Let's discuss how our consulting services can help your business thrive"
        buttonText="Contact Us Today"
        buttonLink="/contact"
      />
    </main>
  );
}
