"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaTiktok, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Elite Business</h3>
            <p className="text-gray-400">Transforming businesses with innovative solutions and exceptional service.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link href="/services/consulting" className="text-gray-400 hover:text-white transition">Services</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-white transition">Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center"><FaPhone className="mr-2" /> (555) 123-4567</li>
              <li className="flex items-center"><FaEnvelope className="mr-2" /> info@elitebusiness.com</li>
              <li className="flex items-center"><FaMapMarkerAlt className="mr-2" /> 123 Business St, City</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-blue-500 transition"><FaFacebook /></a>
              <a href="#" className="text-2xl hover:text-pink-500 transition"><FaInstagram /></a>
              <a href="#" className="text-2xl hover:text-blue-400 transition"><FaTwitter /></a>
              <a href="#" className="text-2xl hover:text-blue-600 transition"><FaLinkedin /></a>
              <a href="#" className="text-2xl hover:text-gray-300 transition"><FaTiktok /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Elite Business Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
