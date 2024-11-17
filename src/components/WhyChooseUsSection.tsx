// src/components/WhyChooseUsSection.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Calendar, Clipboard, Bandage, Bed, Syringe, UserCog } from "lucide-react";
import * as motion from "framer-motion/client";
import ActionButtons from "./ActionButtons";

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

const items = [
  {
    icon: Stethoscope,
    title: "Expert GPs",
    description:
      "Our team consists of highly qualified and experienced general practitioners. We are dedicated to your well-being.",
  },
  {
    icon: Calendar,
    title: "Easy Scheduling",
    description:
      "Book your appointments online or by phone at your convenience and we will do our best to accommodate your schedule.",
  },
  {
    icon: Clipboard,
    title: "Comprehensive Care",
    description:
      "From preventive care to managing chronic conditions, we provide full medical support to ensure your well-being.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <motion.section
      className="flex flex-col mt-32 max-w-screen-xl justify-self-center "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="flex flex-col lg:flex-row justify-between min-h-96 gap-8 items-center">
        <div className="max-w-96 self-center flex flex-col gap-4">
          <motion.h1
            className="text-3xl font-medium lg:text-5xl"
            variants={itemVariants}
          >
            Why Choose Us?
          </motion.h1>
          <p className="text-gray-600 font-light">
            At Medecin Clinic, we believe in delivering exceptional healthcare
            services with a personal touch. Our team of dedicated professionals
            works tirelessly to ensure every patient receives the highest
            standard of medical care.
          </p>
          <ActionButtons />
        </div>
        <div className="content-center">
          {/* a box of 6 icons and plausible company names blue-800/85 background */}
          <div className="flex flex-col gap-4 bg-blue-800/85 p-12 rounded-3xl mb-5 max-w-screen-sm content-center">
            <ul className="grid grid-cols-2 gap-4 ">
              <li className="flex gap-2 items-center">
                <Stethoscope className="h-8 w-8 text-blue-300/85" />
                <span className="text-white">High End Consultancy Co.</span>
              </li>
              <li className="flex gap-2 items-center">
                <Calendar className="h-8 w-8 text-blue-300/85" />
                <span className="text-white">Big Brand Offic.</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Clipboard className="h-8 w-8 text-blue-300/85" />
                  <span className="text-white">Small Business Co.</span>
                </li>
              <li className="flex gap-2 items-center">
                <Bandage className="h-8 w-8 text-blue-300/85" />
                <span className="text-white">Medium Business Co.</span>
              </li>
              <li className="flex gap-2 items-center">
                <Bed className="h-8 w-8 text-blue-300/85" />
                <span className="text-white">Big Business Co.</span>
              </li>
              <li className="flex gap-2 items-center">
                <Syringe className="h-8 w-8 text-blue-300/85" />
                <span className="text-white">Small Business Co.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8 ">
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="border-r last:border-r-0 border-blue-800/20 *:p-6 md:*:first:pl-0"
          >
            <div className="h-full pb-6 flex flex-col">
              <div className="flex flex-col items-start h-full">
                <span className="flex size-12 rounded-full bg-blue-800/10 p-3 mb-4">
                  <item.icon className="mr-4 h-full w-full flex-shrink-0 text-blue-800/85" />
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
    </motion.section>
  );
}
