import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ana Paula Dorval — Terapeuta",
  description: "Descrição breve da profissional e seus serviços",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-white text-gray-800`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}