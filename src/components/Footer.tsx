// src/components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-yellow-600 text-white py-8 px-4 md:px-6 lg:px-8">
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
      </footer>
    );
  }