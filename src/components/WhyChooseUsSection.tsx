// src/components/WhyChooseUsSection.tsx
import { Card, CardContent } from "@/components/ui/card";
import {
  Stethoscope,
  Calendar,
  Clipboard,
  Bandage,
  Bed,
  Syringe,
  Sparkle,
  PhoneCall,
  Star,
} from "lucide-react";
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
    icon: PhoneCall,
    title: "24/7 Consultation & Hotline",
    description:
      "We provide homecare 24/7, ensuring medical support is always available when you need it. Our team works tirelessly around the clock, offering the best and most empathetic care.",
  },
  {
    icon: Star,
    title: "5 star rating",
    description:
      "Our 5-star rating reflects our unwavering commitment to providing exceptional care and service. We consistently exceed expectations, earning the satisfaction of all clients we serve.",
  },
  {
    icon: Sparkle,
    title: "96% of our clients recommend us",
    description:
      "With 96% of our clients recommending us, we pride ourselves on delivering top-quality care, building a personal bond with our patients based on sympathy.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <motion.section
      className="flex max-w-screen-xl flex-col justify-self-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="flex min-h-96 flex-col items-center justify-between gap-8 lg:flex-row">
        <div className="flex flex-col gap-4 self-center lg:max-w-96">
          <motion.h1
            className="text-3xl font-medium lg:text-5xl"
            variants={itemVariants}
          >
            Why Choose Us?
          </motion.h1>
          <p className="font-light text-gray-600">
            Choose us for 24/7 consultation and a dedicated hotline. With a
            5-star rating and 96% of our clients recommending us, we are the no.
            1 homecare service in mauritius.
          </p>
          <ActionButtons />
        </div>
        <div className="w-full content-center lg:w-auto">
          {/* a box of 6 icons and plausible company names blue-800/85 background */}
          <div className="mb-5 flex flex-col content-center gap-4 rounded-3xl bg-secondary p-12 lg:max-w-screen-sm">
            <ul className="grid grid-cols-2 gap-12">
              <li className="group flex items-center gap-2">
                <Stethoscope className="h-8 w-8 text-black transition-all duration-300 group-hover:rotate-6 group-hover:scale-110" />
                <span className="text-black">High End Consultancy Co.</span>
              </li>
              <li className="group flex items-center gap-2">
                <Calendar className="h-8 w-8 text-black transition-all duration-300 group-hover:rotate-6 group-hover:scale-110" />
                <span className="text-black">Big Brand Offic.</span>
              </li>
              <li className="group flex items-center gap-2">
                <Clipboard className="h-8 w-8 text-black transition-all duration-300 group-hover:rotate-6 group-hover:scale-110" />
                <span className="text-black">Small Business Co.</span>
              </li>
              <li className="group flex items-center gap-2">
                <Bandage className="h-8 w-8 text-black transition-all duration-300 group-hover:rotate-6 group-hover:scale-110" />
                <span className="text-black">Medium Business Co.</span>
              </li>
              <li className="group flex items-center gap-2">
                <Bed className="h-8 w-8 text-black transition-all duration-300 group-hover:rotate-6 group-hover:scale-110" />
                <span className="text-black">Big Business Co.</span>
              </li>
              <li className="group flex items-center gap-2">
                <Syringe className="h-8 w-8 text-black transition-all duration-300 group-hover:rotate-6 group-hover:scale-110" />
                <span className="text-black">Small Business Co.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="border-yellow-600/20 *:p-6 last:border-r-0 md:border-r md:*:first:pl-0"
          >
            <div className="group flex h-full flex-col pb-6">
              <div className="flex h-full flex-col items-start">
                <span className="mb-4 flex size-12 rounded-full bg-primary p-3">
                  <item.icon className="mr-4 h-full w-full flex-shrink-0 text-yellow-600 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110" />
                </span>
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="flex-grow text-start text-gray-600">
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
