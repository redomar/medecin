// src/components/WhyChooseUsSection.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Calendar, Clipboard } from "lucide-react";
import * as motion from "framer-motion/client";

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
      "Our team consists of highly qualified and experienced general practitioners.",
  },
  {
    icon: Calendar,
    title: "Easy Scheduling",
    description:
      "Book your appointments online or by phone at your convenience.",
  },
  {
    icon: Clipboard,
    title: "Comprehensive Care",
    description:
      "From preventive care to managing chronic conditions, we provide full medical support.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <motion.section
      className="mx-4 mt-32 max-w-screen-xl xl:mx-24 justify-self-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-8 text-gray-900"
        variants={itemVariants}
      >
        Why Choose Medecin Clinic?
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full">
              <CardContent className="flex flex-col items-center h-full p-6">
                <item.icon className="h-12 w-12 text-blue-800/85 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-center text-gray-600 flex-grow">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
