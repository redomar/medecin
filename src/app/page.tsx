// src/app/home/page.tsx
"use client";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ActionButtons from "@/components/ActionButtons";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import * as motion from "framer-motion/client";
import { useState } from "react";
import image001 from "../../public/images/image001.jpg";
import image002 from "../../public/images/image002.jpg";
// import image003 from "../../public/images/image003.jpg";
import image004 from "../../public/images/image004.jpg";
import image005 from "../../public/images/image005.jpg";

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

export default function HomePage() {
  const [isPublic, setIsPublic] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-white ">
      <Header isPublic={isPublic} setIsPublic={setIsPublic} />
      <span
        style={{
          background:
            "repeating-linear-gradient(to bottom, white 0px, white 445px,#00000007 445px,#00000007 1900px)",
        }}
      >
        <main className="flex-grow md:flex-col md:justify-center z-0 px-4 md:mx-32">
          <motion.section
            className="mt-5 grid max-w-screen-xl grid-cols-1 gap-8 justify-self-center  lg:grid-cols-2 xl:justify-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              className="flex flex-col gap-8 rounded-3xl bg-blue-800/85 px-6 py-8 text-white md:p-10 lg:h-[756px] lg:justify-center xl:h-[666px]"
              variants={itemVariants}
            >
              <h1 className="text-3xl font-semibold md:text-5xl lg:mb-3 lg:text-6xl">
                Personalised Care with Professional Support
              </h1>
              <p className="lg:text-lg font-semibold">
                Experience comprehensive and compassionate healthcare at Medecin
                Clinic. Our team of expert GPs is dedicated to your well-being.
              </p>
              <ActionButtons variant="" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Image
                src={image001}
                alt="placeholder"
                width={1400}
                height={1400}
                className="rounded-3xl w-full lg:h-[756px] xl:h-[666px] lg:object-cover"
              />
            </motion.div>
          </motion.section>

          {isPublic ? <ServicesSection /> : <WhyChooseUsSection />}

          <motion.section className="mt-32 max-w-screen-xl w-full justify-self-center flex flex-col gap-8">
            <div className="md:flex md:justify-between md:items-baseline md:col-span-2 lg:col-span-3 w-full">
              <span className="flex flex-col gap-3 ">
                <h1 className="text-3xl lg:text-5xl">Our Professional Team</h1>
                <span className="text-gray-600 font-thin">
                  Our team of expert GPs is dedicated to your well-being.
                </span>
              </span>
              <div className="flex justify-center gap-2">
                <ActionButtons />
              </div>
            </div>
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 relative w-full"
            >
              <Image
                src={image004}
                alt="placeholder"
                width={250}
                height={250}
                className="rounded-3xl w-full h-auto object-cover"
              />
              <Image
                src={image005}
                alt="placeholder"
                width={250}
                height={250}
                className="rounded-3xl w-full h-auto object-cover"
              />
              <Image
                src={image002}
                alt="placeholder"
                width={250}
                height={250}
                className="rounded-3xl w-full h-auto object-cover"
              />
            </motion.div>
          </motion.section>

          <motion.section className="hidden lg:flex mt-32 md:max-w-screen-lg xl:max-w-screen-xl lg:px-10 xl:px-20 w-full justify-self-center  flex-row gap-8 h-full">
            <div className="relative w-full h-full my-64">
              <Image
                src="https://picsum.photos/301/300/"
                alt="placeholder"
                width={300}
                height={300}
                className="rounded-3xl hidden lg:object-cover h-[300px] w-[300px] absolute md:block -top-60 xl:-inset-20"
              />
              <div className="w-full h-full px-20">
                <div className="bg-blue-800/85 text-white h-[460px] w-full p-2  gap-8 rounded-3xl flex flex-col justify-center items-center">
                  <h2 className=" text-2xl md:text-4xl lg:text-5xl text-center">
                    Start you journey to
                    <br /> good health, Contact us!
                  </h2>
                  <span className="max-w-md text-sm text-gray-50/80 text-center">
                    Our team of expert GPs is dedicated to your well-being.
                    Start your journey with Medecin A Domicile as corporate when
                    toggled to corporate and as individual when toggled to
                    individual
                  </span>
                  <ActionButtons variant="" />
                </div>
              </div>
              <Image
                src="https://picsum.photos/300/300/"
                alt="placeholder"
                width={300}
                height={300}
                className="rounded-3xl hidden lg:object-cover h-[300px] w-[300px] absolute md:block -bottom-48 xl:-bottom-20 right-0 xl:-right-20"
              />
            </div>
          </motion.section>
          {/* <motion.section className=" max-w-screen-xl w-full justify-self-center flex flex-col gap-8 h-full">
          <div className="flex flex-col items-center gap-2 w-full">
            <h1 className="text-3xl lg:text-5xl">What they say about us</h1>
            <span className="text-gray-600 font-thin">
              Some words from previous people who have used our services.
            </span>
          </div>

          <div className="flex flex-col xl:flex-row gap-4 self-center xl:self-start overflow-auto max-w-[1400px] 2xl:max-w-screen-xl">
            <div className="flex w-[900px] h-full gap-4 bg-white border relative rounded-3xl">
              <Image
                src="https://picsum.photos/920/920"
                alt="placeholder"
                width={920}
                height={920}
                className="rounded-l-3xl lg:h-[520px] lg:w-[420px] lg:object-cover"
              />
              <div className="absolute right-2 top-2">
                <h3 className="text-xl lg:text-2xl">01</h3>
              </div>
              <div className="flex items-center w-full p-5 max-w-sm">
                These are some of the Mauritius's best doctors. They are
                professionals who have been working in the field for many years.
                They are very knowledgeable and have a lot of experience in
                treating patients. Amazing people!
              </div>
            </div>

            <div className="flex w-[900px] h-full gap-4 bg-white border relative rounded-3xl">
              <Image
                src="https://picsum.photos/920/921"
                alt="placeholder"
                width={920}
                height={920}
                className="rounded-l-3xl  lg:h-[520px] lg:w-[420px] lg:object-cover"
              />
              <div className="absolute right-2 top-2">
                <h3 className="text-xl lg:text-2xl">02</h3>
              </div>
              <div className="flex  items-center w-full p-5 max-w-sm">
                These are some of the Mauritius's best doctors. They are
                professionals who have been working in the field for many years.
                They are very knowledgeable and have a lot of experience in
                treating patients. Amazing people!
              </div>
            </div>
          </div>
        </motion.section> */}
        </main>
      </span>

      <Footer />
    </div>
  );
}
