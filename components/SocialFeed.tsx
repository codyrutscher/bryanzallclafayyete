"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaInstagram, FaFacebook, FaTiktok, FaHeart, FaComment } from "react-icons/fa";

export default function SocialFeed() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const posts = [
    {
      platform: "instagram",
      icon: <FaInstagram />,
      image: "from-pink-400 to-purple-600",
      likes: 234,
      comments: 45,
      caption: "Exciting new project launch! 🚀"
    },
    {
      platform: "facebook",
      icon: <FaFacebook />,
      image: "from-blue-400 to-blue-600",
      likes: 189,
      comments: 32,
      caption: "Client success story of the week"
    },
    {
      platform: "tiktok",
      icon: <FaTiktok />,
      image: "from-gray-800 to-gray-900",
      likes: 567,
      comments: 89,
      caption: "Behind the scenes at Elite Business"
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
            Follow Our <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-gray-600">
            Stay connected with our latest updates and insights
          </p>
        </motion.div>

        {/* Diagonal Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Instagram - Large diagonal card */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 30 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10, rotate: -2 }}
            className="md:col-span-2 bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className={`bg-gradient-to-br ${posts[0].image} h-80 flex items-center justify-center text-white text-8xl relative`}>
              {posts[0].icon}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                Instagram
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6 text-lg">{posts[0].caption}</p>
              <div className="flex items-center space-x-8 text-gray-600">
                <span className="flex items-center space-x-2 text-lg">
                  <FaHeart className="text-red-500 text-xl" />
                  <span className="font-semibold">{posts[0].likes}</span>
                </span>
                <span className="flex items-center space-x-2 text-lg">
                  <FaComment className="text-blue-500 text-xl" />
                  <span className="font-semibold">{posts[0].comments}</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Facebook - Vertical card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10, rotate: 2 }}
            className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl shadow-xl overflow-hidden text-white"
          >
            <div className="p-8">
              <div className="text-6xl mb-6">{posts[1].icon}</div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6">
                Facebook
              </div>
              <p className="text-white/90 mb-6 text-lg leading-relaxed">{posts[1].caption}</p>
              <div className="flex items-center space-x-6">
                <span className="flex items-center space-x-2">
                  <FaHeart className="text-white" />
                  <span className="font-semibold">{posts[1].likes}</span>
                </span>
                <span className="flex items-center space-x-2">
                  <FaComment className="text-white" />
                  <span className="font-semibold">{posts[1].comments}</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* TikTok - Wide card */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 30 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="md:col-span-3 bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className={`bg-gradient-to-br ${posts[2].image} md:w-1/3 h-64 md:h-auto flex items-center justify-center text-white text-7xl`}>
                {posts[2].icon}
              </div>
              <div className="p-8 flex-1 flex flex-col justify-center">
                <div className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4 w-fit">
                  TikTok
                </div>
                <p className="text-gray-700 mb-6 text-xl">{posts[2].caption}</p>
                <div className="flex items-center space-x-8 text-gray-600">
                  <span className="flex items-center space-x-2 text-lg">
                    <FaHeart className="text-red-500 text-2xl" />
                    <span className="font-bold">{posts[2].likes}</span>
                  </span>
                  <span className="flex items-center space-x-2 text-lg">
                    <FaComment className="text-blue-500 text-2xl" />
                    <span className="font-bold">{posts[2].comments}</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
