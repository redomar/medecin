import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Activity,
  ArrowUpRight,
  Briefcase,
  CalendarCheck,
  Clipboard,
  Globe,
  Heart,
  Home,
  Hospital,
  Menu,
  Phone,
  UserPlus,
  Users,
} from "lucide-react";
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

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 flex h-[5.265rem] items-center justify-between  bg-background px-4 md:px-6">
        <div className="flex items-center justify-left flex-1">
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
                <Menu className="h-7 w-7" />
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

      <main className="flex-grow md:flex md:justify-center">
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 mx-4 mt-5 max-w-screen-xl xl:mx-24">
          <div className="bg-yellow-500 text-black py-8 px-6 md:p-10 flex flex-col gap-8 rounded-3xl lg:h-[756px] xl:h-[666px] lg:justify-center">
            <h1 className=" text-3xl md:text-5xl lg:text-6xl lg:mb-3 font-bold">
              Personalised Care with Professional Support
            </h1>
            <p className="lg:text-lg">
              Experience comprehensive and compassionate healthcare at Medecin
              Clinic. Our team of expert GPs is dedicated to your well-being.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <Button className="font-extrabold text-md rounded-full p-5 md:p-6">
                Book Now
              </Button>
              <Button variant="ghost" className="md:ml-4 text-md rounded-full p-5">
                Our Services
                <ArrowUpRight />
              </Button>
            </div>
          </div>
          <Image
            src="https://placehold.co/400x400/png"
            alt="placeholder"
            width={400}
            height={400}
            className="rounded-3xl w-full lg:h-[756px] xl:h-[666px] lg:object-cover"
          />
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
