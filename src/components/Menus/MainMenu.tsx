/*
This is a component for the Menu used in main website navigation.
*/

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    faChevronDown, 
    faArrowUpRightFromSquare, 
    faMagnifyingGlass,
    faCode,
    faMobile,
    faBrain,
    faEye,
    faNewspaper,
    faChartLine,
    faFileText,
    faBookOpen,
    faRocket,
    faBook,
    faCodeBranch,
    faGraduationCap,
    faLightbulb
} from '../../config/fontawesome';

interface DropdownItem {
    title: string;
    description: string;
    href: string;
    external?: boolean;
    icon: any; // FontAwesome icon
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
                href: "/projects/web",
                icon: faCode
            },
            {
                title: "Mobile Apps",
                description: "iOS and Android applications",
                href: "/projects/mobile",
                icon: faMobile
            },
            {
                title: "AI & ML",
                description: "Machine learning and AI solutions",
                href: "/projects/ai",
                icon: faBrain
            },
            {
                title: "View All Projects",
                description: "See our complete portfolio",
                href: "/projects",
                external: true,
                icon: faEye
            }
        ]
    },
    {
        title: "Blog",
        items: [
            {
                title: "Latest Posts",
                description: "Recent articles and insights",
                href: "/blog",
                icon: faNewspaper
            },
            {
                title: "Tech Insights",
                description: "Technology trends and analysis",
                href: "/blog/tech",
                icon: faChartLine
            },
            {
                title: "Case Studies",
                description: "Real-world project stories",
                href: "/blog/case-studies",
                icon: faFileText
            },
            {
                title: "Newsletter",
                description: "Stay updated with our insights",
                href: "/newsletter",
                icon: faBookOpen
            }
        ]
    },
    {
        title: "Resources",
        items: [
            {
                title: "Getting Started",
                description: "Quick start guide for developers",
                href: "/resources/getting-started",
                icon: faRocket
            },
            {
                title: "API Reference",
                description: "Complete API documentation",
                href: "/resources/api",
                icon: faCodeBranch
            },
            {
                title: "Tutorials",
                description: "Step-by-step guides",
                href: "/resources/tutorials",
                icon: faGraduationCap
            },
            {
                title: "Examples",
                description: "Code examples and snippets",
                href: "/resources/examples",
                icon: faLightbulb
            }
        ]
    }
];

export const MainMenu = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [hoveredItemBounds, setHoveredItemBounds] = useState<{ x: number; y: number; width: number; height: number } | null>(null);
    const [dropdownBounds, setDropdownBounds] = useState<{ x: number; y: number; width: number; height: number | string } | null>(null);
    const [nubLeft, setNubLeft] = useState(0);
    const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const navRef = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<{ [key: string]: HTMLElement | null }>({});
    const dropdownContentRef = useRef<HTMLDivElement | null>(null);
    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (itemKey: string, element: HTMLElement) => {
        // Clear any pending close timeout
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        
        setHoveredItem(itemKey);
        setActiveDropdown(itemKey);
        
        if (navRef.current && element) {
            const navRect = navRef.current.getBoundingClientRect();
            const itemRect = element.getBoundingClientRect();
            setHoveredItemBounds({
                x: itemRect.left - navRect.left,
                y: itemRect.top - navRect.top,
                width: itemRect.width,
                height: itemRect.height,
            });
            
            // Set fixed dropdown position and size only once when first opening
            if (!dropdownBounds) {
                setDropdownBounds({
                    x: 50, // Fixed left position
                    y: itemRect.bottom - navRect.top + 8, // Position below menu items with 8px gap
                    width: 320, // Fixed width for consistent container size
                    height: 'auto', // Auto height
                });
            }
            
            // Calculate nub position relative to the fixed dropdown container
            const dropdownLeft = 50; // Same as fixed dropdown x position
            const nubPosition = (itemRect.left - navRect.left + itemRect.width / 2) - dropdownLeft;
            setNubLeft(nubPosition);
        }
    };

    const handleMouseLeave = () => {
        // Delay closing to prevent flickering
        closeTimeoutRef.current = setTimeout(() => {
            setHoveredItem(null);
            setHoveredItemBounds(null);
            setActiveDropdown(null);
            setDropdownBounds(null);
            setNubLeft(0);
        }, 50);
    };

    const handleDropdownEnter = () => {
        // Clear any pending close timeout when entering dropdown
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
    };

    const handleDropdownLeave = () => {
        // Close immediately when leaving dropdown
        setHoveredItem(null);
        setHoveredItemBounds(null);
        setActiveDropdown(null);
        setDropdownBounds(null);
        setNubLeft(0);
    };

    return (
        <div className="absolute top-0 left-0 right-0 z-[200] flex items-center justify-center h-[64px] backdrop-blur-md">
            <div className="flex items-center justify-between w-full max-w-[1280px] px-6">
                <div className="flex items-center gap-8">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/Logos/The7thLab-WhiteLogo.png"
                        alt="The 7th Lab Logo in White"
                        width={100}
                        height={100}
                        priority
                        className="h-7 w-auto hover:opacity-70 transition-opacity duration-200"
                    />
                </Link>

                {/* Navigation Links with Dropdowns */}
                <nav ref={navRef} className="relative flex items-center gap-1">
                    
                    <Link 
                        href="/about" 
                        className="relative z-10 px-4 py-2 text-sm bg-transparent font-regular text-White hover:text-White/50 transition-colors duration-200"
                    >
                        About
                    </Link>
                    {dropdownMenus.map((menu) => (
                        <div 
                            key={menu.title} 
                            className="relative z-10" 
                            ref={(el) => { dropdownRefs.current[menu.title] = el; }}
                            onMouseEnter={(e) => {
                                handleMouseEnter(menu.title, e.currentTarget);
                            }}
                            onMouseLeave={handleMouseLeave}
                        >
                            {/*Dropdown Button*/}
                            <button
                                className="flex items-center gap-1 px-3 py-2 text-sm font-regular text-White hover:text-White/50 transition-colors duration-200"
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


                        </div>
                    ))}
                    
                    {/* Shared Shifting Dropdown Container */}
                    <AnimatePresence>
                        {activeDropdown && dropdownBounds && (
                                                         <motion.div
                                 className="absolute rounded-[10px] shadow-lg border-[0.25px] border-border-light dark:border-border-dark bg-White dark:bg-Night z-[100]"
                                 onMouseEnter={handleDropdownEnter}
                                 onMouseLeave={handleDropdownLeave}
                                 style={{
                                     left: dropdownBounds.x,
                                     top: dropdownBounds.y,
                                     width: dropdownBounds.width,
                                 }}
                                 initial={{ 
                                     opacity: 0, 
                                     scale: 0.96,
                                     y: -8
                                 }}
                                 animate={{ 
                                     opacity: 1, 
                                     scale: 1,
                                     y: 0
                                 }}
                                 exit={{ 
                                     opacity: 0, 
                                     scale: 0.96,
                                     y: -8
                                 }}
                                 transition={{
                                     type: "spring",
                                     stiffness: 450,
                                     damping: 28,
                                     mass: 0.8
                                 }}
                             >
                            {/* Nub - Small arrow pointing to active menu item */}
                            <motion.span
                                style={{
                                    clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
                                }}
                                animate={{ 
                                    left: nubLeft,
                                }}
                                transition={{ 
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 30,
                                    mass: 0.5
                                }}
                                className="absolute left-0 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border-[1px] border-border-light dark:border-border-dark bg-White dark:bg-Night"
                            />
                            
                                                         <motion.div 
                                 key={activeDropdown} 
                                 ref={dropdownContentRef} 
                                 className="py-2"
                                 initial={{ opacity: 0, y: 6 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 transition={{ 
                                     type: "spring",
                                     stiffness: 500,
                                     damping: 30,
                                     duration: 0.2
                                 }}
                             >
                                 {/* Single column layout for all menus with 320px container */}
                                 <div className="px-2">
                                     {dropdownMenus.find(menu => menu.title === activeDropdown)?.items.map((item, index) => (
                                         <motion.div
                                             key={`${activeDropdown}-${index}`}
                                             initial={{ opacity: 0, y: 6 }}
                                             animate={{ opacity: 1, y: 0 }}
                                             transition={{ 
                                                 type: "spring",
                                                 stiffness: 500,
                                                 damping: 30,
                                                 delay: index * 0.03
                                             }}
                                         >
                                             <Link
                                                 href={item.href}
                                                 className="flex items-start gap-3 px-4 py-3 hover:bg-[#f2f2f2] dark:hover:bg-[#333333] transition-colors duration-300 group rounded-[10px]"
                                             >
                                                 <FontAwesomeIcon icon={item.icon} className="text-sm mt-0.5 flex-shrink-0" />
                                                 <div className="flex-1 min-w-0">
                                                     <div className="flex items-center gap-2">
                                                         <span className="text-sm font-medium group-hover:text-gray-700 dark:group-hover:text-White">
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
                                         </motion.div>
                                     ))}
                                 </div>
                             </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </nav>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
                
                <Link
                    href="/learn"
                    className="hidden md:inline-flex items-center px-4 py-2 text-sm text-Whit bg-blue-500/10 hover:bg-blue-500/20 border-White border-[2px] rounded-[10px] transition-colors duration-200"
                >
                    Learn
                </Link>
            </div>
        </div>
    </div>
    );
};

