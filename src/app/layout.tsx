import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../resources/globals.css";
import "../config/fontawesome";
import { MainMenu } from "../components/Menus/MainMenu";
import { FooterMenu } from "../components/Menus/FooterMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The 7th Lab",
  description: "A Software Development Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans text-Night dark:text-White bg-Zinc dark:bg-Black`}>
        <MainMenu />
        {children}
        <FooterMenu />
      </body>
    </html>
  )
}