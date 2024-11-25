// src/components/Header.tsx
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import ImgLogo from "../../public/images/MAD.png";
import NavLinks from "./NavLinks";
import Link from "next/link";

export default function Header({
  isPublic,
  setIsPublic,
}: {
  isPublic: boolean;
  setIsPublic: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <header>
      <div className="hidden max-w-full bg-[#ffd07e] px-14 text-black md:px-32 lg:flex">
        <div className="flex w-full items-baseline justify-between px-6 py-6 *:min-w-64">
          <div>No. 1 Homecare Service in Mauritius</div>
          <div className="flex justify-center w-full">
            <div className=" rounded-full self-center bg-[#ffdd9a] p-1 w-fit ">
              <button
                className={`rounded-full px-3 py-1 text-sm transition-all ${
                  isPublic ? "bg-white text-yellow-800" : "text-black"
                }`}
                onClick={() => setIsPublic(true)}
              >
                Public
              </button>
              <button
                className={`rounded-full px-3 py-1 text-sm transition-all ${
                  !isPublic ? "bg-white text-yellow-800" : "text-black"
                }`}
                onClick={() => setIsPublic(false)}
              >
                Corporate
              </button>
            </div>
          </div>
          <div className="text-right">
            Emergency: <Link href="tel:193">193</Link>
          </div>
        </div>
      </div>
      <div className="sticky top-0 z-50 flex h-[5.265rem] items-center justify-between px-4 md:mx-32 md:mb-5 md:mt-3 md:px-6">
        <Link href="/" className="flex h-full  items-center ">
          <Image
            src={ImgLogo}
            onMouseDown={() => {
              // navigate to home page
            }}
            alt="Home Doctor Logo"
            className="relative mr-10 h-16 w-fit"
          />
        </Link>
        <nav className="hidden font-medium md:flex md:items-center md:gap-5 lg:gap-6 justify-center md:-ml-24">
          <NavLinks part={1} />
          <NavLinks part={2} />
        </nav>

        <nav className="hidden font-medium md:flex md:items-center md:gap-5 lg:gap-6">
          <span className="px-8 py-3 bg-secondary text-black font-semibold 2xl:font-bold rounded-full cursor-pointer text-lg shadow-md hover:translate-y-1">
            Hotline: <Link href="tel:86121">86121</Link>
          </span>
        </nav>

        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0">
                <Menu className="size-7" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top">
              <nav className="grid gap-6 text-lg font-medium">
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
