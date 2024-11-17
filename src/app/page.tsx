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
import { useInView } from "framer-motion";
import { useRef } from "react";
import image001 from "../../public/images/image001.jpg";
import image002 from "../../public/images/image002.jpg";
// import image003 from "../../public/images/image003.jpg";
import image004 from "../../public/images/image004.jpg";
import image005 from "../../public/images/image005.jpg";

import { ChevronLeft, ChevronRight } from "lucide-react";

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

const news = [
  {
    title: "Doctors now have a new app",
    date: "2023-04-01",
    image: "https://picsum.photos/500/520/",
    content:
      "The new app is a great way to stay up to date with your doctor's appointments and manage your health. It's easy to use and has a lot of features to help you stay healthy.",
    topic: "Annoucnment",
  },
  {
    title: "New GPs join the team",
    date: "2023-04-01",
    image: "https://picsum.photos/500/530/",
    content:
      "We are thrilled to welcome our new GPs to our team. They bring a wealth of knowledge and experience to our practice, and we are grateful for their dedication and commitment.",
    topic: "Health",
  },
];
export default function HomePage() {
  const [isPublic, setIsPublic] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 900; // Width of one card
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  // Create refs for each section
  const heroRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  // Check if sections are in view
  const heroInView = useInView(heroRef, { once: false });
  const teamInView = useInView(teamRef, { once: false });
  const contactInView = useInView(contactRef, { once: false });

  return (
    <div className="flex flex-col min-h-screen bg-white ">
      <Header isPublic={isPublic} setIsPublic={setIsPublic} />
      <span
        style={{
          background:
            "repeating-linear-gradient(to bottom, white 0px, white 445px,#00000007 445px,#00000007 1900px)",
        }}
      >
        <main className="flex-grow md:flex-col md:justify-center z-0 px-4 xl:mx-32">
          <motion.section
            ref={heroRef}
            className="grid max-w-screen-xl grid-cols-1 gap-8 justify-self-center lg:grid-cols-2 xl:justify-center"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              className="flex flex-col gap-8 rounded-3xl bg-blue-800/85 px-6 py-8 text-white md:p-10 lg:h-[756px] lg:justify-center xl:h-[666px]"
              variants={itemVariants}
            >
              <h1 className="text-3xl font-semibold md:text-5xl lg:mb-3 lg:text-6xl">
                Compassionate Care, Right at Home.
              </h1>
              <p className="lg:text-lg font-semibold">
                We’re here for you 24/7, offering the best care Mauritius has to
                offer. With a deep trust and compassion, we’re committed to
                supporting your well-being every step of the way, like family
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

          <ServicesSection />
          <WhyChooseUsSection />

          <motion.section
            ref={teamRef}
            className="mt-20 max-w-screen-xl w-full justify-self-center flex flex-col gap-8"
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="md:flex md:justify-between md:items-baseline md:col-span-2 lg:col-span-3 w-full">
              <span className="flex flex-col gap-3 ">
                <h1 className="text-3xl font-medium lg:text-5xl">
                  Our Medical Heroes
                </h1>
                <span className="text-gray-600 font-light">
                  We are a team of experienced, registered doctors dedicated to
                  bringing healthcare to you
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
                width={500}
                height={500}
                className="rounded-3xl w-full md:h-[500px] object-cover"
              />
              <Image
                src={image005}
                alt="placeholder"
                width={500}
                height={500}
                className="rounded-3xl w-full md:h-[500px] object-cover"
              />
              <Image
                src={image002}
                alt="placeholder"
                width={500}
                height={500}
                className="rounded-3xl w-full md:h-[500px] object-cover"
              />
            </motion.div>
          </motion.section>

          <motion.section
            ref={contactRef}
            className="hidden lg:flex mt-32 md:max-w-screen-lg xl:max-w-screen-xl lg:px-10 xl:px-20 w-full justify-self-center flex-row gap-8 h-full"
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="relative w-full h-full my-64"
            >
              <Image
                src="https://picsum.photos/301/300/"
                alt="placeholder"
                width={300}
                height={300}
                className="rounded-3xl hidden lg:object-cover h-[300px] w-[300px] absolute md:block -top-60 xl:-inset-20"
              />
              <div className="w-full h-full px-20">
                <div className="bg-blue-800/85 text-white h-[460px] w-full p-2gap-8 rounded-3xl flex flex-col justify-center items-center">
                  <h2 className=" text-2xl md:text-4xl lg:text-5xl text-center">
                    Take the first step <br /> toward better health!
                  </h2>
                  <span className="max-w-md text-sm text-gray-50/80 text-center">
                    Get support anytime—reach out to our 24/7 hotline today!
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
            </motion.div>
          </motion.section>

          <motion.section className="max-w-screen-xl w-full justify-self-center flex flex-col gap-8 h-full p-3 ">
            <div className="md:flex md:justify-between md:items-baseline md:col-span-2 lg:col-span-3 w-full">
              <span className="flex flex-col gap-3 ">
                <h1 className="text-3xl font-medium lg:text-5xl">
                  Browse articles & news
                </h1>
                <span className="text-gray-600 font-light">
                  Our team of expert GPs is dedicated to your well-being.
                </span>
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              {news.map((news) => (
                <motion.div
                  key={news.title}
                  variants={itemVariants}
                  className="rounded-xl flex flex-col gap-4"
                >
                  <Image
                    src={news.image}
                    alt={news.title}
                    width={500}
                    height={500}
                    className="rounded-3xl w-full h-64  lg:h-[300px] object-cover"
                  />
                  <div className="flex items-baseline gap-4 text-xs lg:text-base">
                    <h3 className="mb-1 w-fit rounded-full bg-blue-800/85 px-3 py-1 font-bold text-white">
                      {news.topic}
                    </h3>
                    <p className="text-lg font-semibold text-gray-600">
                      {news.date}
                    </p>
                  </div>
                  <span>
                    <h2 className="mb-2 text-xl font-bold lg:text-3xl lg:font-semibold">
                      {news.title}
                    </h2>
                    <p className="text-start text-lg text-gray-800">
                      {news.content}
                    </p>
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section className="hidden h-full w-full max-w-screen-xl flex-col gap-8 justify-self-center p-3 md:flex mt-12">
            <div className="flex flex-col items-center gap-2 w-full">
              <h1 className="text-3xl lg:text-5xl font-semibold">
                What they say about us
              </h1>
              <span className=" text-lg">
                Some words from previous people who have used our services.
              </span>
            </div>

            <div className="relative">
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div
                ref={scrollContainerRef}
                className="flex gap-4 overflow-hidden scroll-smooth"
              >
                <div className="flex-shrink-0 flex w-[700px] h-full gap-4 bg-white border relative rounded-3xl">
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
                  <div className="flex font-bold text-xl items-center w-full p-5 max-w-sm">
                    These are some of the Mauritius's best doctors. They are
                    professionals who have been working in the field for many
                    years. They are very knowledgeable and have a lot of
                    experience in treating patients. Amazing people!
                  </div>
                </div>

                <div className="flex-shrink-0 flex w-[700px] h-full gap-4 bg-white border relative rounded-3xl">
                  <Image
                    src="https://picsum.photos/920/921"
                    alt="placeholder"
                    width={920}
                    height={920}
                    className="rounded-l-3xl lg:h-[520px] lg:w-[420px] lg:object-cover"
                  />
                  <div className="absolute right-2 top-2">
                    <h3 className="text-xl lg:text-2xl">02</h3>
                  </div>
                  <div className="flex font-bold text-xl items-center w-full p-5 max-w-sm">
                    These are some of the Mauritius's best doctors. They are
                    professionals who have been working in the field for many
                    years. They are very knowledgeable and have a lot of
                    experience in treating patients. Amazing people!
                  </div>
                </div>
              </div>

              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </motion.section>
        </main>
      </span>

      <Footer />
    </div>
  );
}
