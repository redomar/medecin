// src/components/ServicesSection.tsx
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import ActionButtons from "./ActionButtons";
import services from "@/data/services";
import * as motion from "framer-motion/client";

const fadeInVariants = {
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

export default function ServicesSection() {
  return (
    <section className="mt-32 max-w-screen-xl justify-self-center">
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-[1.3fr,1fr,1fr] gap-8"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <div className="md:flex md:justify-between md:items-baseline md:col-span-2 lg:col-span-3 w-full">
          <h1 className="text-3xl lg:text-5xl">Our Services</h1>
          <ActionButtons />
        </div>
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={fadeInVariants}
            custom={index}
            className="lg:col-span-1"
          >
            <Card className="h-full">
              <CardContent className="flex flex-col h-full p-6">
                <div className="flex items-start mb-4">
                  <service.icon className="h-8 w-8 text-blue-800/85 mr-4 flex-shrink-0" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600 flex-grow">{service.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        <Image
          src="https://picsum.photos/901/901/"
          alt="placeholder"
          width={900}
          height={900}
          className="rounded-3xl w-full lg:h-[523px] md:col-span-2 lg:col-auto lg:object-cover lg:row-span-2 lg:row-start-2"
        />
      </motion.div>
    </section>
  );
}
