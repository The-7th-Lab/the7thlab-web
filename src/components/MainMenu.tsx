/*
This is a component for the Menu used in main website navigation.
*/

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

export const MainMenu = () => {
    return (
        <div className="flex items-center justify-between w-full h-[64px]">
            <div className="flex items-center gap-8">
                {/* Logo */}
                <Link 
                    href="/"
                >
                    <Image
                        src="/The7thLab-Logo.svg"
                        alt="The 7th Lab Logo"
                        width={130}
                        height={130}
                        priority
                    />
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center gap-4">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>

            {/* Search and  CTA Button*/}
            <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2 text-sm rounded-[2  px] ring-[#333333] ring-1 px-3 py-2">
                    <Search size={16} />
                    <input type="text" placeholder="Search" className="bg-transparent outline-none" />
                </div>
            </div>
        </div>
    )
}