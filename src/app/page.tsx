// src/app/home/page.tsx
"use client";
import ActionButtons from "@/components/ActionButtons";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import { useInView } from "framer-motion";
import * as motion from "framer-motion/client";
import Image from "next/image";
import { useRef, useState } from "react";
import team1 from "../../public/images/executive-team/team-1.png";
import team2 from "../../public/images/executive-team/team-2.png";
import team3 from "../../public/images/executive-team/team-3.png";
import image001 from "../../public/images/image001.jpg";

import { ChevronLeft, ChevronRight } from "lucide-react";
import LogoSection from "@/components/LogoSection";

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
    <div className="flex min-h-screen flex-col 2xl:text-xl">
      <Header isPublic={isPublic} setIsPublic={setIsPublic} />
      <span>
        <main className="z-0 flex flex-grow flex-col items-center gap-32 *:px-4 xl:mx-32 2xl:mt-10">
          <motion.section
            ref={heroRef}
            className="grid max-w-screen-xl grid-cols-1 gap-8 justify-self-center lg:grid-cols-2 xl:justify-center"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              className="flex flex-col gap-8 rounded-3xl py-8 text-black  lg:h-[756px] lg:justify-center xl:h-[666px]"
              variants={itemVariants}
            >
              <h1 className="text-3xl font-semibold md:text-5xl lg:mb-3 lg:text-6xl">
                Compassionate Care, Right at Home.
              </h1>
              <p className="font-medium 2xl:text-2xl">
                We&apos;re here for you 24/7, offering the best care Mauritius
                has to offer. With a deep trust and compassion, we&apos;re
                committed to supporting your well-being every step of the way,
                like family.
              </p>
              <ActionButtons
                variant="text-xl p-8 "
                secondVariant="text-xl p-8 rounded-lg"
              />
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

          {!isPublic && <LogoSection />}
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
                  Our Leadership Team
                </h1>
                <span className="font-light text-gray-600">
                  We are a team of experienced, and well-known professionals
                  dedicated to bringing healthcare to you.
                </span>
              </span>
              <div className="flex justify-center gap-2">
                {/* <ActionButtons /> */}
              </div>
            </div>
            <motion.div
              variants={itemVariants}
              className="relative grid w-full grid-cols-1 gap-8 md:grid-cols-3"
            >
              <div className="group relative overflow-hidden rounded-3xl">
                <Image
                  src={team1}
                  alt="placeholder"
                  width={500}
                  height={500}
                  className="w-full rounded-3xl object-cover transition-transform duration-300 group-hover:scale-110 md:h-[500px]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 rounded-b-3xl bg-gradient-to-t from-black/70 to-transparent">
                  <p className="absolute bottom-4 left-4 cursor-default text-xl font-semibold text-white">
                    Dr. Mokshad Sharma, Director
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl">
                <Image
                  src={team2}
                  alt="placeholder"
                  width={500}
                  height={500}
                  className="w-full rounded-3xl object-cover transition-transform duration-300 group-hover:scale-110 md:h-[500px]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 rounded-b-3xl bg-gradient-to-t from-black/70 to-transparent">
                  <p className="absolute bottom-4 left-4 cursor-default text-xl font-semibold text-white">
                    Dr. Yasheel Aukhojee, CEO
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl group">
                <Image
                  src={team3}
                  alt="placeholder"
                  width={500}
                  height={500}
                  className="w-full rounded-3xl object-cover transition-transform duration-300 group-hover:scale-110 md:h-[500px]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 rounded-b-3xl bg-gradient-to-t from-black/70 to-transparent">
                  <p className="absolute bottom-4 left-4 cursor-default text-xl font-semibold text-white">
                    Dr. Khushyant Mungar, Director
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.section>

          <motion.section
            ref={contactRef}
            className={`w-full max-w-screen-xl justify-self-center ${!isPublic ? "" : "hidden"}`}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="max-w-8xl mx-auto flex flex-col md:flex-row gap-16 md:gap-12 bg-stone-800 text-white rounded-3xl w-full  p-20">
              {/* Left side content */}
              <motion.div
                variants={itemVariants}
                className="flex-1 flex items-center justify-center"
              >
                <div className="md:sticky md:top-20">
                  <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl mb-6">
                    Your Corporate Care Journey
                  </h2>
                  <p className="text-gray-400 max-w-md">
                    Reach out to us to book an appointment within minutes with
                    our simple 3-step process
                  </p>
                  <div className="mt-8">
                    <ActionButtons variant="bg-white" />
                  </div>
                </div>
              </motion.div>

              {/* Right side timeline */}
              <motion.div
                variants={itemVariants}
                className="relative flex-1 min-h-[400px] md:min-h-0"
              >
                {/* Vertical Line */}
                <div className="absolute left-[15px] top-0 h-5/6 w-[2px] bg-accent" />

                {/* Timeline Items */}
                <div className="space-y-16 md:space-y-20">
                  {/* Step 1 */}
                  <div className="flex items-start gap-6">
                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-medium text-black">
                      1
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-lg font-medium text-gray-100 mb-2">
                        Corporate Login
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Login with your employee credentials into your company
                        portal
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-6">
                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-medium text-black">
                      2
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-lg font-medium text-gray-100 mb-2">
                        Select a Service
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Select the required medical services from our list of
                        services tailored for corporate
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-6">
                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-medium text-black">
                      2
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-lg font-medium text-gray-100 mb-2">
                        Appointment Booked
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Your appointment is booked and your doctor will be with
                        you within minutes
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
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
                    <h3 className="mb-1 w-fit rounded-full bg-primary px-3 py-1 font-bold text-black">
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
                  <p className="flex w-full max-w-sm items-center p-5 text-xl font-semibold italic">
                    <q>
                      These are some of the Mauritius&apos;s best doctors. They
                      are professionals who have been working in the field for
                      many years. They are very knowledgeable and have a lot of
                      experience in treating patients. Amazing people!
                    </q>
                  </p>
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
                  <p className="flex w-full max-w-sm items-center p-5 text-xl font-semibold italic">
                    <q>
                      These are some of the Mauritius&apos;s best doctors. They
                      are professionals who have been working in the field for
                      many years. They are very knowledgeable and have a lot of
                      experience in treating patients. Amazing people!
                    </q>
                  </p>
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
