// src/components/ActionButtons.tsx
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ActionButtons({
  variant = "bg-secondary text-secondary-dark",
  secondVariant = "",
  toShowSecondButton = true,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-6">
      <Link href="/contact">
        <Button
          variant="secondary"
          className={`text-sm 2xl:text-xl w-full rounded-full px-8 py-6 font-extrabold text-secondary-dark sm:w-auto ${variant}`}
        >
          Book Now
        </Button>
      </Link>
      {toShowSecondButton && (
        <Link href="/services">
          <Button
            variant="ghost"
            noHover={true}
            className={`text-sm 2xl:text-xl rounded-full py-6 px-8 w-full sm:w-auto group ${secondVariant}`}
          >
            Our Services
            <span className="ml-2 p-1 border border-accent rounded-full">
              <ArrowUpRight className="size-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-90 group-hover:border-white" />
            </span>
          </Button>
        </Link>
      )}
    </div>
  );
}
