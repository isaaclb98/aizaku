import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isaac's Site",
  description: "Isaac's Cool Website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="
          relative min-h-screen
          bg-[#0b0d12]
          text-white
          antialiased
        "
      >
        {/* Linear-style ambient light */}
        <div
          aria-hidden
          className="
            pointer-events-none fixed inset-0
            bg-[radial-gradient(140%_120%_at_50%_30%,rgba(120,120,255,0.10),transparent_70%)]
          "
        />

        {/* Soft vignette */}
        <div
          aria-hidden
          className="
            pointer-events-none fixed inset-0
            shadow-[inset_0_0_400px_rgba(0,0,0,0.55)]
          "
        />

        {children}
      </body>
    </html>
  );
}
