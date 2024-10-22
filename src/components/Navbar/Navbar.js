"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Function to handle outside click
  const handleOutsideClick = () => {
    if (isSidebarOpen) setSidebarOpen(false);
  };

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "CALL FOR PAPER", href: "#call-for-paper" },
    { name: "COMMITTEE", href: "#committee" },
    { name: "PUBLICATION", href: "#publication" },
    { name: "AGENDA", href: "#agenda" },
    { name: "VENUE", href: "#venue" },
    { name: "CONTACT US", href: "#contact-us" },
    { name: "VIRTUAL CONFERENCE", href: "#virtual-conference" },
  ];

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 bg-black text-white">
        {/* Logo/Image on the left */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10 mr-2"
          />
          
        </div>

        {/* Desktop NavLinks */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <Link href={link.href} key={index} className="hover:text-gray-300 font-bold">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hamburger Menu for smaller screens */}
        <button
          className="block md:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Sidebar for Mobile Menu */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end"
          onClick={handleOutsideClick}
        >
          <div
            className="w-64 h-full bg-gray-800 text-white flex flex-col p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="self-end mb-4"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={24} />
            </button>

            {/* Sidebar NavLinks */}
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className="hover:text-gray-300"
                  onClick={() => setSidebarOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
