import ActionButtons from "./ActionButtons";
import { Button } from "./ui/button";

// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="relative block h-full w-full pt-10 text-white">
      <div className="flex w-full justify-center gap-32 lg:h-60">
        <div className="relative w-[500px]">
          <div className="absolute top-32 hidden h-full w-full flex-col justify-between gap-4 rounded-3xl bg-blue-800 p-8 lg:flex">
            <span>
              {" "}
              <h1 className="self-start text-3xl font-semibold">
                You stay at home
              </h1>
              <h1 className="self-start text-3xl font-semibold ml-16 mt-2">
                We come to you
              </h1>
            </span>
            <ActionButtons variant="" />
          </div>
        </div>
        <div className="relative w-[500px] text-black">
          <div className="absolute top-32 hidden h-full w-full flex-col justify-between gap-4 rounded-3xl bg-blue-400 p-8 lg:flex">
            <h2 className="text-3xl font-bold">
              We’re here for you when you need us.
            </h2>
            <span className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button
              variant="secondary"
              className={`text-md w-full rounded-full bg-blue-800/85 px-8 py-6 font-extrabold text-white sm:w-auto`}
            >
              Contact Us
            </Button>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="bg-blue-950/50 px-4 py-8 md:px-6 lg:px-48 lg:pt-36">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold">Medecin Clinic</span>
              <p className="mt-2">Your health, our priority</p>
            </div>
            <nav className="flex flex-wrap justify-center gap-4">
              <a href="#" className="hover:underline">
                Home
              </a>
              <a href="#" className="hover:underline">
                About
              </a>
              <a href="#" className="hover:underline">
                Services
              </a>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
