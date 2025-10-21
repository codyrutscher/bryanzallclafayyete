"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaStar, FaGoogle } from "react-icons/fa";

export default function ReviewsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const reviews = [
    {
      name: "Sarah Johnson",
      role: "CEO, Tech Innovations",
      rating: 5,
      text: "Elite Business transformed our operations completely. Their strategic approach and dedication to our success exceeded all expectations.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Founder, Growth Ventures",
      rating: 5,
      text: "Working with this team has been a game-changer. They delivered results beyond what we thought possible.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Director, Market Leaders",
      rating: 5,
      text: "Professional, responsive, and incredibly effective. They truly understand what it takes to scale a business.",
      avatar: "ER"
    },
    {
      name: "David Thompson",
      role: "VP Operations, Enterprise Co",
      rating: 5,
      text: "The level of expertise and support we received was outstanding. Highly recommend their services.",
      avatar: "DT"
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
          <div className="flex items-center justify-center mb-4">
            <FaGoogle className="text-4xl text-blue-600 mr-3" />
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-2xl" />
              ))}
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600">
            Real feedback from businesses we&apos;ve helped transform
          </p>
        </motion.div>

        {/* Masonry-style Review Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First review - Large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="md:col-span-2 bg-gradient-to-br from-blue-500 to-purple-600 p-10 rounded-3xl shadow-xl text-white"
          >
            <div className="flex mb-6">
              {[...Array(reviews[0].rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-300 text-xl" />
              ))}
            </div>
            <p className="text-xl italic mb-8 leading-relaxed">&ldquo;{reviews[0].text}&rdquo;</p>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                {reviews[0].avatar}
              </div>
              <div>
                <h4 className="font-bold text-lg">{reviews[0].name}</h4>
                <p className="text-white/80">{reviews[0].role}</p>
              </div>
            </div>
          </motion.div>

          {/* Second review - Tall */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="md:row-span-2 bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-3xl shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {reviews[1].avatar}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{reviews[1].name}</h4>
                  <p className="text-sm text-gray-600">{reviews[1].role}</p>
                </div>
              </div>
              <div className="flex mb-6">
                {[...Array(reviews[1].rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>
              <p className="text-gray-700 italic text-lg leading-relaxed">&ldquo;{reviews[1].text}&rdquo;</p>
            </div>
          </motion.div>

          {/* Third review - Wide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-white p-8 rounded-3xl shadow-xl border-2 border-gray-100"
          >
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                {reviews[2].avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-bold text-lg">{reviews[2].name}</h4>
                    <p className="text-sm text-gray-600">{reviews[2].role}</p>
                  </div>
                  <div className="flex">
                    {[...Array(reviews[2].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic">&ldquo;{reviews[2].text}&rdquo;</p>
              </div>
            </div>
          </motion.div>

          {/* Fourth review - Square */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-3xl shadow-lg"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                {reviews[3].avatar}
              </div>
              <div>
                <h4 className="font-bold">{reviews[3].name}</h4>
                <p className="text-xs text-gray-600">{reviews[3].role}</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(reviews[3].rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
            </div>
            <p className="text-gray-700 italic text-sm">&ldquo;{reviews[3].text}&rdquo;</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">See more reviews on</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="flex items-center space-x-2 text-blue-600 hover:underline">
              <FaGoogle /> <span>Google Business Profile</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
