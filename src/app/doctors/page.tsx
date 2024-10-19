// src/app/doctors/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const doctors = [
  {
    name: "Dr. Emily Johnson",
    specialty: "General Practice",
    image: "https://placehold.co/200x200/png",
    bio: "Dr. Johnson has over 15 years of experience in family medicine and is passionate about preventive care.",
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Pediatrics",
    image: "https://placehold.co/200x200/png",
    bio: "Dr. Chen specializes in pediatric care and has a particular interest in childhood development and nutrition.",
  },
  {
    name: "Dr. Sarah Patel",
    specialty: "Internal Medicine",
    image: "https://placehold.co/200x200/png",
    bio: "Dr. Patel is an expert in managing chronic conditions and promoting overall wellness in adults.",
  },
  {
    name: "Dr. David Kim",
    specialty: "Geriatrics",
    image: "https://placehold.co/200x200/png",
    bio: "Dr. Kim focuses on providing compassionate care for older adults and managing age-related health concerns.",
  },
];

export default function DoctorsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Our Doctors</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <Card key={doctor.name}>
              <CardContent className="p-6">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{doctor.name}</h2>
                <h3 className="text-lg text-gray-600 mb-2">{doctor.specialty}</h3>
                <p className="text-gray-700">{doctor.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}