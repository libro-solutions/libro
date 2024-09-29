"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
} from "lucide-react";

const iconMap = {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
};

export default function NavBar({ navItems, socialLinks }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowButtons(window.innerWidth >= 640);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleResize();
    handleScroll();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Hamburger menu on the left */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Logo */}
          <div
            className={`flex-shrink-0 flex items-center ${
              !showButtons ? "flex-grow justify-center" : ""
            }`}
          >
            <Link href="/">
              <Image src="/images/logo.png" alt="Logo" width={70} height={70} />
            </Link>
          </div>

          {/* Navigation items for large screens */}
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Donate and Contribute buttons */}
          {showButtons ? (
            <div className="hidden sm:flex sm:items-center">
              <Link
                href="/donate"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium mr-2"
              >
                Donate
              </Link>
              <Link
                href="/contribute"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Contribute
              </Link>
            </div>
          ) : (
            <div className="flex-shrink-0 w-12 lg:hidden"></div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
          {!showButtons && (
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5">
                <Link
                  href="/donate"
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium mr-2 w-full text-center"
                >
                  Donate
                </Link>
                <Link
                  href="/contribute"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium w-full text-center"
                >
                  Contribute
                </Link>
              </div>
            </div>
          )}
          {/* Social and contact links */}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex flex-wrap justify-center gap-4 px-5">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-gray-500"
                    onClick={toggleMenu}
                  >
                    <span className="sr-only">{link.name}</span>
                    {Icon ? (
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <span className="h-6 w-6">Icon not available</span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
