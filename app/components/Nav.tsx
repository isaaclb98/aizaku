"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#rhizome", label: "Rhizome" },
  { href: "#projects", label: "Projects" },
  { href: "#cluster", label: "Cluster" },
  { href: "#contact", label: "Contact" },
];

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme") as "light" | "dark" | null;
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  }

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        h-16 px-10
        flex items-center justify-between
        transition-all duration-200
        ${
          scrolled
            ? "backdrop-blur-md border-b border-[var(--border)] bg-[var(--bg)]/80"
            : "bg-transparent"
        }
      `}
    >
      <a
        href="#"
        className="font-semibold text-[var(--text)] no-underline text-base tracking-tight"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Isaac
      </a>

      <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm text-[var(--text-muted)] no-underline transition-colors hover:text-[var(--accent)]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="
          hidden md:block
          text-xs
          border border-[var(--border)]
          rounded
          px-3 py-1.5
          cursor-pointer
          transition-all
          hover:border-[var(--accent)]
          bg-transparent
        "
        style={{ color: "var(--text-muted)" }}
        onClick={toggleTheme}
      >
        {theme === "dark" ? "Light mode" : "Dark mode"}
      </button>
    </nav>
  );
}
