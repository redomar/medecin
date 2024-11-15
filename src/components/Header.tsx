// src/components/Header.tsx
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import ImgLogo from "../../public/images/logo.svg";
import NavLinks from "./NavLinks";

export default function Header({
  isPublic,
  setIsPublic,
}: {
  isPublic: boolean;
  setIsPublic: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <header>
      <div className="hidden max-w-full bg-blue-800  px-14 text-white md:px-32 lg:flex">
        <div className="flex w-full items-baseline justify-between px-6 py-6">
          <span>No. 1 Homecare Service in Mauritius</span>
          <span></span>
          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-full bg-blue-700 p-1">
              <button
                className={`px-3 rounded-full py-1 transition-all ${
                  isPublic ? "bg-white text-blue-800" : "text-white"
                }`}
                onClick={() => setIsPublic(true)}
              >
                Public
              </button>
              <button
                className={`px-3 rounded-full py-1 transition-all ${
                  !isPublic ? "bg-white text-blue-800" : "text-white"
                }`}
                onClick={() => setIsPublic(false)}
              >
                Corporate
              </button>
            </div>
          </div>
          <span>Emergency: 193</span>
          <span>Hotline: 86121</span>
        </div>
      </div>
      <div className="sticky top-0 z-50 flex h-[5.265rem] items-center justify-between bg-background px-4 md:mx-32 md:px-6">
        <nav className="hidden font-medium md:flex md:items-center md:gap-5 lg:gap-6">
          <NavLinks part={1} />
        </nav>

        <div className="flex h-full flex-1 items-center justify-center">
          <Image
            src={ImgLogo}
            alt="Home Doctor Logo"
            className="relative mr-10"
          />
        </div>

        <nav className="hidden font-medium md:flex md:items-center md:gap-5 lg:gap-6">
          <NavLinks part={2} />
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
