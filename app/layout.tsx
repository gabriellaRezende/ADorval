import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-serif",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ana Paula Dorval — Massoterapeuta Lisboa",
  description:
    "Massoterapeuta em Lisboa com formação como Auxiliar Técnica de Fisioterapia. Massagem desportiva, terapêutica, drenagem linfática e mais. Agenda a tua sessão.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className={`${cormorant.variable} ${raleway.variable}`}>
      <body className="bg-creme text-noite">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
