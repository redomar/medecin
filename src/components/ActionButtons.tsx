// src/components/ActionButtons.tsx
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ActionButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-6">
      <Button className="font-extrabold text-md rounded-full py-6 px-8 w-full sm:w-auto">
        Book Now
      </Button>
      <Button variant="ghost" className="text-md rounded-full py-6 px-8 w-full sm:w-auto">
        Our Services
        <ArrowUpRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
}