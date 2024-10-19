// src/components/ServicesSection.tsx
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import ActionButtons from "./ActionButtons";
import services from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="mx-4 mt-32 max-w-screen-xl xl:mx-24 ">
      <div className="grid md:grid-cols-2 lg:grid-cols-[1.3fr,1fr,1fr] gap-8">
        <div className="md:flex md:justify-between md:items-baseline md:col-span-2 lg:col-span-3 w-full">
          <h1 className="text-3xl lg:text-5xl ">Our Services</h1>
          <ActionButtons />
        </div>
        {services.map((service) => (
          <Card key={service.title}>
            <CardContent className="flex items-start p-6">
              <service.icon className="h-8 w-8 text-yellow-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}

        <Image
          src="https://placehold.co/400x400/png"
          alt="placeholder"
          width={400}
          height={400}
          className="rounded-3xl w-full lg:h-[523px] md:col-span-2 lg:col-auto lg:object-cover lg:row-span-2 lg:row-start-2"
        />
      </div>
    </section>
  );
}