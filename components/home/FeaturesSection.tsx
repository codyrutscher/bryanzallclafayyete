"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaRocket, FaChartLine, FaUsers, FaLightbulb, FaCog, FaShieldAlt } from "react-icons/fa";

export default function FeaturesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    {
      icon: <FaRocket className="text-5xl" />,
      title: "Fast Implementation",
      description: "Get up and running quickly with our streamlined processes"
    },
    {
      icon: <FaChartLine className="text-5xl" />,
      title: "Growth Focused",
      description: "Strategies designed to scale your business exponentially"
    },
    {
      icon: <FaUsers className="text-5xl" />,
      title: "Expert Team",
      description: "Work with industry-leading professionals"
    },
    {
      icon: <FaLightbulb className="text-5xl" />,
      title: "Innovative Solutions",
      description: "Cutting-edge approaches to modern challenges"
    },
    {
      icon: <FaCog className="text-5xl" />,
      title: "Custom Solutions",
      description: "Tailored strategies for your unique needs"
    },
    {
      icon: <FaShieldAlt className="text-5xl" />,
      title: "Reliable Support",
      description: "24/7 assistance whenever you need it"
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">Elite Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional results
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[800px]">
          {/* Large feature - spans 2x2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 text-white flex flex-col justify-between"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              {features[0].icon}
            </motion.div>
            <div>
              <h3 className="text-3xl font-bold mb-4">{features[0].title}</h3>
              <p className="text-white/90 text-lg">{features[0].description}</p>
            </div>
          </motion.div>

          {/* Tall feature - spans 1x2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10 }}
            className="md:col-span-1 md:row-span-2 bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <motion.div
              className="text-gradient mb-4"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              {features[1].icon}
            </motion.div>
            <h3 className="text-2xl font-bold mb-3">{features[1].title}</h3>
            <p className="text-gray-600">{features[1].description}</p>
          </motion.div>

          {/* Wide feature - spans 1x1 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-orange-50 to-pink-50 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <motion.div
              className="text-gradient mb-4"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              {features[2].icon}
            </motion.div>
            <h3 className="text-xl font-bold mb-2">{features[2].title}</h3>
            <p className="text-gray-600 text-sm">{features[2].description}</p>
          </motion.div>

          {/* Square feature */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ rotate: 2 }}
            className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <motion.div
              className="text-gradient mb-4"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              {features[3].icon}
            </motion.div>
            <h3 className="text-xl font-bold mb-2">{features[3].title}</h3>
            <p className="text-gray-600 text-sm">{features[3].description}</p>
          </motion.div>

          {/* Wide feature - spans 2x1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-1 bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center space-x-4">
              <motion.div
                className="text-gradient"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                {features[4].icon}
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{features[4].title}</h3>
                <p className="text-gray-600">{features[4].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Last feature - spans 2x1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-1 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center space-x-4">
              <motion.div
                className="text-gradient"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                {features[5].icon}
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{features[5].title}</h3>
                <p className="text-gray-600">{features[5].description}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
