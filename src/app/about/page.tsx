"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import * as motion from "framer-motion/client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ActionButtons from "@/components/ActionButtons";
import {
  Heart,
  Accessibility,
  Sparkles,
  Award,
  Leaf,
  Shield,
} from "lucide-react";

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
  { number: "5K+", label: "Households Trust Us" },
  { number: "800+", label: "Monthly Consultations " },
];

const services = [
  {
    title: "Compassionate Care",
    description: "We prioritise empathy, ensuring every patient feels valued.",
    icon: Heart,
  },
  {
    title: "Accessibility & Affordability",
    description:
      "Bringing healthcare to every doorstep, making it easier and more affordable.",
    icon: Accessibility,
  },
  {
    title: "Innovation in E-Health",
    description:
      "Leveraging technology for better patient outcomes, with secure health records and vitals tracking.",
    icon: Sparkles,
  },
  {
    title: "Quality Excellence",
    description: "Committed to delivering only the highest standard of care.",
    icon: Award,
  },
  {
    title: "Sustainability & Accountability",
    description: "Embracing eco-friendly practices for a greener Mauritius.",
    icon: Leaf,
  },
  {
    title: "Building Trust and Transparency",
    description:
      "Establishing open communication and trust with patients by keeping them informed and engaged in their treatment.",
    icon: Shield,
  },
];

export default function AboutPage() {
  const [isPublic, setIsPublic] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header isPublic={isPublic} setIsPublic={setIsPublic} />

      <motion.main className="flex flex-grow flex-col md:justify-center z-0 px-4 xl:mx-32 gap-32">
        {/* <div className="mx-auto mb-8 flex h-[500px] w-full max-w-screen-xl flex-col items-center justify-center gap-4 rounded-3xl bg-blue-200/30 text-black">
          <motion.h1 className="text-5xl font-bold text-black">
            About Us
          </motion.h1>
          <span>Who we are and what we do</span>
          <ActionButtons toShowSecondButton={false} />
        </div> */}
        {/* Section 1 */}
        <motion.section
          className="mx-auto grid max-w-screen-xl gap-16 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Providing Quality Healthcare at Home
            </h1>
            <p className="text-gray-600">
              We are passionate about revolutionising healthcare by delivering
              quality medical services directly to your doorstep. Experience
              compassionate, convenient, and affordable healthcare at home.
            </p>
            <ActionButtons />
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

        <motion.section
          className="mx-auto grid max-w-screen-xl gap-16 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Image
              src="https://picsum.photos/801/600"
              alt="Medical facility"
              width={800}
              height={600}
              className="rounded-3xl"
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600">
              <span className="font-bold text-black block">
                We started with only one goal: <br />
                to bring healthcare home and make our patients feel secure.
              </span>
              Médecin à Domicile was developed with insights from leading
              healthcare experts in Mauritius, focusing on providing top-quality
              medical services in the comfort of our patients’ homes. Our
              mission is to enhance patient care while saving costs and ensuring
              peace of mind.
            </p>
          </motion.div>
        </motion.section>

        {/* Section 2 - Stats */}
        <motion.section
          className="relative mx-auto mb-16 max-w-screen-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1.0 }}
          variants={containerVariants}
        >
          <Image
            src="https://picsum.photos/1600/600"
            alt="Medical facility wide"
            width={1600}
            height={600}
            className="rounded-3xl w-full h-[400px] object-cover"
          />
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <div className="grid lg:grid-cols-2 gap-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group bg-white p-8 rounded-xl shadow-lg text-center min-w-[200px]"
                >
                  <h3 className="text-4xl font-bold text-blue-800 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300">
                    {metric.number}
                  </h3>
                  <p className="text-gray-600 mt-2">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 3 - Services Grid */}
        <motion.section
          className="mx-auto max-w-screen-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
            The core values that drive everything we do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`border-blue-800/20 *:p-6 ${
                  (index + 1) % 3 === 0 || index === services.length - 1
                    ? ""
                    : "md:border-r"
                }`}
              >
                <div className="group flex h-full flex-col pb-6">
                  <div className="flex h-full flex-col items-start">
                    <span className="mb-4 flex size-12 rounded-full bg-blue-800/10 p-3">
                      <item.icon className="mr-4 h-full w-full flex-shrink-0 text-blue-800/85 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110" />
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-start text-gray-600 flex-grow">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 flex justify-center gap-4">
            <ActionButtons />
          </div>
        </motion.section>
      </motion.main>

      <Footer />
    </div>
  );
}
