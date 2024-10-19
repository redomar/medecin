// src/components/Header.tsx
import { Hospital, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
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
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}