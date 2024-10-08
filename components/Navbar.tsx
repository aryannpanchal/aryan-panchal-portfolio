// components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Import the close icon from react-icons
import { motion } from "framer-motion";

export default function NavbarSection() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (isOpen && !target.closest("#mobile-menu")) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="w-full bg-white fixed top-0 left-0 z-20 border-b-2 border-primaryDark">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <p className="text-black">AP</p>
          </Link>
        </div>

        {/* Links (visible on desktop) */}
        <div className="mobile:hidden laptop:flex items-center space-x-8">
          <Link href="/">
            <p className="text-gray-700 hover:text-gray-900">Home</p>
          </Link>
          <Link href="#about">
            <p className="text-gray-700 hover:text-gray-900">About Me</p>
          </Link>
          <Link href="#portfolio">
            <p className="text-gray-700 hover:text-gray-900">My Portfolio</p>
          </Link>
          <Link href="#testimonials">
            <p className="text-gray-700 hover:text-gray-900">Testimonials</p>
          </Link>
          <Link href="#contact">
            <p className="text-gray-700 hover:text-gray-900">Contact</p>
          </Link>
        </div>

        {/* Button (visible on desktop) */}
        <div className="mobile:hidden laptop:block md:flex">
          <Link href="#get-started">
            <p className="bg-white text-black px-4 py-1 rounded-lg border-primary border-2 font-semibold hover:bg-primaryDark hover:text-white transition">
              Work with me ✆
            </p>
          </Link>
        </div>

        {/* Hamburger menu for mobile (visible on mobile) */}
        <div className="laptop:hidden mobile:block flex items-center">
          <button onClick={toggleMenu} className="text-black">
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu (only visible when toggled) */}
      {isOpen && (
        <motion.div
          id="mobile-menu" // Add id for target in handleClickOutside
          initial={{ opacity: 0, y: -50 }} // Start off-screen above
          animate={{ opacity: 1, y: 0 }} // Slide down into view
          exit={{ opacity: 0, y: -50 }} // Slide up out of view
          transition={{ duration: 0.3 }} // Transition duration
          className="md:hidden bg-white shadow-md p-4"
        >
          <Link href="/">
            <p className="block text-gray-700 hover:text-gray-900 py-2">Home</p>
          </Link>
          <Link href="#about">
            <p className="block text-gray-700 hover:text-gray-900 py-2">About Me</p>
          </Link>
          <Link href="#portfolio">
            <p className="block text-gray-700 hover:text-gray-900 py-2">My Portfolio</p>
          </Link>
          <Link href="#testimonials">
            <p className="block text-gray-700 hover:text-gray-900 py-2">Testimonials</p>
          </Link>
          <Link href="#contact">
            <p className="block text-gray-700 hover:text-gray-900 py-2">Contact</p>
          </Link>
          <Link href="#get-started">
            <p className="bg-white mobile:text-center text-black px-4 py-1 mobile:mt-4 rounded-lg border-primary border-2 font-semibold hover:bg-primaryDark hover:text-white transition">
              Work with me ✆
            </p>
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
