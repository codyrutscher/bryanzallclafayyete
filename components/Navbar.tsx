"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Consulting", href: "/services/consulting" },
    { name: "Strategy", href: "/services/strategy" },
    { name: "Implementation", href: "/services/implementation" },
    { name: "Support", href: "/services/support" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-lg py-4" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gradient">
            Elite Business
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <Link href="/about" className="hover:text-blue-600 transition">About</Link>
            
            <div className="relative group">
              <button className="flex items-center hover:text-blue-600 transition">
                Services <FaChevronDown className="ml-1 text-xs" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-3 hover:bg-blue-50 first:rounded-t-lg last:rounded-b-lg transition"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/gallery" className="hover:text-blue-600 transition">Gallery</Link>
            <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
            <Link 
              href="/booking" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-xl">
                <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                
                <div>
                  <button 
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center w-full"
                  >
                    Services <FaChevronDown className="ml-1 text-xs" />
                  </button>
                  {servicesOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setIsOpen(false)}
                          className="block"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
                <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                <Link 
                  href="/booking" 
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-center"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
