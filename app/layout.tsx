import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingWidget from "@/components/FloatingWidget";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elite Business Solutions | Professional Services",
  description: "Transform your business with our premium professional services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <FloatingWidget />
      </body>
    </html>
  );
}
