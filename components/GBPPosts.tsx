"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGoogle, FaCalendar } from "react-icons/fa";

export default function GBPPosts() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const posts = [
    {
      title: "New Service Launch",
      date: "Oct 10, 2025",
      content: "We're excited to announce our new premium consulting package designed for growing businesses.",
      type: "Update"
    },
    {
      title: "Special Offer",
      date: "Oct 8, 2025",
      content: "Book a consultation this month and receive 20% off your first service package!",
      type: "Offer"
    },
    {
      title: "Industry Recognition",
      date: "Oct 5, 2025",
      content: "Proud to be recognized as a top business solutions provider in our region.",
      type: "News"
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
          <div className="flex items-center justify-center mb-4">
            <FaGoogle className="text-5xl text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="text-gradient">Updates</span>
          </h2>
          <p className="text-xl text-gray-600">
            Stay informed with our Google Business Profile posts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {post.type}
                </span>
                <span className="flex items-center text-gray-500 text-sm">
                  <FaCalendar className="mr-2" />
                  {post.date}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{post.title}</h3>
              <p className="text-gray-600">{post.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
