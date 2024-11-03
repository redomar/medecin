"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import * as motion from "framer-motion/client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence } from "framer-motion";


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

const faqVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.3,
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
      }
    }
  };

const faqs = [
    {
      question: "What are your opening hours?",
      answer: "We are open Monday to Friday from 8am to 6pm, and Saturday from 9am to 1pm."
    },
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment by phone, online through our website, or in person at the clinic."
    },
    {
      question: "Are you accepting new patients?",
      answer: "Yes, we are accepting new patients. Please contact us for more information about the registration process."
    },
    {
      question: "Do you offer home visits?",
      answer: "Yes, we offer home visits for patients who are unable to come to the clinic."
    }
  ];

const faqs_fr = [
  {
    question: "Quels sont vos horaires d'ouverture?",
    answer: "Nous sommes ouverts du lundi au vendredi de 8h à 18h, et le samedi de 9h à 13h."
  },
  {
    question: "Comment puis-je prendre rendez-vous?",
    answer: "Vous pouvez prendre rendez-vous par téléphone, en ligne via notre site web, ou en personne à la clinique."
  },
  {
    question: "Acceptez-vous les nouvelles inscriptions?",
    answer: "Oui, nous acceptons les nouveaux patients. Veuillez nous contacter pour plus d'informations sur le processus d'inscription."
  },
  {
    question: "Proposez-vous des visites à domicile?",
    answer: "Oui, nous proposons des visites à domicile pour les patients qui ne peuvent pas se déplacer à la clinique."
  }
];

export default function ContactPage() {
  const [isPublic, setIsPublic] = useState(true);
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header isPublic={isPublic} setIsPublic={setIsPublic} />
      
      <motion.main
        className="flex-grow container mx-auto px-4 py-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Section 1 - Contact Form */}
        <motion.section className="grid md:grid-cols-2 gap-16 mb-32">
          <motion.div variants={itemVariants} className="flex flex-col">
            <h1 className="text-4xl font-bold mb-8">Contactez-nous</h1>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nom complet"
                className="p-3 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 border rounded-lg"
              />
              <input
                type="tel"
                placeholder="Téléphone"
                className="p-3 border rounded-lg"
              />
              <textarea
                placeholder="Votre message"
                rows={6}
                className="p-3 border rounded-lg resize-none"
              />
              <button
                type="submit"
                className="bg-blue-800 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Envoyer
              </button>
            </form>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Image
              src="https://picsum.photos/800/900"
              alt="Contact"
              width={800}
              height={900}
              className="rounded-3xl h-full object-cover"
            />
          </motion.div>
        </motion.section>

        {/* Section 2 - Location */}
        <motion.section className="grid md:grid-cols-2 gap-16 mb-32">
          <motion.div variants={itemVariants}>
            <Image
              src="https://picsum.photos/801/600"
              alt="Location"
              width={800}
              height={600}
              className="rounded-3xl"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Notre emplacement</h2>
            <div className="space-y-4 text-gray-600">
              <p className="font-semibold text-xl">Medecin Clinic</p>
              <p>123 Rue Royal</p>
              <p>Port Louis</p>
              <p>Maurice</p>
              <div className="pt-4">
                <p className="font-semibold">Téléphone:</p>
                <p>+230 123 4567</p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p>contact@medecin.mu</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Section 3 - FAQ */}
        <motion.section className="mb-32">
  <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
  <div className="max-w-2xl mx-auto space-y-4">
    {faqs.map((faq, index) => (
      <motion.div
        key={index}
        variants={itemVariants}
        className="border rounded-lg overflow-hidden"
        initial="visible"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
          onClick={() => toggleFaq(index)}
        >
          <h3 className="text-lg font-semibold">{faq.question}</h3>
          <motion.div
            initial={false}
            animate={{ rotate: openFaqs.includes(index) ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {openFaqs.includes(index) ? (
              <Minus className="h-5 w-5 text-blue-800" />
            ) : (
              <Plus className="h-5 w-5 text-blue-800" />
            )}
          </motion.div>
        </div>
        <AnimatePresence initial={false}>
          {openFaqs.includes(index) && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={faqVariants}
              className="overflow-hidden"
            >
              <div className="p-4 bg-gray-50 border-t">
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  {faq.answer}
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    ))}
  </div>
</motion.section>
      </motion.main>

      <Footer />
    </div>
  );
}