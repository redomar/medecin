import ActionButtons from "./ActionButtons";
import { Button } from "./ui/button";
import ImgLogo from "../../public/images/MAD.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

// src/components/Footer.tsx
// Data
const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact Us" },
];

const policyItems = ["Terms & Conditions", "Privacy Policy", "Licenses"];

const contactInfo = {
  address: "Me",
  email: "contact@doctors.com",
  phone: "(487) 120-7080",
};

const navLinks = ["Home", "About", "Services", "Contact"];

// Component
export default function Footer() {
  const router = useRouter();

  const handleNavigate = (id: string) => {
    router.replace(`/${id}`);
  };

  return (
    <footer className="relative block h-full w-full text-white mt-32">
      <div className="flex w-full justify-center gap-32 ">
        <div className="relative w-[500px] ">
          <div className="absolute -top-24 hidden h-full w-full flex-col justify-between gap-4 rounded-3xl lg:h-60 bg-blue-800 p-8 lg:flex">
            <span>
              <h1 className="self-start text-4xl font-semibold">
                You stay at home
              </h1>
              <h1 className="self-start text-4xl font-semibold ml-16 mt-2">
                We come to you
              </h1>
            </span>
            <ActionButtons variant="" toShowSecondButton={false} />
          </div>
        </div>
        <div className="relative w-[500px] text-black">
          <div className="absolute -top-24 hidden h-full w-full flex-col justify-between gap-4 rounded-3xl lg:h-60 bg-blue-400 p-8 lg:flex">
            <h2 className="text-3xl font-bold">
              We're here for you when you need us.
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
        <div className="bg-blue-950/50 px-4 py-8 md:px-6 xl:px-48 lg:pt-36">
          <div className="flex flex-col gap-12 w-full sm:flex-row *:lg:min-w-52 max-w-screen-xl justify-self-center mt-16">
            <div className="mb-4 md:mb-0 lg:w-full">
              <Image
                src={ImgLogo}
                alt="Home Doctor Logo"
                className="relative mr-10 h-12 w-fit hue-rotate-[-160deg] brightness-90"
              />
              <p className="mt-2">Your health, our priority</p>
            </div>
            <div className="flex max-w-40 flex-col gap-6">
              <h3 className="text-lg font-medium uppercase">Menu</h3>
              <div className="flex flex-col items-start gap-1 *:w-full *:py-1 *:text-left">
                {menuItems.map(({ id, label }) => (
                  <button key={id} onMouseDown={() => handleNavigate(id)}>
                    {label}
                  </button>
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
