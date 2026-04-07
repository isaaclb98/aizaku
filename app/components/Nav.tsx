"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#rhizome", label: "Rhizome" },
  { href: "#projects", label: "Projects" },
  { href: "#cluster", label: "Cluster" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        h-16 px-10
        flex items-center justify-between
        transition-all duration-200
        ${
          scrolled
            ? "backdrop-blur-md border-b border-[#E4E4E7] bg-[#FAFAF9]/80"
            : "bg-transparent"
        }
      `}
    >
      <a
        href="#"
        className="font-semibold text-[#18181B] no-underline text-base tracking-tight"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Isaac
      </a>

      <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm text-[#71717A] no-underline transition-colors hover:text-[#C45D35]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="
          hidden md:block
          text-xs text-[#71717A]
          border border-[#E4E4E7] rounded
          px-3 py-1.5
          cursor-pointer
          transition-all hover:border-[#71717A] hover:text-[#18181B]
          bg-transparent
        "
        onClick={() => {
          /* light-only v1 */
        }}
      >
        Dark mode
      </button>
    </nav>
  );
}
