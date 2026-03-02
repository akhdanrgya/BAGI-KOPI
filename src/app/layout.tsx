import type { Metadata } from "next";
import { DM_Sans, Open_Sans, Manrope } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InitialLoader } from "@/components/InitialLoader";

export const metadata: Metadata = {
  title: "Bagi Kopi | MVP",
  description: "A premium coffee experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${openSans.variable} ${manrope.variable} font-manrope antialiased`}
      >
        <InitialLoader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
