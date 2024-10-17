import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowUpRight, Hospital, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NavLinks = () => (
  <>
    <Link
      href="#"
      className="text-foreground transition-colors hover:text-foreground"
    >
      Home
    </Link>
    <Link
      href="#"
      className="text-muted-foreground transition-colors hover:text-foreground"
    >
      Appointments
    </Link>
    <Link
      href="#"
      className="text-muted-foreground transition-colors hover:text-foreground"
    >
      Services
    </Link>
    <Link
      href="#"
      className="text-muted-foreground transition-colors hover:text-foreground"
    >
      Doctors
    </Link>
    <Link
      href="#"
      className="text-muted-foreground transition-colors hover:text-foreground"
    >
      Health
    </Link>
    <Link
      href="#"
      className="text-muted-foreground transition-colors hover:text-foreground"
    >
      Contact
    </Link>
  </>
);

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Activity,
  Calendar,
  Stethoscope,
  Clipboard,
  Heart,
  Users,
  Home,
  Globe,
  CalendarCheck,
  Briefcase,
  Phone,
  UserPlus,
} from "lucide-react";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 flex h-16 items-center justify-between  bg-background px-4 md:px-6">
        <div className="flex items-center justify-center flex-1">
          <Hospital className="h-6 w-6 mr-2" />
          <span className="text-lg font-bold">Médecin À Domicile</span>
        </div>

        <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6">
          <NavLinks />
        </nav>

        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Hospital className="h-6 w-6" />
                  <span className="sr-only">Medecin</span>
                </Link>
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-grow">
        <section className="mx-64 py-12 px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0  max-w-[500px]">
            <h1 className=" text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              Personalised Care with Professional Support
            </h1>
            <p className="  text-gray-600 mb-6">
              Experience comprehensive and compassionate healthcare at Medecin
              Clinic. Our team of expert GPs is dedicated to your well-being.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <Button className="bg-yellow-600 py-6 hover:bg-yellow-700 text-white font-extrabold text-lg rounded-full">
                Book now
              </Button>
              <Button
                variant="ghost"
                className="md:ml-4 py-6 text-yellow-600 hover:bg-yellow-50  tracking-tight text-lg rounded-full"
              >
                Our Services
                <ArrowUpRight className="h-7 w-7 p-1 border rounded-full ml-4" />
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://placehold.co/400x400/png"
              alt="placeholder"
              width={400}
              height={400}
              className="rounded-3xl"
            />
          </div>
        </section>

        {/* <section className="bg-gray-100 py-12 px-4 md:px-6 lg:px-8">
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
        </section> */}

        <section className="bg-gray-100 py-12 px-4 md:px-6 lg:px-8">
          <div className="mx-64">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            We're Here for You, Whenever and Wherever You Need Us
          </h2>
          <p className="text-xl text-center text-gray-600 mb-8">
            Our commitment to your health extends beyond our clinic walls. Here
            are some of the ways we can assist you:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Home className="h-12 w-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Home Visit Family Doctor
                </h3>
                <p className="text-center text-gray-600">
                  Receive quality care in the comfort of your own home.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Globe className="h-12 w-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Hotel Multilingual Doctor
                </h3>
                <p className="text-center text-gray-600">
                  Medical assistance for travelers in multiple languages.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <CalendarCheck className="h-12 w-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Monthly Check-up</h3>
                <p className="text-center text-gray-600">
                  Regular health monitoring to keep you at your best.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Briefcase className="h-12 w-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Company/Corporate Doctors
                </h3>
                <p className="text-center text-gray-600">
                  Tailored healthcare solutions for businesses and their
                  employees.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Phone className="h-12 w-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Remote Medical Advice
                </h3>
                <p className="text-center text-gray-600">
                  Expert medical consultation via phone or video call.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <UserPlus className="h-12 w-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Medical Escort</h3>
                <p className="text-center text-gray-600">
                  Professional medical accompaniment for your travel needs.
                </p>
              </CardContent>
            </Card>
          </div>
          </div>
        </section>

        <section className="py-12 px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="flex items-start p-6">
                <Heart className="h-8 w-8 text-yellow-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    General Check-ups
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive health assessments and preventive care to keep
                    you in optimal health.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-start p-6">
                <Users className="h-8 w-8 text-yellow-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Family Medicine
                  </h3>
                  <p className="text-gray-600">
                    Personalized care for all family members, from infants to
                    elderly, addressing a wide range of health concerns.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-start p-6">
                <Activity className="h-8 w-8 text-yellow-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Chronic Disease Management
                  </h3>
                  <p className="text-gray-600">
                    Ongoing care and support for managing long-term health
                    conditions such as diabetes, hypertension, and asthma.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-start p-6">
                <Clipboard className="h-8 w-8 text-yellow-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Health Screenings
                  </h3>
                  <p className="text-gray-600">
                    Early detection screenings and tests to identify potential
                    health issues before they become serious.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
              Book Appointment
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-yellow-600 text-white py-8 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold">Medecin Clinic</span>
            <p className="mt-2">Your health, our priority</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Services
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
