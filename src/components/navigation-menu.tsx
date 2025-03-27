"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function NavigationMenu() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#", hasDropdown: true },
    { label: "Keynotes", href: "#", hasDropdown: false },
    { label: "Ecosystem", href: "#", hasDropdown: true, isNew: true },
    { label: "Developer Hub", href: "#", hasDropdown: true },
    { label: "Community & News", href: "#", hasDropdown: true },
    { label: "Miners", href: "#", hasDropdown: true },
    { label: "Testnet", href: "#", hasDropdown: true, hasIndicator: true },
  ];

  const handleNavItemClick = (index: number) => {
    setActiveItem(index === activeItem ? null : index);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-gray-800">
      <div className="container flex items-center w-full mx-auto">
        <div className="flex mx-auto items-center gap-10 w-full md:gap-10 lg:gap-10 sm:gap-10 md:justify-center px-2 lg:justify-center sm:justify-center justify-between lg:justify-center h-16">
          <Link href="/" className="text-2xl font-bold text-white">
            BlockDAG
          </Link>

          {/* Mobile Menu Button */}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
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
                    <span className="ml-1 text-[9px] border w-7 h-3 text-white rounded-full">
                      New
                    </span>
                  )}
                  {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </button>
              </div>
            ))}
          </nav>
          <div className="flex items-center space-x-2">
            <Button className="md:block font-bold bg-blue-500 rounded-[10px] hover:bg-blue-600 text-white">
              Buy{" "}
              <span className="hidden lg:inline-block sm:inline-block md:inline-block">
                Now
              </span>
            </Button>

            <button
              className="md:hidden align-self-center text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden flex flex-col bg-gray-900 p-4 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-gray-300 hover:text-white py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="w-full bg-blue-500 rounded-[10px] hover:bg-blue-600 text-white">
              Buy Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
