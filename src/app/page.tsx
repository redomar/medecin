// src/app/home/page.tsx
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ActionButtons from "@/components/ActionButtons";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import * as motion from "framer-motion/client"


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main
        className="flex-grow md:flex-col md:justify-center"
        style={{
          background:
            "repeating-linear-gradient(to bottom, white 0px, white 445px,#00000005 445px,#00000005 1900px);",
        }}
      >
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 mx-4 mt-5 max-w-screen-xl xl:mx-24 xl:justify-center">
          <div className="bg-yellow-500 text-black py-8 px-6 md:p-10 flex flex-col gap-8 rounded-3xl lg:h-[756px] xl:h-[666px] lg:justify-center">
            <h1 className=" text-3xl md:text-5xl lg:text-6xl lg:mb-3 font-bold">
              Personalised Care with Professional Support
            </h1>
            <p className="lg:text-lg">
              Experience comprehensive and compassionate healthcare at Medecin
              Clinic. Our team of expert GPs is dedicated to your well-being.
            </p>
            <ActionButtons />
          </div>
          <Image
            src="https://placehold.co/400x400/png"
            alt="placeholder"
            width={400}
            height={400}
            className="rounded-3xl w-full lg:h-[756px] xl:h-[666px] lg:object-cover"
          />
        </section>

        <ServicesSection />
        <WhyChooseUsSection />
      </main>

      <Footer />
    </div>
  );
}
