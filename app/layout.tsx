import type { Metadata } from "next";
import { Lobster, Montserrat } from "next/font/google";
import "./globals.css";

const lobster = Lobster({
  variable: "--font-lobster",
  weight: ["400"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Networq",
  description: "A video calling app built with Next.js, ZegoCloud, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lobster.variable} dark ${montserrat.variable} px-8 bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
