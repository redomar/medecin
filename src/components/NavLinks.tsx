// src/components/NavLinks.tsx
import Link from "next/link";

const navItems = [
  { id: 1, name: "Home", href: "/", part: 1 },
  { id: 2, name: "About us", href: "/about", part: 1 },
  { id: 3, name: "Services", href: "/services", part: 1 },
  { id: 4, name: "Doctors", href: "/doctors", part: 2 },
  { id: 5, name: "Contact", href: "/contact", part: 2 },
];

export default function NavLinks({ part = 0 }: { part?: number }) {
  return (
    <>
      {navItems
        .filter((item) => part === 0 || item.part === part)
        .map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {item.name}
          </Link>
        ))}
    </>
  );
}
