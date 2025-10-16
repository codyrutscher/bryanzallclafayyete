"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function GalleryPreview() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const images = [
    { id: 1, color: "from-blue-400 to-blue-600" },
    { id: 2, color: "from-purple-400 to-purple-600" },
    { id: 3, color: "from-pink-400 to-pink-600" },
    { id: 4, color: "from-orange-400 to-orange-600" },
    { id: 5, color: "from-green-400 to-green-600" },
    { id: 6, color: "from-cyan-400 to-cyan-600" },
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
            Our <span className="text-gradient">Work Gallery</span>
          </h2>
          <p className="text-xl text-gray-600">
            Explore our portfolio of successful projects
          </p>
        </motion.div>

        {/* Pinterest-style Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Tall image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            className={`bg-gradient-to-br ${images[0].color} md:row-span-2 rounded-3xl shadow-lg cursor-pointer overflow-hidden h-64 md:h-full`}
          >
            <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold">
              {images[0].id}
            </div>
          </motion.div>

          {/* Square image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            className={`bg-gradient-to-br ${images[1].color} aspect-square rounded-3xl shadow-lg cursor-pointer overflow-hidden`}
          >
            <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
              {images[1].id}
            </div>
          </motion.div>

          {/* Wide image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            className={`bg-gradient-to-br ${images[2].color} md:col-span-2 aspect-video rounded-3xl shadow-lg cursor-pointer overflow-hidden`}
          >
            <div className="w-full h-full flex items-center justify-center text-white text-5xl font-bold">
              {images[2].id}
            </div>
          </motion.div>

          {/* Square image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            className={`bg-gradient-to-br ${images[3].color} aspect-square rounded-3xl shadow-lg cursor-pointer overflow-hidden`}
          >
            <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
              {images[3].id}
            </div>
          </motion.div>

          {/* Wide image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            className={`bg-gradient-to-br ${images[4].color} md:col-span-2 aspect-video rounded-3xl shadow-lg cursor-pointer overflow-hidden`}
          >
            <div className="w-full h-full flex items-center justify-center text-white text-5xl font-bold">
              {images[4].id}
            </div>
          </motion.div>

          {/* Tall image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            className={`bg-gradient-to-br ${images[5].color} md:row-span-2 rounded-3xl shadow-lg cursor-pointer overflow-hidden h-64 md:h-full`}
          >
            <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold">
              {images[5].id}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            href="/gallery"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            View Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
