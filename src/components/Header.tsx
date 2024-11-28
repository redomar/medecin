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
      <div className="hidden max-w-full bg-[#ffd07e] px-8 text-black lg:flex xl:px-32">
        <div className="relative mx-auto flex w-full max-w-screen-xl items-center justify-center py-6">
          <div className="absolute left-0">
            No. 1 Homecare Service in Mauritius
          </div>
          <div className="w-fit self-center rounded-full bg-[#ffdd9a] p-1">
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

          {/* Right-aligned text */}
          <div className="absolute right-0 mr-8">
            Emergency: <Link href="tel:193">193</Link>
          </div>
        </div>
      </div>

      <div className="mb-12 hidden max-w-full px-8 pt-4 text-black lg:flex xl:px-32">
        <div className="relative mx-auto flex w-full max-w-screen-xl items-center py-6">
          {/* Left-aligned logo */}
          <div className="absolute left-0 flex-shrink-0">
            <Link href="/" className="flex h-full items-center">
              <Image
                src={ImgLogo}
                onMouseDown={() => {
                  // navigate to home page
                }}
                alt="Home Doctor Logo"
                className="relative h-12 w-fit xl:h-16"
              />
            </Link>
          </div>

          {/* Centre-aligned navigation */}
          <nav className="flex flex-grow justify-center font-medium md:items-center md:gap-5 lg:flex lg:gap-6">
            <NavLinks part={1} />
            <NavLinks part={2} />
          </nav>

          {/* Right-aligned hotline */}
          <div className="absolute right-0 flex-shrink-0">
            <nav className="hidden justify-end font-medium md:items-center md:gap-5 lg:flex lg:gap-6">
              <span className="cursor-pointer rounded-full bg-secondary px-8 py-3 text-lg font-semibold text-black shadow hover:bg-secondary/60 2xl:font-bold">
                Hotline: <Link href="tel:86121">86121</Link>
              </span>
            </nav>
          </div>
        </div>
      </div>

      <div className="relative mb-12 mt-4 flex w-full items-center justify-between px-12 pt-4 lg:hidden">
        <Link href="/" className="flex h-full items-center">
          <Image
            src={ImgLogo}
            onMouseDown={() => {
              // navigate to home page
            }}
            alt="Home Doctor Logo"
            className="relative h-14 w-fit self-start"
          />
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0">
              <Menu className="size-8" />
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
    </header>
  );
}
