'use client'
import React from 'react';
import Image from 'next/image'; // For optimized images
import Link from 'next/link';
import { motion } from 'framer-motion'; // Framer Motion for animations

const HeroSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2, // Stagger effect for child elements
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: 'easeOut' } },
  };

  return (
    <div className="flex mobile:flex-col mobile:mb-0 laptop:flex-row items-center justify-between w-full mobile:mt-36 laptop:mt-24 laptop:mb-12 laptop:px-16">
      {/* Left Section */}
      <motion.div
        className="flex-1 flex flex-col justify-center items-center mobile:px-4 mobile:space-y-8 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-4xl mobile:text-5xl font-bold text-gray-900" variants={childVariants}>
          Hello, I am Aryan Panchal
        </motion.h1>
        <motion.h2 className="text-xl mobile:text-2xl text-gray-700" variants={childVariants}>
          Welcome to my portfolio
        </motion.h2>

        <motion.div variants={childVariants}>
          <Link target="__blank" href="/Aryan Panchal CV final.pdf">
            <button className="Documents-btn flex items-center justify-start w-fit h-11 border-none px-4 rounded-md  gap-2 cursor-pointer transition-all duration-300 hover:bg-primaryDark bg-primary active:scale-95">
              <span className="folderContainer w-fit h-fit flex flex-col items-center justify-end relative">
                {/* SVG Files */}
                {/* Add your SVGs here */}
              </span>
              <p className="text-center text-white mobile:text-sm font-semibold tracking-wide">View my resume</p>
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Section (Image) */}
      <motion.div
        className="flex-1 mt-8 mobile:mt-0 flex justify-center items-center mobile:order-2 mobile:py-12 mobile:px-0"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/aryan.jpg" // Ensure your SVG image is in the public directory
          alt="Hero SVG Image"
          width={100}
          height={100}
          className="mobile:w-full laptop:h-[500px] laptop:w-auto rounded"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
