// This is a component used across the website to 
// display a menu in the footer.

"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faTwitter,
  faDiscord,
  faYoutube,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ColumnLink {
    title: string;
    href: string;
    external?: boolean;
}

interface SocialLink extends ColumnLink {
    icon: IconDefinition;
    ariaLabel: string;
}

interface FooterColumn {
    title: string;
    items: ColumnLink[] | SocialLink[];
    isSocial?: boolean;
}

const footerColumns: FooterColumn[] = [
    {
        title: "Projects",
        items: [
            { title: "All Projects", href: "/projects" },
            { title: "GitChem", href: "/projects/gitchem" },
            { title: "CRM.1", href: "/projects/crm-dot-one" },
            { title: "py_glades", href: "/projects/py-glades" }
        ]
    },
    {
        title: "Resources",
        items: [
            { title: "Blog", href: "/blog" },
            { title: "Documentation", href: "/resources/documentation" },
            { title: "Tutorials", href: "/resources/tutorials" },
            { title: "Case Studies", href: "/resources/case-studies" }
        ]
    },
    {
        title: "Company",
        items: [
            { title: "About Us", href: "/about" },
            { title: "Careers", href: "/careers" },
            { title: "Contact", href: "/contact" },
            { title: "Privacy Policy", href: "/privacy" }
        ]
    },
    {
        title: "Social",
        isSocial: true,
        items: [
            { title: "GitHub", href: "https://github.com/the7thlab", icon: faGithub, ariaLabel: "GitHub" },
            { title: "Twitter", href: "https://twitter.com/the7thlab", icon: faTwitter, ariaLabel: "Twitter" },
            { title: "Instagram", href: "https://instagram.com/the7thlab", icon: faInstagram, ariaLabel: "Instagram" },
            { title: "Discord", href: "https://discord.gg/the7thlab", icon: faDiscord, ariaLabel: "Discord" },
            { title: "YouTube", href: "https://youtube.com/@the7thlab", icon: faYoutube, ariaLabel: "YouTube" },
            { title: "LinkedIn", href: "https://linkedin.com/company/the-7th-lab", icon: faLinkedin, ariaLabel: "LinkedIn" }
        ] as SocialLink[]
    }
];

export function FooterMenu() {
  const renderColumnItems = (column: FooterColumn) => {
    if (column.isSocial) {
      return (
        <div className="flex flex-col space-y-3">
          {(column.items as SocialLink[]).map((item, index) => (
            <Link 
              key={index}
              href={item.href}
              className="text-[#a1a1a1] hover:text-White transition-colors flex items-center space-x-3"
              aria-label={item.ariaLabel}
            >
              <FontAwesomeIcon icon={item.icon} className="h-5 w-5" />
              <span className="text-sm">{item.title}</span>
            </Link>
          ))}
        </div>
      );
    }

    return (
      <ul className="space-y-3">
        {column.items.map((item, index) => (
          <li key={index}>
            <Link 
              href={item.href} 
              className="text-sm text-[#a1a1a1] hover:text-white transition-colors"
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <footer className="w-full border-t-[0.5px] border-border-dark">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Logo Column */}
          <div className="md:col-span-1">
            <div className="flex items-center">
              <Image
                src="/Logos/The7thLab-IconLogo.png"
                alt="The 7th Lab"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
            </div>
          </div>

          {/* Dynamic Columns */}
          {footerColumns.map((column, index) => (
            <div key={index} className="md:col-span-1">
              <h3 className="text-sm text-White mb-4">
                {column.title}
              </h3>
              {renderColumnItems(column)}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t-[0.5px] border-border-dark">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-[#a1a1a1]">
              © 2024 The 7th Lab. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-[#a1a1a1]">
              <Link href="/cookies" className="hover:text-White transition-colors">
                <FontAwesomeIcon icon={faCookieBite} className="mr-2 h-4 w-4" />
                Cookies Policy
              </Link>
              <Link href="/terms" className="hover:text-White transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-White transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
