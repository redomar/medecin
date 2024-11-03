// src/data/services.ts
import { Heart, Users, Activity, Clipboard } from "lucide-react";

const services = [
  {
    title: "General Check-ups",
    description:
      "Comprehensive health assessments and preventive care to keep you in optimal health.",
    icon: Heart,
  },
  {
    title: "Family Medicine",
    description:
      "Personalized care for all family members, from infants to elderly, addressing a wide range of health concerns.",
    icon: Users,
  },
  {
    title: "Chronic Disease Management",
    description:
      "Ongoing care and support for managing long-term health conditions such as diabetes, hypertension, and asthma.",
    icon: Activity,
  },
  {
    title: "Health Screenings",
    description:
      "Early detection screenings and tests to identify potential health issues before they become serious.",
    icon: Clipboard,
  },
];

export const services_fr = [
  {
    title: "Consultations Générales",
    description:
      "Comprehensive health assessments and preventive care to keep you in optimal health.",
    icon: Heart,
  },
  {
    title: "Consultations Familiales",
    description:
      "Direct access to specialist networks. We offer personalized care for all family members, from infants to elderly, addressing a wide range of health concerns.",
    icon: Users,
  },
  {
    title: "Consultations Chroniques",
    description:
      "Ongoing care and support for managing long-term conditions such as diabetes, hypertension, and asthma.",
    icon: Activity,
  },
  {
    title: "Consultations de Santé",
    description:
      "Early detection screenings and tests to identify potential health issues before they become serious.",
    icon: Clipboard,
  },
];

export default services;
