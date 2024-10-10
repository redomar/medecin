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

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-red-50">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 md:ml-40">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Hospital className="h-6 w-6" />
            <span className="sr-only">Medecin</span>
          </Link>
          <NavLinks />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
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
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative"></div>
          </form>
        </div>
      </header>
      <main className="flex-1">
        <div className="grid grid-cols-[0.8fr_1fr] gap-6  p-4 md:p-6 lg:p-8">
          <div className="flex flex-col gap-3 pt-24 max-w-lg">
            <h1 className="text-6xl font-bold">
              A doctor who is with you always – every day.
            </h1>
            <p className="text-lg text-muted-foreground">
              A doctor who is with you always – every day. Available wherever
              you are and without the hassle of the waiting room. Experienced
              doctors come to you with their kit
            </p>
            <div className="flex gap-4 mt-6">
              <Button size="lg" variant={"default"}>
                Book an appointment
              </Button>
              <Button size="lg" variant={"outline"}>
                Learn more
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="https://placehold.co/615x680/png"
              alt="placeholder"
              width={615}
              height={680}
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="w-full h-28 bg-indigo-500 mt-8">
          <div className="flex flex-row gap-8 items-center content-center justify-center h-full">
            <div className="flex flex-row gap-2">
              <Image
                src="https://placehold.co/24x24/png"
                alt="placeholder"
                width={24}
                height={24}
                />
                <div className="font-bold">Company A</div>
            </div>
            <div className="flex flex-row gap-2">
              <Image
                src="https://placehold.co/24x24/png"
                alt="placeholder"
                width={24}
                height={24}
                />
                <div className="font-bold">Company B</div>
            </div>
            <div className="flex flex-row gap-2">
              <Image
                src="https://placehold.co/24x24/png"
                alt="placeholder"
                width={24}
                height={24}
                />
                <div className="font-bold">Company C</div>
            </div>
          </div>
        </div>
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3  p-4 md:p-6 lg:p-8">
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            <div className="flex flex-col gap-4 md:gap-6">
              <h2 className="text-2xl font-bold">
                <span className="text-foreground">
                  <span className="text-muted-foreground">
                    <span className="text-muted-foreground">Welcome to</span>{" "}
                  </span>
                  Medecin
                </span>
              </h2>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                molestie, neque non scelerisque ultricies, nisl nisi aliquet
                lorem, sed gravida nisl nunc non metus. Sed eget urna eget
                tortor pharetra ultrices. Sed euismod, nisl quis commodo
                ultricies, nisi nisl pretium nisi, ut venenatis nisl neque sit
                amet nisl. Sed euismod, nisl quis commodo ultricies, nisi nisl
                pretium nisi, ut venenatis nisl neque sit amet nisl.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            <div className="flex flex-col gap-4 md:gap-6">
              <h2 className="text-2xl font-bold">
                <span className="text-foreground">
                  <span className="text-muted-foreground">
                    <span className="text-muted-foreground">
                      What is Medecin?
                    </span>{" "}
                  </span>
                </span>
              </h2>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                molestie, neque non scelerisque ultricies, nisl nisi aliquet
                lorem, sed gravida nisl nunc non metus. Sed eget urna eget
                tortor pharetra ultrices. Sed euismod, nisl quis commodo
                ultricies, nisi nisl pretium nisi, ut venenatis nisl neque sit
                amet nisl. Sed euismod, nisl quis commodo ultricies, nisi nisl
                pretium nisi, ut venenatis nisl neque sit amet nisl.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
