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
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]); // Ensure to include isOpen

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
          <Link href="#projects">
            <p className="text-gray-700 hover:text-gray-900">Projects</p>
          </Link>
          <Link href="#testimonials">
            <p className="text-gray-700 hover:text-gray-900">Testimonials</p>
          </Link>
        </div>

        <div className="bg-white laptop:flex justify-center gap-2 flex-wrap mobile:hidden">
          {/* GitHub */}
          <Link
            target="__blank"
            href="https://github.com/aryannpanchal"
            className="p-2 rounded-lg flex items-center border-2 !border-primaryDark justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#111827">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.02c-3.2.7-3.87-1.55-3.87-1.55-.51-1.3-1.25-1.64-1.25-1.64-1.02-.69.07-.68.07-.68 1.12.08 1.7 1.16 1.7 1.16 1 .7 2.46.49 3.06.37.1-.72.39-1.25.71-1.54-2.56-.29-5.25-1.28-5.25-5.68 0-1.25.44-2.27 1.15-3.07-.11-.28-.5-1.4.1-2.92 0 0 .96-.31 3.15 1.18a10.92 10.92 0 015.73 0c2.19-1.49 3.15-1.18 3.15-1.18.6 1.52.21 2.64.1 2.92.72.8 1.15 1.82 1.15 3.07 0 4.42-2.7 5.38-5.28 5.66.4.34.76 1 .76 2.02v2.99c0 .3.21.66.79.54A10.5 10.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
            </svg>
          </Link>

          {/* LinkedIn */}
          <Link
            target="__blank"
            href="https://www.linkedin.com/in/aryan-panchal-3a22491a9/"
            className="p-2 rounded-lg flex items-center border-2 !border-primaryDark justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#111827">
              <path d="M22.23 0H1.77C.79 0 0 .774 0 1.73v20.54C0 23.225.79 24 1.77 24h20.46C23.21 24 24 23.225 24 22.27V1.73C24 .774 23.21 0 22.23 0zM7.06 20.46H3.54V9h3.52v11.46zM5.3 7.6a2.05 2.05 0 110-4.1 2.05 2.05 0 010 4.1zm15.16 12.86h-3.52v-5.84c0-1.4-.03-3.18-1.94-3.18-1.94 0-2.24 1.51-2.24 3.07v5.95h-3.53V9h3.39v1.56h.05c.47-.9 1.6-1.85 3.29-1.85 3.51 0 4.16 2.31 4.16 5.31v6.44z" />
            </svg>
          </Link>

          {/* Email */}
          <Link
            href="mailto:aryan.panchal1204@gmail.com?subject=Hello&body=I%20would%20like%20to%20connect%20with%20you."
            className="p-2 rounded-lg flex items-center border-2 !border-primaryDark justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72" fill="none">
              <path d="M11.9362 56.1235H20.4189V35.5227L8.30078 26.434V52.4881C8.30078 54.4997 9.93067 56.1235 11.9362 56.1235Z" fill="#111827" />
              <path d="M49.5025 56.1235H57.9853C59.9969 56.1235 61.6207 54.4936 61.6207 52.4881V26.434L49.5025 35.5227" fill="#111827" />
              <path d="M49.5025 19.7693V35.5227L61.6207 26.434V21.587C61.6207 17.0912 56.4887 14.5282 52.8956 17.2245" fill="#111827" />
              <path d="M20.4189 35.5227V19.769L34.9607 30.6754L49.5025 19.7693V35.5227L34.9607 46.429" fill="#111827" />
              <path d="M8.30078 21.587V26.434L20.4189 35.5227V19.769L17.0259 17.2245C13.4268 14.5282 8.30078 17.0912 8.30078 21.587Z" fill="#111827" />
            </svg>
          </Link>
        </div>

        {/* Button (visible on desktop) */}
        <div className="mobile:hidden laptop:block md:flex">
          <Link href="https://wa.me/918291105272?text=I%20would%20like%20to%20work%20with%20you" target="_blank">
            <p className="bg-white text-black px-4 py-1 rounded-lg border-primary border-2 font-semibold hover:bg-primaryDark hover:text-white transition">
              Work with me ✆
            </p>
          </Link>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="flex laptop:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes className="text-3xl" /> : <FaBars className="text-3xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        id="mobile-menu"
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
        className="laptop:hidden overflow-hidden bg-white"
      >
        <div className="flex flex-col space-y-4 p-4">
          <Link href="/" onClick={toggleMenu}>
            <p className="text-gray-700 hover:text-gray-900">Home</p>
          </Link>
          <Link href="#projects" onClick={toggleMenu}>
            <p className="text-gray-700 hover:text-gray-900">Projects</p>
          </Link>
          <Link href="#testimonials" onClick={toggleMenu}>
            <p className="text-gray-700 hover:text-gray-900">Testimonials</p>
          </Link>
          <Link
            target="__blank"
            href="https://github.com/aryannpanchal"
            className="p-2 rounded-lg flex items-center border-2 !border-primaryDark justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#111827">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.02c-3.2.7-3.87-1.55-3.87-1.55-.51-1.3-1.25-1.64-1.25-1.64-1.02-.69.07-.68.07-.68 1.12.08 1.7 1.16 1.7 1.16 1 .7 2.46.49 3.06.37.1-.72.39-1.25.71-1.54-2.56-.29-5.25-1.28-5.25-5.68 0-1.25.44-2.27 1.15-3.07-.11-.28-.5-1.4.1-2.92 0 0 .96-.31 3.15 1.18a10.92 10.92 0 015.73 0c2.19-1.49 3.15-1.18 3.15-1.18.6 1.52.21 2.64.1 2.92.72.8 1.15 1.82 1.15 3.07 0 4.42-2.7 5.38-5.28 5.66.4.34.76 1 .76 2.02v2.99c0 .3.21.66.79.54A10.5 10.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
            </svg>
          </Link>
          <Link
            target="__blank"
            href="https://www.linkedin.com/in/aryan-panchal-3a22491a9/"
            className="p-2 rounded-lg flex items-center border-2 !border-primaryDark justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#111827">
              <path d="M22.23 0H1.77C.79 0 0 .774 0 1.73v20.54C0 23.225.79 24 1.77 24h20.46C23.21 24 24 23.225 24 22.27V1.73C24 .774 23.21 0 22.23 0zM7.06 20.46H3.54V9h3.52v11.46zM5.3 7.6a2.05 2.05 0 110-4.1 2.05 2.05 0 010 4.1zm15.16 12.86h-3.52v-5.84c0-1.4-.03-3.18-1.94-3.18-1.94 0-2.24 1.51-2.24 3.07v5.95h-3.53V9h3.39v1.56h.05c.47-.9 1.6-1.85 3.29-1.85 3.51 0 4.16 2.31 4.16 5.31v6.44z" />
            </svg>
          </Link>
          <Link
            href="mailto:aryan.panchal1204@gmail.com?subject=Hello&body=I%20would%20like%20to%20connect%20with%20you."
            className="p-2 rounded-lg flex items-center border-2 !border-primaryDark justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72" fill="none">
              <path d="M11.9362 56.1235H20.4189V35.5227L8.30078 26.434V52.4881C8.30078 54.4997 9.93067 56.1235 11.9362 56.1235Z" fill="#111827" />
              <path d="M49.5025 56.1235H57.9853C59.9969 56.1235 61.6207 54.4936 61.6207 52.4881V26.434L49.5025 35.5227" fill="#111827" />
              <path d="M49.5025 19.7693V35.5227L61.6207 26.434V21.587C61.6207 17.0912 56.4887 14.5282 52.8956 17.2245" fill="#111827" />
              <path d="M20.4189 35.5227V19.769L34.9607 30.6754L49.5025 19.7693V35.5227L34.9607 46.429" fill="#111827" />
              <path d="M8.30078 21.587V26.434L20.4189 35.5227V19.769L17.0259 17.2245C13.4268 14.5282 8.30078 17.0912 8.30078 21.587Z" fill="#111827" />
            </svg>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
