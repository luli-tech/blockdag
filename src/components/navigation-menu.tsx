"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavigationMenuProps {
  onNavClick: (index: number) => void;
}

export default function NavigationMenu({ onNavClick }: NavigationMenuProps) {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const navItems = [
    {
      label: "About",
      href: "#",
      hasDropdown: true,
    },
    {
      label: "Keynotes",
      href: "#",
      hasDropdown: false,
    },
    {
      label: "Ecosystem",
      href: "#",
      hasDropdown: true,
      isNew: true,
    },
    {
      label: "Developer Hub",
      href: "#",
      hasDropdown: true,
    },
    {
      label: "Community & News",
      href: "#",
      hasDropdown: true,
    },
    {
      label: "Miners",
      href: "#",
      hasDropdown: true,
    },
    {
      label: "Testnet",
      href: "#",
      hasDropdown: true,
      hasIndicator: true,
    },
  ];

  const handleNavItemClick = (index: number) => {
    setActiveItem(index === activeItem ? null : index);
    onNavClick(index);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transparent border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex mx-auto items-center justify-between h-16">
          <Link
            href="/"
            className="text-3xl font-bold text-white"
            onClick={() => onNavClick(0)}
          >
            BlockDAG
          </Link>

          <nav className="sm:hidden  hidden hide-on-mobile  md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  className={cn(
                    "px-2 py-2 rounded-md text-[12px] font-semibold flex items-center",
                    activeItem === index
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  )}
                  onClick={() => handleNavItemClick(index)}
                >
                  {item.hasIndicator && (
                    <span className="mr-1 h-2 w-2 rounded-full bg-green-500"></span>
                  )}
                  {item.label}
                  {item.isNew && (
                    <span className="ml-1 text-[9px] border w-7 h-3  text-white rounded-full">
                      New
                    </span>
                  )}
                  {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </button>
              </div>
            ))}
          </nav>

          <Button className="bg-blue-500 rounded-[10px] hover:bg-blue-600 text-white">
            Buy Now
          </Button>
        </div>
      </div>
    </header>
  );
}
