// src/components/ServicesSection.tsx
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import ActionButtons from "./ActionButtons";
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

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function ServicesSection() {
  return (
    <motion.section
      className="mt-32 max-w-screen-xl justify-self-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.3fr,1fr,1fr] "
        variants={containerVariants}
      >
        <motion.div
          variants={fadeInVariants}
          className="w-full md:col-span-2 md:flex md:items-baseline md:justify-between lg:col-span-3"
        >
          <h1 className="text-3xl font-medium lg:text-5xl">Our Services</h1>
          <ActionButtons />
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          className="w-full rounded-3xl md:col-span-2 lg:col-auto lg:row-span-2 lg:row-start-2"
        >
          <Image
            src="https://picsum.photos/901/901/"
            alt="placeholder"
            width={900}
            height={900}
            className="w-full rounded-3xl lg:h-full lg:object-cover"
          />
        </motion.div>

        {services.slice(0, 4).map((service) => (
          <motion.div
            key={service.title}
            variants={fadeInVariants}
            className="lg:col-span-1"
          >
            <Card className="h-full">
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <span className="flex size-12 rounded-full bg-blue-800/10 p-3">
                  <service.icon className="mr-4 h-full w-full flex-shrink-0 text-blue-800/85" />
                </span>
                <div className="flex items-start">
                  <h3 className="content-center text-xl font-bold">
                    {service.title}
                  </h3>
                </div>
                <p className="flex-grow font-medium tracking-wide text-gray-600">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
