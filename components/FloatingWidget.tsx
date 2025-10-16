"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaComments, FaTimes, FaWhatsapp } from "react-icons/fa";

export default function FloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      {/* Main Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
        >
          {isOpen ? <FaTimes size={24} /> : <FaComments size={24} />}
        </button>

        {/* Action Buttons */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-20 right-0 flex flex-col space-y-3"
            >
              <motion.a
                href="tel:+15551234567"
                whileHover={{ scale: 1.1 }}
                className="bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center space-x-2 pr-4"
              >
                <FaPhone size={20} />
                <span className="text-sm font-medium">Call Us</span>
              </motion.a>

              <motion.button
                onClick={() => setShowChat(true)}
                whileHover={{ scale: 1.1 }}
                className="bg-blue-500 text-white p-3 rounded-full shadow-lg flex items-center space-x-2 pr-4"
              >
                <FaComments size={20} />
                <span className="text-sm font-medium">Chat</span>
              </motion.button>

              <motion.a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center space-x-2 pr-4"
              >
                <FaWhatsapp size={20} />
                <span className="text-sm font-medium">WhatsApp</span>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Chat Widget */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex justify-between items-center">
              <h3 className="font-semibold">Chat with us</h3>
              <button onClick={() => setShowChat(false)}>
                <FaTimes />
              </button>
            </div>
            <div className="p-4 h-64 overflow-y-auto bg-gray-50">
              <div className="bg-white p-3 rounded-lg shadow mb-3">
                <p className="text-sm">Hi! How can we help you today?</p>
              </div>
              <div className="text-xs text-gray-500 text-center">
                Typically replies within minutes
              </div>
            </div>
            <div className="p-4 border-t">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
