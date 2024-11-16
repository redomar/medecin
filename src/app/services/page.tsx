// src/app/services/page.tsx
"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import services_en, { services_fr } from "@/data/services";
import * as motion from "framer-motion/client";
import { useState } from "react";
import ActionButtons from "@/components/ActionButtons";

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
  const [isPublic, setIsPublic] = useState(true);
  const services = isPublic ? services_en : services_fr;

  return (
    <div className="flex min-h-screen flex-col bg-[#00000007]">
      <Header isPublic={isPublic} setIsPublic={setIsPublic} />
      <motion.main
        className="flex-grow md:flex-col md:justify-center z-0 px-4 xl:mx-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="mx-auto mb-8 flex h-[500px] w-full max-w-screen-xl flex-col items-center justify-center gap-4 rounded-3xl bg-blue-200/30 text-black">
          <motion.h1 className="text-5xl font-bold text-black">
            Our Services
          </motion.h1>
          <span>Get the best care for your health</span>
          <ActionButtons toShowSecondButton={false} />
        </div>
        <div className="max-w-screen-xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="h-full">
                <CardContent className="flex flex-col items-center p-6">
                  <service.icon className="mb-4 h-12 w-12 text-blue-800/85" />
                  <h2 className="mb-2 text-xl font-semibold">
                    {service.title}
                  </h2>
                  <p className="text-center text-gray-700">
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
