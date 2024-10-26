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
  }, [isOpen, handleClickOutside]); // Ensure to include handleClickOutside
  

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
          {/* <Link href="#about">
            <p className="text-gray-700 hover:text-gray-900">About Me</p>
          </Link> */}
          {/* <Link href="#portfolio">
            <p className="text-gray-700 hover:text-gray-900">My Portfolio</p>
          </Link> */}
          <Link href="#testimonials">
            <p className="text-gray-700 hover:text-gray-900">Testimonials</p>
          </Link>
          {/* <Link href="#contact">
            <p className="text-gray-700 hover:text-gray-900">Contact</p>
          </Link> */}
        </div>
        <div className="bg-white laptop:flex justify-center gap-2 flex-wrap mobile:hidden">
      
{/* github */}
      <Link target="__blank" href="https://github.com/aryannpanchal"
   className="p-2 rounded-lg flex items-center border !border-primaryDark justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#111827">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.02c-3.2.7-3.87-1.55-3.87-1.55-.51-1.3-1.25-1.64-1.25-1.64-1.02-.69.07-.68.07-.68 1.12.08 1.7 1.16 1.7 1.16 1 .7 2.46.49 3.06.37.1-.72.39-1.25.71-1.54-2.56-.29-5.25-1.28-5.25-5.68 0-1.25.44-2.27 1.15-3.07-.11-.28-.5-1.4.1-2.92 0 0 .96-.31 3.15 1.18a10.92 10.92 0 015.73 0c2.19-1.49 3.15-1.18 3.15-1.18.6 1.52.21 2.64.1 2.92.72.8 1.15 1.82 1.15 3.07 0 4.42-2.7 5.38-5.28 5.66.4.34.76 1 .76 2.02v2.99c0 .3.21.66.79.54A10.5 10.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/>
  </svg>
</Link>

      {/* linkedin */}
      <Link target="__blank" href="https://www.linkedin.com/in/aryan-panchal-3a22491a9/"
   className="p-2 rounded-lg flex items-center border !border-primaryDark justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#111827">
    <path d="M22.23 0H1.77C.79 0 0 .774 0 1.73v20.54C0 23.225.79 24 1.77 24h20.46C23.21 24 24 23.225 24 22.27V1.73C24 .774 23.21 0 22.23 0zM7.06 20.46H3.54V9h3.52v11.46zM5.3 7.6a2.05 2.05 0 110-4.1 2.05 2.05 0 010 4.1zm15.16 12.86h-3.52v-5.84c0-1.4-.03-3.18-1.94-3.18-1.94 0-2.24 1.51-2.24 3.07v5.95h-3.53V9h3.39v1.56h.05c.47-.9 1.6-1.85 3.29-1.85 3.51 0 4.16 2.31 4.16 5.31v6.44z"/>
  </svg>
</Link>

      
     
     
    
     
      <Link href="mailto:aryan.panchal1204@gmail.com?subject=Hello&body=I%20would%20like%20to%20connect%20with%20you."
      className="p-2 rounded-lg flex items-center border !border-primaryDark justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72"
      fill="none">
      <path
        d="M11.9362 56.1235H20.4189V35.5227L8.30078 26.434V52.4881C8.30078 54.4997 9.93067 56.1235 11.9362 56.1235Z"
        fill="#111827" />
      <path
        d="M49.5025 56.1235H57.9853C59.9969 56.1235 61.6207 54.4936 61.6207 52.4881V26.434L49.5025 35.5227"
        fill="#111827" />
      <path
        d="M49.5025 19.7693V35.5227L61.6207 26.434V21.587C61.6207 17.0912 56.4887 14.5282 52.8956 17.2245"
        fill="#111827" />
      <path d="M20.4189 35.5227V19.769L34.9607 30.6754L49.5025 19.7693V35.5227L34.9607 46.429"
        fill="#111827" />
      <path
        d="M8.30078 21.587V26.434L20.4189 35.5227V19.769L17.0259 17.2245C13.4268 14.5282 8.30078 17.0912 8.30078 21.587Z"
        fill="#111827" />
      </svg></Link>


      {/* <a href="javascript:;"
      className="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 71"
      fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M56.5615 18.2428C58.8115 18.8504 60.58 20.6234 61.1778 22.8708C62.2654 26.9495 62.2654 35.4647 62.2654 35.4647C62.2654 35.4647 62.2654 43.98 61.1778 48.0586C60.5717 50.3144 58.8032 52.0873 56.5615 52.6866C52.4932 53.7771 36.1703 53.7771 36.1703 53.7771C36.1703 53.7771 19.8557 53.7771 15.7791 52.6866C13.5291 52.079 11.7606 50.306 11.1628 48.0586C10.0752 43.98 10.0752 35.4647 10.0752 35.4647C10.0752 35.4647 10.0752 26.9495 11.1628 22.8708C11.7689 20.615 13.5374 18.8421 15.7791 18.2428C19.8557 17.1523 36.1703 17.1523 36.1703 17.1523C36.1703 17.1523 52.4932 17.1523 56.5615 18.2428ZM44.5142 35.4647L30.9561 43.314V27.6154L44.5142 35.4647Z"
        fill="#111827" />
      </svg></a> */}
      </div>
        {/* Button (visible on desktop) */}
        <div className="mobile:hidden laptop:block md:flex">
          <Link href="https://wa.me/918291105272?text=I%20would%20like%20to%20work%20with%20you" target="_blank">
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
            <div className="bg-white laptop:hidden justify-center gap-2 flex-wrap">
      
      <a href="javascript:;"
      className="p-2 mb-5 mt-4 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 72"
      fill="none">
      <path
        d="M27.3762 35.7808C27.3762 31.1786 31.1083 27.4468 35.7132 27.4468C40.3182 27.4468 44.0522 31.1786 44.0522 35.7808C44.0522 40.383 40.3182 44.1148 35.7132 44.1148C31.1083 44.1148 27.3762 40.383 27.3762 35.7808ZM22.8683 35.7808C22.8683 42.8708 28.619 48.618 35.7132 48.618C42.8075 48.618 48.5581 42.8708 48.5581 35.7808C48.5581 28.6908 42.8075 22.9436 35.7132 22.9436C28.619 22.9436 22.8683 28.6908 22.8683 35.7808ZM46.0648 22.4346C46.0646 23.0279 46.2404 23.608 46.5701 24.1015C46.8997 24.595 47.3684 24.9797 47.9168 25.2069C48.4652 25.4342 49.0688 25.4939 49.6511 25.3784C50.2334 25.2628 50.7684 24.9773 51.1884 24.5579C51.6084 24.1385 51.8945 23.6041 52.0105 23.0222C52.1266 22.4403 52.0674 21.8371 51.8404 21.2888C51.6134 20.7406 51.2289 20.2719 50.7354 19.942C50.2418 19.6122 49.6615 19.436 49.0679 19.4358H49.0667C48.2708 19.4361 47.5077 19.7522 46.9449 20.3144C46.3821 20.8767 46.0655 21.6392 46.0648 22.4346ZM25.6072 56.1302C23.1683 56.0192 21.8427 55.6132 20.9618 55.2702C19.7939 54.8158 18.9606 54.2746 18.0845 53.4002C17.2083 52.5258 16.666 51.6938 16.2133 50.5266C15.8699 49.6466 15.4637 48.3214 15.3528 45.884C15.2316 43.2488 15.2073 42.4572 15.2073 35.781C15.2073 29.1048 15.2336 28.3154 15.3528 25.678C15.4639 23.2406 15.8731 21.918 16.2133 21.0354C16.668 19.8682 17.2095 19.0354 18.0845 18.1598C18.9594 17.2842 19.7919 16.7422 20.9618 16.2898C21.8423 15.9466 23.1683 15.5406 25.6072 15.4298C28.244 15.3086 29.036 15.2844 35.7132 15.2844C42.3904 15.2844 43.1833 15.3106 45.8223 15.4298C48.2612 15.5408 49.5846 15.9498 50.4677 16.2898C51.6356 16.7422 52.4689 17.2854 53.345 18.1598C54.2211 19.0342 54.7615 19.8682 55.2161 21.0354C55.5595 21.9154 55.9658 23.2406 56.0767 25.678C56.1979 28.3154 56.2221 29.1048 56.2221 35.781C56.2221 42.4572 56.1979 43.2466 56.0767 45.884C55.9656 48.3214 55.5573 49.6462 55.2161 50.5266C54.7615 51.6938 54.2199 52.5266 53.345 53.4002C52.4701 54.2738 51.6356 54.8158 50.4677 55.2702C49.5872 55.6134 48.2612 56.0194 45.8223 56.1302C43.1855 56.2514 42.3934 56.2756 35.7132 56.2756C29.033 56.2756 28.2432 56.2514 25.6072 56.1302ZM25.4001 10.9322C22.7371 11.0534 20.9174 11.4754 19.3282 12.0934C17.6824 12.7316 16.2892 13.5878 14.897 14.977C13.5047 16.3662 12.6502 17.7608 12.0116 19.4056C11.3933 20.9948 10.971 22.8124 10.8497 25.4738C10.7265 28.1394 10.6982 28.9916 10.6982 35.7808C10.6982 42.57 10.7265 43.4222 10.8497 46.0878C10.971 48.7494 11.3933 50.5668 12.0116 52.156C12.6502 53.7998 13.5049 55.196 14.897 56.5846C16.289 57.9732 17.6824 58.8282 19.3282 59.4682C20.9204 60.0862 22.7371 60.5082 25.4001 60.6294C28.0687 60.7506 28.92 60.7808 35.7132 60.7808C42.5065 60.7808 43.3592 60.7526 46.0264 60.6294C48.6896 60.5082 50.5081 60.0862 52.0983 59.4682C53.7431 58.8282 55.1373 57.9738 56.5295 56.5846C57.9218 55.1954 58.7745 53.7998 59.4149 52.156C60.0332 50.5668 60.4575 48.7492 60.5768 46.0878C60.698 43.4202 60.7262 42.57 60.7262 35.7808C60.7262 28.9916 60.698 28.1394 60.5768 25.4738C60.4555 22.8122 60.0332 20.9938 59.4149 19.4056C58.7745 17.7618 57.9196 16.3684 56.5295 14.977C55.1395 13.5856 53.7431 12.7316 52.1003 12.0934C50.5081 11.4754 48.6894 11.0514 46.0284 10.9322C43.3612 10.811 42.5085 10.7808 35.7152 10.7808C28.922 10.7808 28.0687 10.809 25.4001 10.9322Z"
        fill="#111827" />
      </svg></a>
      <a href="javascript:;"
      className="p-2 mb-5 mt-4 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72"
      fill="none">
      <path
        d="M40.7568 32.1716L59.3704 11H54.9596L38.7974 29.383L25.8887 11H11L30.5205 38.7983L11 61H15.4111L32.4788 41.5869L46.1113 61H61L40.7557 32.1716H40.7568ZM34.7152 39.0433L32.7374 36.2752L17.0005 14.2492H23.7756L36.4755 32.0249L38.4533 34.7929L54.9617 57.8986H48.1865L34.7152 39.0443V39.0433Z"
        fill="#111827" />
      </svg></a>
      
      <a href="javascript:;"
      className="p-2 mb-5 mt-4 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 72"
      fill="none">
      <path
        d="M12.5068 56.8405L15.7915 44.6381C13.1425 39.8847 12.3009 34.3378 13.4211 29.0154C14.5413 23.693 17.5482 18.952 21.89 15.6624C26.2319 12.3729 31.6173 10.7554 37.0583 11.1068C42.4992 11.4582 47.6306 13.755 51.5108 17.5756C55.3911 21.3962 57.7599 26.4844 58.1826 31.9065C58.6053 37.3286 57.0535 42.7208 53.812 47.0938C50.5705 51.4668 45.8568 54.5271 40.5357 55.7133C35.2146 56.8994 29.6432 56.1318 24.8438 53.5513L12.5068 56.8405ZM25.4386 48.985L26.2016 49.4365C29.6779 51.4918 33.7382 52.3423 37.7498 51.8555C41.7613 51.3687 45.4987 49.5719 48.3796 46.7452C51.2605 43.9185 53.123 40.2206 53.6769 36.2279C54.2308 32.2351 53.445 28.1717 51.4419 24.6709C49.4388 21.1701 46.331 18.4285 42.6027 16.8734C38.8745 15.3184 34.7352 15.0372 30.8299 16.0736C26.9247 17.11 23.4729 19.4059 21.0124 22.6035C18.5519 25.801 17.2209 29.7206 17.2269 33.7514C17.2237 37.0937 18.1503 40.3712 19.9038 43.2192L20.3823 44.0061L18.546 50.8167L25.4386 48.985Z"
        fill="#111827" />
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M43.9566 36.8847C43.5093 36.5249 42.9856 36.2716 42.4254 36.1442C41.8651 36.0168 41.2831 36.0186 40.7236 36.1495C39.8831 36.4977 39.3399 37.8134 38.7968 38.4713C38.6823 38.629 38.514 38.7396 38.3235 38.7823C38.133 38.8251 37.9335 38.797 37.7623 38.7034C34.6849 37.5012 32.1055 35.2965 30.4429 32.4475C30.3011 32.2697 30.2339 32.044 30.2557 31.8178C30.2774 31.5916 30.3862 31.3827 30.5593 31.235C31.165 30.6368 31.6098 29.8959 31.8524 29.0809C31.9063 28.1818 31.6998 27.2863 31.2576 26.5011C30.9157 25.4002 30.265 24.42 29.3825 23.6762C28.9273 23.472 28.4225 23.4036 27.9292 23.4791C27.4359 23.5546 26.975 23.7709 26.6021 24.1019C25.9548 24.6589 25.4411 25.3537 25.0987 26.135C24.7562 26.9163 24.5939 27.7643 24.6236 28.6165C24.6256 29.0951 24.6864 29.5716 24.8046 30.0354C25.1049 31.1497 25.5667 32.2144 26.1754 33.1956C26.6145 33.9473 27.0937 34.6749 27.6108 35.3755C29.2914 37.6767 31.4038 39.6305 33.831 41.1284C35.049 41.8897 36.3507 42.5086 37.7105 42.973C39.1231 43.6117 40.6827 43.8568 42.2237 43.6824C43.1018 43.5499 43.9337 43.2041 44.6462 42.6755C45.3588 42.1469 45.9302 41.4518 46.3102 40.6512C46.5334 40.1675 46.6012 39.6269 46.5042 39.1033C46.2714 38.0327 44.836 37.4007 43.9566 36.8847Z"
        fill="#111827" />
      </svg></a>
     
      <a href="javascript:;"
      className="p-2 mb-5 mt-4 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72"
      fill="none">
      <path
        d="M11.9362 56.1235H20.4189V35.5227L8.30078 26.434V52.4881C8.30078 54.4997 9.93067 56.1235 11.9362 56.1235Z"
        fill="#111827" />
      <path
        d="M49.5025 56.1235H57.9853C59.9969 56.1235 61.6207 54.4936 61.6207 52.4881V26.434L49.5025 35.5227"
        fill="#111827" />
      <path
        d="M49.5025 19.7693V35.5227L61.6207 26.434V21.587C61.6207 17.0912 56.4887 14.5282 52.8956 17.2245"
        fill="#111827" />
      <path d="M20.4189 35.5227V19.769L34.9607 30.6754L49.5025 19.7693V35.5227L34.9607 46.429"
        fill="#111827" />
      <path
        d="M8.30078 21.587V26.434L20.4189 35.5227V19.769L17.0259 17.2245C13.4268 14.5282 8.30078 17.0912 8.30078 21.587Z"
        fill="#111827" />
      </svg></a>
      <a href="javascript:;"
      className="p-2 mb-5 mt-4 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 71"
      fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M56.5615 18.2428C58.8115 18.8504 60.58 20.6234 61.1778 22.8708C62.2654 26.9495 62.2654 35.4647 62.2654 35.4647C62.2654 35.4647 62.2654 43.98 61.1778 48.0586C60.5717 50.3144 58.8032 52.0873 56.5615 52.6866C52.4932 53.7771 36.1703 53.7771 36.1703 53.7771C36.1703 53.7771 19.8557 53.7771 15.7791 52.6866C13.5291 52.079 11.7606 50.306 11.1628 48.0586C10.0752 43.98 10.0752 35.4647 10.0752 35.4647C10.0752 35.4647 10.0752 26.9495 11.1628 22.8708C11.7689 20.615 13.5374 18.8421 15.7791 18.2428C19.8557 17.1523 36.1703 17.1523 36.1703 17.1523C36.1703 17.1523 52.4932 17.1523 56.5615 18.2428ZM44.5142 35.4647L30.9561 43.314V27.6154L44.5142 35.4647Z"
        fill="#111827" />
      </svg></a>
      </div>
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
