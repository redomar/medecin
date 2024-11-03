"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import * as motion from "framer-motion/client";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const metrics = [
  { number: "15+", label: "Years Experience" },
  { number: "10k+", label: "Patients Treated" },
  { number: "50+", label: "Medical Professionals" },
];

const services = [
  { title: "Primary Care", description: "Comprehensive health assessments and ongoing care" },
  { title: "Specialist Referrals", description: "Direct access to specialist networks" },
  { title: "Home Visits", description: "Medical care in the comfort of your home" },
  { title: "Preventive Care", description: "Regular check-ups and health screenings" },
  { title: "Chronic Disease Management", description: "Ongoing support for long-term conditions" },
  { title: "Telemedicine", description: "Remote consultations when needed" },
];

export default function AboutPage() {
  const [isPublic, setIsPublic] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header isPublic={isPublic} setIsPublic={setIsPublic} />
      
      <motion.main
        className="flex-grow container mx-auto px-4 py-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Section 1 */}
        <motion.section className="grid md:grid-cols-2 gap-16 mb-32">
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Providing Quality Healthcare Since 2008</h1>
            <p className="text-gray-600">
              At Medecin Clinic, we believe in delivering exceptional healthcare services with a personal touch. 
              Our team of dedicated professionals works tirelessly to ensure every patient receives the highest 
              standard of medical care.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Image
              src="https://picsum.photos/800/600"
              alt="Medical team"
              width={800}
              height={600}
              className="rounded-3xl"
            />
          </motion.div>
        </motion.section>

        <motion.section className="grid md:grid-cols-2 gap-16 mb-32">
          <motion.div variants={itemVariants}>
            <Image
              src="https://picsum.photos/801/600"
              alt="Medical facility"
              width={800}
              height={600}
              className="rounded-3xl"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600">
              We strive to make quality healthcare accessible to all, combining modern medical practices 
              with compassionate care. Our approach focuses on treating not just the symptoms, but the 
              whole person.
            </p>
          </motion.div>
        </motion.section>

        {/* Section 2 - Stats */}
        <motion.section className="mb-32 relative">
          <Image
            src="https://picsum.photos/1600/600"
            alt="Medical facility wide"
            width={1600}
            height={600}
            className="rounded-3xl w-full h-[400px] object-cover"
          />
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <div className="grid grid-cols-3 gap-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-8 rounded-xl shadow-lg text-center min-w-[200px]"
                >
                  <h3 className="text-4xl font-bold text-blue-800">{metric.number}</h3>
                  <p className="text-gray-600 mt-2">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 3 - Services Grid */}
        <motion.section className="mt-32 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.main>

      <Footer />
    </div>
  );
}