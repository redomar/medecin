// LogoSection.tsx
import React from "react";
import image001jpg from "../../public/images/company-logos/image-001.jpg";
import image002jpg from "../../public/images/company-logos/image-002.jpg";
import image003jpg from "../../public/images/company-logos/image-003.jpg";
import image004jpg from "../../public/images/company-logos/image-004.jpg";
import image005jpg from "../../public/images/company-logos/image-005.jpg";
import image006jpg from "../../public/images/company-logos/image-006.jpg";
import image001png from "../../public/images/company-logos/image-001.png";
import image002png from "../../public/images/company-logos/image-002.png";
import image003png from "../../public/images/company-logos/image-003.png";
import image004png from "../../public/images/company-logos/image-004.png";
import image005png from "../../public/images/company-logos/image-005.png";
import image006png from "../../public/images/company-logos/image-006.png";
import image007png from "../../public/images/company-logos/image-007.png";
import image008png from "../../public/images/company-logos/image-008.png";
import image009png from "../../public/images/company-logos/image-009.png";
import image010png from "../../public/images/company-logos/image-010.png";
import image011png from "../../public/images/company-logos/image-011.png";
import image001webp from "../../public/images/company-logos/image-001.webp";
import image002webp from "../../public/images/company-logos/image-002.webp";
import Image from "next/image";

export default function LogoSection() {
  const logos = [
    { src: image001jpg, alt: "Ecosia" },
    { src: image002jpg, alt: "Flexible Services Digital" },
    { src: image003jpg, alt: "AVIPRO" },
    { src: image004jpg, alt: "asuri" },
    { src: image005jpg, alt: "cfao" },
    { src: image006jpg, alt: "DCDM Research" },
    { src: image001png, alt: "ABC" },
    { src: image002png, alt: "Constance Belle Mare Plage" },
    { src: image003png, alt: "Europ Assistance" },
    { src: image004png, alt: "FedEx" },
    { src: image005png, alt: "frci" },
    { src: image006png, alt: "IBL Together" },
    { src: image007png, alt: "Jubilee Insurance" },
    { src: image008png, alt: "KFC" },
    { src: image009png, alt: "OASIS" },
    { src: image010png, alt: "CASA FLORIDA" },
    { src: image011png, alt: "Choisy Les Bains" },
    { src: image001webp, alt: "CCA International" },
    { src: image002webp, alt: "Pex" },
  ];

  return (
    <div className="mx-auto relative w-full overflow-hidden">
      {/* Added relative, w-full, and overflow-hidden */}
      <div
        className="group flex overflow-hidden gap-10 w-full" /* Simplified and added w-full */
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, transparent 100%)",
        }}
      >
        {/* First set of logos */}
        <div>
          <div className="flex justify-around shrink-0 animate-marquee-left marquee-flex-row group-hover:[animation-play-state:paused] gap-[5rem]">
            {logos.map((logo, index) => (
              <div key={index}>
                <div className="flex items-center text-xl md:text-2xl font-medium whitespace-nowrap">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    className="h-10 w-full"
                    width={40}
                    height={40}
                  />
                  <span className="ml-6">Company Name</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Duplicate set for continuous scroll */}
        <div>
          <div className="flex justify-around shrink-0 animate-marquee-left marquee-flex-row group-hover:[animation-play-state:paused] gap-[5rem]">
            {logos.map((logo, index) => (
              <div key={`duplicate-${index}`}>
                <div className="flex items-center text-xl md:text-2xl font-medium whitespace-nowrap">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    className="h-10"
                    width={40}
                    height={40}
                  />
                  <span className="ml-6">Company Name</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
