/*
This is a component for the Menu used in main website navigation.
*/

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faChevronDown, 
    faArrowUpRightFromSquare, 
    faMagnifyingGlass 
} from '../config/fontawesome';

interface DropdownItem {
    title: string;
    description: string;
    href: string;
    external?: boolean;
}

interface DropdownMenu {
    title: string;
    items: DropdownItem[];
}

const dropdownMenus: DropdownMenu[] = [
    {
        title: "Projects",
        items: [
            {
                title: "Web Development",
                description: "Modern web applications and sites",
                href: "/projects/web"
            },
            {
                title: "Mobile Apps",
                description: "iOS and Android applications",
                href: "/projects/mobile"
            },
            {
                title: "AI & ML",
                description: "Machine learning and AI solutions",
                href: "/projects/ai"
            },
            {
                title: "View All Projects",
                description: "See our complete portfolio",
                href: "/projects",
                external: true
            }
        ]
    },
    {
        title: "Blog",
        items: [
            {
                title: "Latest Posts",
                description: "Recent articles and insights",
                href: "/blog"
            },
            {
                title: "Tech Insights",
                description: "Technology trends and analysis",
                href: "/blog/tech"
            },
            {
                title: "Case Studies",
                description: "Real-world project stories",
                href: "/blog/case-studies"
            },
            {
                title: "Newsletter",
                description: "Stay updated with our insights",
                href: "/newsletter"
            }
        ]
    },
    {
        title: "Resources",
        items: [
            {
                title: "Getting Started",
                description: "Quick start guide for developers",
                href: "/resources/getting-started"
            },
            {
                title: "API Reference",
                description: "Complete API documentation",
                href: "/resources/api"
            },
            {
                title: "Tutorials",
                description: "Step-by-step guides",
                href: "/resources/tutorials"
            },
            {
                title: "Examples",
                description: "Code examples and snippets",
                href: "/resources/examples"
            }
        ]
    }
];

export const MainMenu = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    return (
        <div className="flex items-center justify-center h-[64px] backdrop-blur-md border-[#333333] border-b-[0.5px]">
            <div className="flex items-center justify-between w-full max-w-[1400px] px-6">
                <div className="flex items-center gap-8">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/The7thLab-Logo.png"
                        alt="The 7th Lab Logo"
                        width={130}
                        height={130}
                        priority
                        className="h-8 w-auto"
                    />
                </Link>

                {/* Navigation Links with Dropdowns */}
                <nav className="flex items-center gap-1">
                    <Link 
                        href="/about" 
                        className="px-3 py-2 text-sm font-medium text-[#A1A1A1] hover:text-White hover:bg-mainBackground dark:hover:bg-[#333333] rounded-[3px] transition-colors duration-200"
                    >
                        About
                    </Link>
                    {dropdownMenus.map((menu) => (
                        <div 
                            key={menu.title} 
                            className="relative" 
                            ref={(el) => { dropdownRefs.current[menu.title] = el; }}
                            onMouseEnter={() => setActiveDropdown(menu.title)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button
                                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#A1A1A1] hover:text-White hover:bg-mainBackground dark:hover:bg-[#333333] rounded-[3px] transition-colors duration-200"
                            >
                                {menu.title}
                                <FontAwesomeIcon 
                                    icon={faChevronDown}
                                    size="xs"
                                    className={`transition-transform duration-200 ${
                                        activeDropdown === menu.title ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>

                            {/* Dropdown Menu */}
                            {activeDropdown === menu.title && (
                                <div className="absolute top-full left-0 mt-1 w-80 rounded-[3px] shadow-lg border-[0.25px] border-[#333333] bg-mainBackground dark:bg-foreBackground py-2 z-50 animate-in slide-in-from-top-2 duration-300">
                                    <div className="py-2">
                                        {menu.items.map((item, index) => (
                                            <Link
                                                key={index}
                                                href={item.href}
                                                className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-300 group"

                                            >
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-medium group-hover:text-gray-700 dark:group-hover:text-gray-700">
                                                            {item.title}
                                                        </span>
                                                        {item.external && (
                                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-gray-400 text-sm" />
                                                        )}
                                                    </div>
                                                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>

            {/* Search and CTA Button */}
            <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2 text-sm rounded-[2px] ring-1 ring-[#a1a1a1] px-3 py-2 hover:ring-Vermilion 
                transition-all duration-200 focus-within:ring-2 focus-within:ring-Vermilion">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[#a1a1a1] text-sm" />
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="bg-transparent outline-none text-White placeholder-[#a1a1a1] w-48"
                    />
                </div>
                
                <Link
                    href="/learn"
                    className="hidden md:inline-flex items-center px-4 py-2 text-sm text-[#a1a1a1] hover:text-White bg-transparent border-[0.5px] border-[#a1a1a1] hover:bg-[#333333] rounded-[3px] transition-colors duration-200"
                >
                    Learn
                </Link>
            </div>
        </div>
    </div>
    );
};