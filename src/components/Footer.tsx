import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ImgLogo from "../../public/images/MAD.png";
import ActionButtons from "./ActionButtons";
import { navItems } from "./NavLinks";
import { Button } from "./ui/button";

// src/components/Footer.tsx

const policyItems = ["Terms & Conditions", "Privacy Policy", "Licenses"];

const contactInfo = {
  address: "Me",
  email: "contact@doctors.com",
  phone: "(487) 120-7080",
};

// Component
export default function Footer() {
  return (
    <footer className="relative mt-64 block h-full w-full text-white">
      <div className="flex w-full justify-center gap-32 ">
        <div className="relative w-[500px]">
          <div className="absolute -top-24 hidden h-full w-full flex-col justify-between gap-4 rounded-3xl lg:h-60 bg-secondary text-black p-8 lg:flex">
            <span>
              <h1 className="self-start text-4xl font-semibold">
                You stay at home
              </h1>
              <h1 className="self-start text-4xl font-semibold ml-16 mt-2">
                We come to you
              </h1>
            </span>
            <ActionButtons
              variant="bg-secondary-dark text-white"
              toShowSecondButton={false}
            />
          </div>
        </div>
        <div className="relative w-[500px] text-black">
          <div className="absolute -top-24 hidden h-full w-full flex-col justify-between gap-4 rounded-3xl lg:h-60 bg-primary p-8 lg:flex">
            <h2 className="text-3xl font-bold">
              We&apos;re here for you when you need us.
            </h2>
            <span className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link href="/contact">
                <Button
                  variant="secondary"
                  className={`text-md w-full rounded-full bg-yellow-600/85 px-8 py-6 font-extrabold text-white sm:w-auto`}
                >
                  Contact Us
                </Button>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="bg-yellow-950/50 px-4 py-8 md:px-6 xl:px-48 lg:pt-36">
          <div className="flex flex-col gap-12 w-full sm:flex-row *:lg:min-w-52 max-w-screen-xl justify-self-center mt-16">
            <div className="mb-4 md:mb-0 lg:w-full">
              <Link href="/">
                <Image
                  src={ImgLogo}
                  alt="Home Doctor Logo"
                  className="relative mr-10 h-12 w-fit"
                />
              </Link>

              {/* Add social media icons here */}
              <div className="flex gap-4 pt-4">
                <a href="#" className="rounded-full bg-white">
                  <Twitter className="m-2 size-4 text-black" />
                </a>
                <a href="#" className="rounded-full bg-white">
                  <Linkedin className="m-2 size-4 text-black" />
                </a>
                <a href="#" className="rounded-full bg-white">
                  <Facebook className="m-2 size-4 text-black" />
                </a>
              </div>

              <p className="mt-2">Your health, our priority</p>
            </div>
            <div className="flex max-w-40 flex-col gap-6">
              <h3 className="text-lg font-medium uppercase">Menu</h3>
              <div className="flex flex-col items-start gap-1 *:w-full *:py-1 *:text-left">
                {navItems.map(({ id, name, href }) => (
                  <Link key={id} href={href}>
                    <button key={id} onMouseDown={() => href}>
                      {name}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex max-w-40 flex-col gap-6">
              <h3 className="text-lg font-medium uppercase">Policies</h3>
              <ul className="flex flex-col gap-1 *:w-full *:py-1 *:text-left">
                {policyItems.map((policy) => (
                  <li key={policy}>{policy}</li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 flex max-w-40 flex-col gap-6 sm:col-span-1">
              <h3 className="text-lg font-medium uppercase">Contact</h3>
              <ul className="flex flex-col gap-1 *:w-full *:py-1 *:text-left">
                <li>{contactInfo.address}</li>
                <li>{contactInfo.email}</li>
                <li>{contactInfo.phone}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
