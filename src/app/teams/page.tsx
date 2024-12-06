// src/app/teams/page.tsx
"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import * as motion from "framer-motion/client";
import { useState } from "react";
import ActionButtons from "@/components/ActionButtons";
import { teamMembers } from "@/data/teamData";

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

export default function TeamsPage() {
  const [isPublic, setIsPublic] = useState(true);
  return (
    <div className="flex flex-col min-h-screen">
      <Header isPublic={isPublic} setIsPublic={setIsPublic} />
      <motion.main
        className="flex-grow md:flex-col md:justify-center z-0 px-4 xl:mx-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="mx-auto mb-8 flex h-[500px] w-full max-w-screen-xl flex-col items-center justify-center gap-4 rounded-3xl bg-secondary/50 text-black">
            <motion.h1 className="text-5xl font-bold text-black">
              Our Team
            </motion.h1>
            <span className="flex max-w-screen-md flex-col gap-4 px-4 font-light text-gray-600">
              {/* Add description if needed */}
            </span>
            <ActionButtons
              toShowSecondButton={false}
              variant="bg-white text-yellow-800"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-3xl"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={500}
                  className="w-full rounded-3xl object-cover transition-transform duration-300 group-hover:scale-110 md:h-[500px]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 rounded-b-3xl bg-gradient-to-t from-black/70 to-transparent">
                  <p className="absolute bottom-4 left-4 cursor-default text-xl font-semibold text-white">
                    {member.name}, {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
}
