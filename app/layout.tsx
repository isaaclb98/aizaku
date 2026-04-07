import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Isaac — I Build Things That Work",
  description:
    "Portfolio of Isaac Lyons, a recent CS grad specializing in cloud infrastructure and AI tooling.",
  openGraph: {
    title: "Isaac — I Build Things That Work",
    description: "Portfolio of Isaac Lyons",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable}
          ${jetbrainsMono.variable}
          font-sans
          antialiased
          bg-[#FAFAF9]
          text-[#18181B]
          min-h-screen
        `}
      >
        {children}
      </body>
    </html>
  );
}
