// src/components/NavLinks.tsx
import Link from "next/link";

export default function NavLinks() {
  return (
    <>
      <Link
        href="/"
        className="text-foreground transition-colors hover:text-foreground"
      >
        Home
      </Link>
      <Link
        href="/doctors"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Doctors
      </Link>
      <Link
        href="/services"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Services
      </Link>
      <Link
        href="#"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Appointments
      </Link>
      <Link
        href="#"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Health
      </Link>
      <Link
        href="#"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Contact
      </Link>
    </>
  );
}