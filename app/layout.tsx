import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "System Overview",
  description: "A narrative, read-only showcase of a self-operated distributed system.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
