import type { Metadata } from "next";
import { Playfair_Display, Cinzel, Great_Vibes } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import FloatingHearts from "@/components/FloatingHearts";
import GlobalAudio from "@/components/GlobalAudio";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const vibes = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-vibes" });

export const metadata: Metadata = {
  title: "A Valentine in the Dark",
  description: "A dark romantic Valentine.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${cinzel.variable} ${vibes.variable}`}>
      <body>
        <FloatingHearts />
        <Nav />
        <GlobalAudio />
        {children}
      </body>
    </html>
  );
}
