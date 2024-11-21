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
    <div className="flex min-h-screen flex-col bg-white">
      <Header isPublic={isPublic} setIsPublic={setIsPublic} />
      <span>
        <main className="z-0 flex flex-grow gap-32 px-4  flex-col justify-center xl:mx-32">
          <motion.section
            ref={heroRef}
            className="grid max-w-screen-xl grid-cols-1 gap-8 justify-self-center lg:grid-cols-2 xl:justify-center"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              className="flex flex-col gap-8 rounded-3xl bg-[#ffe9c6] px-6 py-8 text-black md:p-10 lg:h-[756px] lg:justify-center xl:h-[666px]"
              variants={itemVariants}
            >
              <h1 className="text-3xl font-semibold md:text-5xl lg:mb-3 lg:text-6xl">
                Compassionate Care, Right at Home.
              </h1>
              <p className="font-semibold lg:text-lg">
                We’re here for you 24/7, offering the best care Mauritius has to
                offer. With a deep trust and compassion, we’re committed to
                supporting your well-being every step of the way, like family.
              </p>
              <ActionButtons variant="" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Image
                src={image001}
                alt="placeholder"
                width={1400}
                height={1400}
                className="w-full rounded-3xl lg:h-[756px] lg:object-cover xl:h-[666px]"
              />
            </motion.div>
          </motion.section>

          <ServicesSection />
          <WhyChooseUsSection />

          <motion.section
            ref={teamRef}
            className="flex w-full max-w-screen-xl flex-col gap-8 justify-self-center"
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="w-full md:col-span-2 md:flex md:items-baseline md:justify-between lg:col-span-3">
              <span className="flex flex-col gap-3">
                <h1 className="text-3xl font-medium lg:text-5xl">
                  Our Medical Heroes
                </h1>
                <span className="font-light text-gray-600">
                  We are a team of experienced, registered doctors dedicated to
                  bringing healthcare to you.
                </span>
              </span>
              <div className="flex justify-center gap-2">
                <ActionButtons />
              </div>
            </div>
            <motion.div
              variants={itemVariants}
              className="relative grid w-full grid-cols-1 gap-8 md:grid-cols-3"
            >
              <Image
                src={image004}
                alt="placeholder"
                width={500}
                height={500}
                className="rounded-3xl w-full object-cover md:h-[500px]"
              />
              <Image
                src={image005}
                alt="placeholder"
                width={500}
                height={500}
                className="w-full rounded-3xl object-cover md:h-[500px]"
              />
              <Image
                src={image002}
                alt="placeholder"
                width={500}
                height={500}
                className="w-full rounded-3xl object-cover md:h-[500px]"
              />
            </motion.div>
          </motion.section>

          <motion.section
            ref={contactRef}
            className="hidden h-full w-full flex-row gap-8 justify-self-center md:max-w-screen-lg lg:flex lg:px-10 xl:max-w-screen-xl xl:px-20"
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="relative my-32 h-full w-full"
            >
              <Image
                src="https://picsum.photos/301/300/"
                alt="placeholder"
                width={300}
                height={300}
                className="absolute -top-60 hidden h-[300px] w-[300px] rounded-3xl md:block lg:object-cover xl:-inset-20"
              />
              <div className="h-full w-full px-20">
                <div className="p-2gap-8 flex h-[460px] w-full flex-col items-center justify-center rounded-3xl bg-[#9ADBCC] text-black">
                  <h2 className="text-center text-2xl md:text-4xl lg:text-5xl">
                    Take the first step <br /> toward better health!
                  </h2>
                  <span className="max-w-md text-center text-sm text-black">
                    Get support anytime—reach out to our 24/7 hotline today!
                  </span>
                  <ActionButtons variant="bg-white" />
                </div>
              </div>
              <Image
                src="https://picsum.photos/300/300/"
                alt="placeholder"
                width={300}
                height={300}
                className="absolute -bottom-48 right-0 hidden h-[300px] w-[300px] rounded-3xl md:block lg:object-cover xl:-bottom-20 xl:-right-20"
              />
            </motion.div>
          </motion.section>

          <motion.section className="flex h-full w-full max-w-screen-xl flex-col gap-8 justify-self-center p-3">
            <div className="w-full md:col-span-2 md:flex md:items-baseline md:justify-between lg:col-span-3">
              <span className="flex flex-col gap-3">
                <h1 className="text-3xl font-medium lg:text-5xl">
                  Browse articles & news
                </h1>
                <span className="font-light text-gray-600">
                  Our team of expert GPs is dedicated to your well-being.
                </span>
              </span>
            </div>
            <div className="flex flex-col gap-4 md:flex-row">
              {news.map((news) => (
                <motion.div
                  key={news.title}
                  variants={itemVariants}
                  className="flex flex-col gap-4 rounded-xl"
                >
                  <Image
                    src={news.image}
                    alt={news.title}
                    width={500}
                    height={500}
                    className="h-64 w-full rounded-3xl object-cover lg:h-[300px]"
                  />
                  <div className="flex items-baseline gap-4 text-xs lg:text-base">
                    <h3 className="mb-1 w-fit rounded-full bg-yellow-600/85 px-3 py-1 font-bold text-white">
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

          <motion.section className="hidden h-full w-full max-w-screen-xl flex-col gap-8 justify-self-center p-3 md:flex">
            <div className="flex w-full flex-col items-center gap-2">
              <h1 className="text-3xl font-medium lg:text-5xl">
                Stories that Matter
              </h1>
              <span className="text-lg">
                Discover why our patients trust and recommend us for their
                health and support needs.
              </span>
            </div>

            <div className="relative">
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md hover:bg-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div
                ref={scrollContainerRef}
                className="flex gap-4 overflow-hidden scroll-smooth"
              >
                <div className="relative flex h-full w-[700px] flex-shrink-0 gap-4 rounded-3xl border bg-white">
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
                  <div className="flex w-full max-w-sm items-center p-5 text-lg font-semibold">
                    These are some of the Mauritius&apos;s best doctors. They
                    are professionals who have been working in the field for
                    many years. They are very knowledgeable and have a lot of
                    experience in treating patients. Amazing people!
                  </div>
                </div>

                <div className="relative flex h-full w-[700px] flex-shrink-0 gap-4 rounded-3xl border bg-white">
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
                  <div className="flex w-full max-w-sm items-center p-5 text-xl font-bold">
                    These are some of the Mauritius&apos;s best doctors. They
                    are professionals who have been working in the field for
                    many years. They are very knowledgeable and have a lot of
                    experience in treating patients. Amazing people!
                  </div>
                </div>
              </div>

              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md hover:bg-white"
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
