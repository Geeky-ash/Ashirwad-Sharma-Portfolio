"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react"; // icon package

interface NavItem {
  name: string;
  url: string;
}

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

  const navItems: NavItem[] = [
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: "About", url: "/about" },
    {name :"Experience", url:"/experience"},
    { name: "Contact", url: "/contact" }
  ];

  useEffect(() => {
    const currentPath = pathname;
    const active = navItems.find((item) => item.url === currentPath)?.name || navItems[0].name;
    setActiveItem(active);
  }, [pathname, navItems]);

  // Handle click outside of mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click was outside both the menu and the hamburger button
      if (
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target as Node) &&
        hamburgerButtonRef.current &&
        !hamburgerButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    // Add event listener only when mobile menu is open
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const pathnameLogo = usePathname();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathnameLogo === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      className={cn(
        "fixed md:top-2 left-1/2 md:backdrop-blur-sm rounded-full -translate-x-1/2 z-50 md:pt-4 w-full max-w-screen-lg px-5",
        className
      )}
    >
      <div className="flex backdrop-blur-sm md:py-0 md:backdrop-blur-none py-4 items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={handleLogoClick} className="text-2xl w-24 font-bold">
          <div className="flex items-center">
            <span className="text-white">AS</span>
          </div>
        </Link>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            ref={hamburgerButtonRef}
            className="text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center backdrop-blur-md bg-black/20 rounded-full px-6 py-2 border border-white/10">
          {navItems.map((item) => {
            const isActive = activeItem === item.name;
            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => setActiveItem(item.name)}
                className={cn(
                  "relative px-4 py-2 text-sm transition-colors",
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                )}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -top-5 left-1/2 -translate-x-1/2"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.3,
                    }}
                  >
                    <div className="relative">
                      <div className="h-1 w-8 bg-white rounded-full" />
                      <div className="absolute w-12 h-6 bg-white/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-4 bg-white/30 rounded-full blur-sm -top-1 left-0" />
                      <div className="absolute w-4 h-4 bg-white/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Button (always visible) */}
        <div className="hidden md:flex bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
          <Link href="/contact" className="text-white text-sm font-medium">
            Book a Call
          </Link>
        </div>
      </div>

      {/* Mobile Menu Items */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 bg-black/95 rounded-xl px-4 py-4 border border-white/10"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => {
                  setActiveItem(item.name);
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "block py-2 text-sm",
                  activeItem === item.name ? "text-white font-semibold" : "text-white/70"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-3">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block bg-white/20 px-4 py-2 rounded-full text-white text-sm text-center border border-white/10"
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;