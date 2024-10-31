// src/app/services/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import services from "@/data/services";
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

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <motion.main
        className="flex-grow container mx-auto px-4 py-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 className="text-3xl font-bold mb-8" variants={itemVariants}>
          Our Services
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col items-center">
                  <service.icon className="h-12 w-12 text-blue-800/85 mb-4" />
                  <h2 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.main>
      <Footer />
    </div>
  );
}
