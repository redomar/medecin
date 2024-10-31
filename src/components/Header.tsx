// src/components/Header.tsx
"use client";

import { Hospital, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavLinks from "./NavLinks";
import { useState } from "react";

export default function Header() {
  const [isPublic, setIsPublic] = useState(true);

  return (
    <header>
      <div className="bg-blue-800 w-full justify-between px-14 py-6 hidden lg:flex text-white">
        <span>No. 1 Homecare Service in Mauritius</span>
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-blue-700 rounded-full p-1">
            <button
              className={`px-3 py-1 rounded-full transition-all ${
                isPublic ? 'bg-white text-blue-800' : 'text-white'
              }`}
              onClick={() => setIsPublic(true)}
            >
              Public
            </button>
            <button
              className={`px-3 py-1 rounded-full transition-all ${
                !isPublic ? 'bg-white text-blue-800' : 'text-white'
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
      <div className="sticky top-0 z-50 flex h-[5.265rem] items-center justify-between bg-background px-4 md:px-6">
        {/* Rest of the component remains the same */}
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
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}