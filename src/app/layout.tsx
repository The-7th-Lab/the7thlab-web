import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../resources/globals.css";
import "../config/fontawesome";
import { MainMenu } from "../components/MainMenu";

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
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans text-Night dark:text-White bg-mainBackground dark:bg-darkBackground`}>
        <div className="w-full flex justify-center border-[#333333] border-b-[0.5px]">
          <div className="w-full max-w-[1400px] px-4">
            <MainMenu />
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}