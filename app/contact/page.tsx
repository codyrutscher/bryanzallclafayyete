"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("¡Gracias! Nos pondremos en contacto pronto. / Thank you! We'll be in touch soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: ""
        });
      } else {
        alert("Hubo un error. Por favor llámenos al (337) 210-6956. / There was an error. Please call us at (337) 210-6956.");
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert("Hubo un error. Por favor llámenos al (337) 210-6956. / There was an error. Please call us at (337) 210-6956.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform Spaces With Color - Family-owned painting services
            </p>
            <div className="mt-8">
              <a href="tel:3372106956" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                📞 Call Now: (337) 210-6956
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a service / Seleccione un servicio</option>
                    <option value="interior-painting">Interior Painting / Pintura Interior</option>
                    <option value="exterior-painting">Exterior Painting / Pintura Exterior</option>
                    <option value="commercial-painting">Commercial Painting / Pintura Comercial</option>
                    <option value="staining">Staining Services / Servicios de Tinción</option>
                    <option value="drywall-repair">Small Drywall Repair / Reparación de Paneles de Yeso</option>
                    <option value="cleanup">Clean Up Services / Servicios de Limpieza</option>
                    <option value="residential">Residential Painting / Pintura Residencial</option>
                    <option value="other">Other / Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  We&apos;re here to help and answer any questions you might have. We look forward to hearing from you!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg text-white">
                    <FaPhone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone / Teléfono</h3>
                    <a href="tel:3372106956" className="text-blue-600 hover:text-blue-800 font-semibold text-lg">(337) 210-6956</a>
                    <p className="text-sm text-gray-500 mt-1">Click to call / Haga clic para llamar</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg text-white">
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email / Correo</h3>
                    <a href="mailto:bryanzallc@outlook.com" className="text-gray-600 hover:text-blue-600 break-all">bryanzallc@outlook.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg text-white">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Service Area / Área de Servicio</h3>
                    <p className="text-gray-600">Lafayette, LA & Surrounding Areas</p>
                    <p className="text-sm text-gray-500">Abbeville, Breaux Bridge, Broussard, Carencro, Jonesville, Maurice, Milton, Opelousas, Scott</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg text-white">
                    <FaClock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours / Horario</h3>
                    <p className="text-gray-600">
                      7 Days a Week: 7:00 AM - 7:00 PM<br />
                      7 Días a la Semana: 7:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Prefer to Book Directly?</h3>
                <p className="text-gray-600 mb-4">
                  Schedule a consultation at a time that works for you
                </p>
                <a
                  href="/booking"
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition"
                >
                  Book Appointment
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
