import ActionButtons from "./ActionButtons";

// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className=" text-white w-full h-full block pt-10 relative">
      <div className=" h-60 flex w-full justify-center gap-32">
        <div className=" w-[500px] relative">
          <div className="bg-blue-800 w-full h-full absolute top-32 rounded-3xl flex flex-col gap-4 content-center items-start pl-12 justify-center">
            <h1 className="text-3xl font-bold self-start">Call us today</h1>
            <p className="text-lg text-gray-50/80 self-start">0121-1234-5678</p>
            <ActionButtons variant="" />
          </div>
        </div>
        <div className=" w-[500px] relative text-black">
          <div className="bg-blue-400 w-full h-full absolute top-32 rounded-3xl flex flex-col gap-4 p-8">
            <h2 className="text-3xl font-bold">Newsletter</h2>
            <p className="text-gray-950/80">
              Stay updated with our latest health tips and news
            </p>
            <form className="flex gap-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg text-gray-800 flex-1"
              />
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800/95 px-6 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="bg-blue-950/50 pt-32  py-8 px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
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
