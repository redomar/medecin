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
    <div className="flex min-h-screen flex-col">
      <Header isPublic={isPublic} setIsPublic={setIsPublic} />
      <motion.main
        className="flex-grow md:flex-col md:justify-center z-0 px-4 xl:mx-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="mx-auto mb-8 flex h-[500px] w-full max-w-screen-xl flex-col items-center justify-center gap-4 rounded-3xl bg-[#ffd07e]/40 text-black">
          <motion.h1 className="text-5xl font-bold text-black">
            Our Services
          </motion.h1>
          <span className="flex max-w-screen-md flex-col gap-4 px-4 font-light text-gray-600">
            <p>
              Since 2016, we have been providing exceptional care with 24/7
              doctor consultations at your home, office, or hotel, bringing
              healthcare directly to you. Need on-spot treatment, tests, or
              monitoring? We&apos;ve got it covered.
            </p>
            <p>
              Our ethos is built around offering complete support to our
              patients, ensuring that every aspect of your healthcare journey is
              cared for. We&apos;re committed to providing the best care
              tirelessly to reach you as quickly as possible, providing
              trustworthy and expert care—anywhere, anytime.
            </p>
          </span>
          <ActionButtons
            toShowSecondButton={false}
            variant="bg-white text-yellow-800"
          />
        </div>
        <div className="mx-auto grid max-w-screen-xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="group h-full">
                <CardContent className="flex flex-col items-center p-6">
                  <service.icon className="mb-4 h-12 w-12 text-yellow-600/85 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110" />
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
