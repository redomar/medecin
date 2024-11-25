// src/data/services.ts
import {
  Users,
  Activity,
  Clipboard,
  Stethoscope,
  Bandage,
  Building,
  UserCog,
  Bed,
  Syringe,
  Ambulance,
} from "lucide-react";

const services = [
  {
    title: "General Consultations",
    description:
      "Our services include symptom checks, routine assessments, and ongoing health management tailored to your needs.",
    icon: Stethoscope,
  },
  {
    title: "Chronic Care",
    description:
      "Comprehensive management of chronic conditions like diabetes, hypertension, and arthritis. Our team offers regular monitoring and tailored care plans.",
    icon: Activity,
  },
  {
    title: "Urgent Care Visits",
    description:
      "Immediate medical attention for non-critical emergencies, directly to you. Our urgent care avoids hospital delays and provides fast, effective treatment.",
    icon: Clipboard,
  },
  {
    title: "Hydravit Therapy",
    description:
      "Specialised IV vitamin therapy for chronic fatigue, glowing skin, and overall wellness.",
    icon: Syringe,
  },
  {
    title: "Blood Sampling",
    description:
      "Blood sampling and consultations in collaboration with a leading Mauritius lab, available at our Moka office.",
    icon: Clipboard,
  },
  {
    title: "Ambulance Service",
    description:
      "Safe patient transfers between homes and hospitals or hospital-to-hospital, including non-emergency trips. Fully equipped with ACLS systems.",
    icon: Ambulance,
  },
  {
    title: "Corporate Care",
    description:
      "Tailored on-site health screenings, vaccinations, and wellness programs for businesses, schools, and hotels to ensure employee and client health.",
    icon: Building,
  },
  {
    title: "Postoperative Care",
    description:
      "Home-based support for post-surgery recovery. Our services include wound care, pain management, and follow-up consultations to aid your healing.",
    icon: Bandage,
  },
  {
    title: "Vaccinations",
    description:
      "Comprehensive immunization programs, ensuring community health with convenient, reliable, and expertly administered vaccines at your location.",
    icon: Syringe,
  },
  {
    title: "Medical Escorting",
    description:
      "Personalized support through our Medical Escort service, accompanying patients abroad and assisting them safely to the airport, home, or hospital.",
    icon: UserCog,
  },
  {
    title: "Health Tracking",
    description:
      "Effortless monitoring of key metrics like blood pressure (BP), glucose levels, cholesterol, SPO2, and more, ensuring proactive wellness management.",
    icon: Bed,
  },
];

export const services_fr = [
  {
    title: "Consultations Générales",
    description:
      "Nos services comprennent des contrôles des symptômes, des évaluations de routine et une gestion continue de la santé adaptée à vos besoins.",
    icon: Stethoscope,
  },
  {
    title: "Soins Chroniques",
    description:
      "Gestion complète des maladies chroniques comme le diabète, l'hypertension et l'arthrite. Notre équipe offre un suivi régulier et des plans de soins personnalisés.",
    icon: Activity,
  },
  {
    title: "Visites de Soins Urgents",
    description:
      "Attention médicale immédiate pour les urgences non critiques, directement chez vous. Nos soins urgents évitent les délais hospitaliers et fournissent un traitement rapide et efficace.",
    icon: Bandage,
  },
  {
    title: "Soins Corporatifs",
    description:
      "Dépistages de santé sur site, vaccinations et programmes de bien-être adaptés aux entreprises, écoles et hôtels pour assurer la santé des employés et des clients.",
    icon: Building,
  },
  {
    title: "Soins Médicaux Spécialisés",
    description:
      "Soins de santé spécialisés livrés à domicile. Des cardiologues aux endocrinologues, nous vous connectons avec des experts fournis par nos partenaires.",
    icon: UserCog,
  },
  {
    title: "Soins Postopératoires",
    description:
      "Soutien à domicile pour la récupération post-chirurgicale. Nos services incluent les soins des plaies, la gestion de la douleur et les consultations de suivi.",
    icon: Bed,
  },
  {
    title: "Vaccinations",
    description:
      "Programmes de vaccination complets, assurant la santé communautaire avec des vaccins pratiques, fiables et administrés par des experts à votre emplacement.",
    icon: Syringe,
  },
  // Keeping relevant existing services
  {
    title: "Consultations Familiales",
    description:
      "Accès direct aux réseaux de spécialistes. Nous offrons des soins personnalisés pour tous les membres de la famille.",
    icon: Users,
  },
  {
    title: "Consultations de Santé",
    description:
      "Dépistages précoces et tests pour identifier les problèmes de santé potentiels avant qu'ils ne deviennent graves.",
    icon: Clipboard,
  },
];

export default services;
