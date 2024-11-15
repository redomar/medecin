// src/app/doctors/page.tsx
"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
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

const doctors = [
  {
    name: "Dr. Emily Johnson",
    specialty: "General Practice",
    image: "https://picsum.photos/900/900/",
    bio: "Dr. Johnson has over 15 years of experience in family medicine and is passionate about preventive care.",
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Pediatrics",
    image: "https://picsum.photos/900/901/",
    bio: "Dr. Chen specializes in pediatric care and has a particular interest in childhood development and nutrition.",
  },
  {
    name: "Dr. Sarah Patel",
    specialty: "Internal Medicine",
    image: "https://picsum.photos/901/900/",
    bio: "Dr. Patel is an expert in managing chronic conditions and promoting overall wellness in adults.",
  },
  {
    name: "Dr. David Kim",
    specialty: "Geriatrics",
    image: "https://picsum.photos/900/903/",
    bio: "Dr. Kim focuses on providing compassionate care for older adults and managing age-related health concerns.",
  },
];

export default function DoctorsPage() {
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
        <motion.h1 className="text-3xl font-bold mb-8" variants={itemVariants}>
          Our Doctors
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <motion.div key={doctor.name} variants={itemVariants}>
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col items-center">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={200}
                    height={200}
                    className="rounded-full mb-4"
                  />
                  <h2 className="text-xl font-semibold mb-2">{doctor.name}</h2>
                  <h3 className="text-lg text-gray-600 mb-2">
                    {doctor.specialty}
                  </h3>
                  <p className="text-gray-700 text-center">{doctor.bio}</p>
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
