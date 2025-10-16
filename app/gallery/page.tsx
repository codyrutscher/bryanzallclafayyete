"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import CTASection from "@/components/CTASection";

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");

  const categories = ["all", "projects", "events", "team", "office"];
  
  const images = [
    { id: 1, category: "projects", color: "from-blue-400 to-blue-600" },
    { id: 2, category: "events", color: "from-purple-400 to-purple-600" },
    { id: 3, category: "team", color: "from-pink-400 to-pink-600" },
    { id: 4, category: "office", color: "from-orange-400 to-orange-600" },
    { id: 5, category: "projects", color: "from-green-400 to-green-600" },
    { id: 6, category: "events", color: "from-cyan-400 to-cyan-600" },
    { id: 7, category: "team", color: "from-red-400 to-red-600" },
    { id: 8, category: "office", color: "from-indigo-400 to-indigo-600" },
    { id: 9, category: "projects", color: "from-yellow-400 to-yellow-600" },
  ];

  const filteredImages = filter === "all" 
    ? images 
    : images.filter(img => img.category === filter);

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
              Our <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful projects, memorable events, and the team behind it all
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Mosaic Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4"
          >
            {filteredImages.map((image, index) => {
              // Create varied sizes for mosaic effect
              const sizes = [
                "md:col-span-2 md:row-span-2", // Large
                "md:col-span-1 md:row-span-1", // Small
                "md:col-span-2 md:row-span-1", // Wide
                "md:col-span-1 md:row-span-2", // Tall
                "md:col-span-1 md:row-span-1", // Small
                "md:col-span-2 md:row-span-1", // Wide
                "md:col-span-1 md:row-span-1", // Small
                "md:col-span-2 md:row-span-2", // Large
                "md:col-span-1 md:row-span-1", // Small
              ];
              
              return (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05, zIndex: 10, rotate: index % 2 === 0 ? 2 : -2 }}
                  className={`${sizes[index]} bg-gradient-to-br ${image.color} rounded-3xl shadow-xl cursor-pointer overflow-hidden group relative`}
                >
                  <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold">
                    {image.id}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Want to Be Featured?"
        description="Partner with us and showcase your success story"
        buttonText="Start Your Project"
        buttonLink="/contact"
      />
    </main>
  );
}
