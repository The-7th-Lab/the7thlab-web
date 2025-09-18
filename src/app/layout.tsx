import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../resources/globals.css";
import "../config/fontawesome";
import { MainMenu } from "../components/Menus/MainMenu";
import { FooterMenu } from "../components/Menus/FooterMenu";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      <body className={`${poppins.variable} font-sans text-Night dark:text-White`}>
        <MainMenu />
        {children}
        <FooterMenu />
      </body>
    </html>
  )
}