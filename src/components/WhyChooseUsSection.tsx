// src/components/WhyChooseUsSection.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Calendar, Clipboard } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section className="mx-4 mt-32 max-w-screen-xl xl:mx-24">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
        Why Choose Medecin Clinic?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <Card>
          <CardContent className="flex flex-col items-center p-6">
            <Stethoscope className="h-12 w-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert GPs</h3>
            <p className="text-center text-gray-600">
              Our team consists of highly qualified and experienced general
              practitioners.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center p-6">
            <Calendar className="h-12 w-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
            <p className="text-center text-gray-600">
              Book your appointments online or by phone at your convenience.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center p-6">
            <Clipboard className="h-12 w-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Comprehensive Care
            </h3>
            <p className="text-center text-gray-600">
              From preventive care to managing chronic conditions, we
              provide full medical support.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}