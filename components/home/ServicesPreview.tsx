"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { FaBriefcase, FaChartLine, FaCogs, FaHeadset } from "react-icons/fa";

export default function ServicesPreview() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: <FaBriefcase className="text-6xl" />,
      title: "Business Consulting",
      description: "Strategic guidance to optimize your operations and maximize growth potential",
      link: "/services/consulting",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaChartLine className="text-6xl" />,
      title: "Growth Strategy",
      description: "Data-driven strategies designed to scale your business exponentially",
      link: "/services/strategy",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaCogs className="text-6xl" />,
      title: "Implementation",
      description: "Seamless execution of solutions tailored to your unique business needs",
      link: "/services/implementation",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <FaHeadset className="text-6xl" />,
      title: "Ongoing Support",
      description: "24/7 dedicated support to ensure your continued success",
      link: "/services/support",
      color: "from-green-500 to-teal-500"
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Premium Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to elevate your business to new heights
          </p>
        </motion.div>

        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First service - Large card */}
          <Link href={services[0].link} className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="relative z-10">
                <motion.div
                  className={`bg-gradient-to-r ${services[0].color} w-24 h-24 rounded-3xl flex items-center justify-center text-white mb-6 text-4xl`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {services[0].icon}
                </motion.div>
                <h3 className="text-3xl font-bold mb-4">{services[0].title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{services[0].description}</p>
                <span className="text-blue-600 font-semibold hover:underline inline-flex items-center">
                  Learn More →
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Second service - Tall card */}
          <Link href={services[1].link} className="md:row-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-purple-500 to-pink-600 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full text-white flex flex-col justify-between"
            >
              <motion.div
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white mb-6 text-3xl"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {services[1].icon}
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{services[1].title}</h3>
                <p className="text-white/90 mb-6">{services[1].description}</p>
                <span className="text-white font-semibold hover:underline inline-flex items-center">
                  Learn More →
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Third service - Wide card */}
          <Link href={services[2].link} className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full"
            >
              <div className="flex items-start space-x-6">
                <motion.div
                  className={`bg-gradient-to-r ${services[2].color} w-20 h-20 rounded-2xl flex items-center justify-center text-white flex-shrink-0 text-3xl`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {services[2].icon}
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{services[2].title}</h3>
                  <p className="text-gray-600 mb-4">{services[2].description}</p>
                  <span className="text-blue-600 font-semibold hover:underline inline-flex items-center">
                    Learn More →
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Fourth service - Square card */}
          <Link href={services[3].link}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full"
            >
              <motion.div
                className={`bg-gradient-to-r ${services[3].color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 text-2xl`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {services[3].icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{services[3].title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{services[3].description}</p>
              <span className="text-blue-600 font-semibold hover:underline inline-flex items-center text-sm">
                Learn More →
              </span>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
