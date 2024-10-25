import React from 'react';
import Image from 'next/image'; // If using an image from the public directory, otherwise use an actual SVG component
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className="flex mobile:flex-col mobile:mb-0 laptop:flex-row items-center justify-between w-full mobile:mt-36 laptop:mt-14 laptop:mb-12 laptop:px-16 bg-[url('/bg.svg')] bg-cover bg-center">
      
      {/* Left Section */ }
      <div className="flex-1 flex flex-col justify-center items-center mobile:px-4 mobile:space-y-8 text-center z-10">
        <h1 className="text-4xl mobile:text-5xl font-bold text-gray-900">
          Hello, I am Aryan Panchal
        </h1>
        <h2 className="text-xl mobile:text-2xl text-gray-700">
          Welcome to my portfolio
        </h2>
        {/* <p className="text-md mobile:text-lg text-gray-600">
        As a Computer Engineer with over 3 years of corporate exposure and 2 years of technical experience, I have exhij
        </p> */}
        <Link target="__blank" href='/Resume.pdf'>
          <button className="bg-black mobile:text-center text-white px-4 py-1 rounded-lg border-primary border-2 font-semibold hover:bg-white hover:text-black transition">
            🔒 Click to access my latest resume
          </button>
        </Link>
      </div>
      
      {/* Right Section (SVG Image) */}
      <div className="flex-1 mt-8 mobile:mt-0 flex justify-center items-center mobile:order-2 mobile:py-12 mobile:px-0">
        <Image
          src="/aryan portfolio.svg" // Ensure your SVG image is in the public directory
          alt="Hero SVG Image"
          width={600}
          height={600}
          className='mobile:w-full'
        />
      </div>
      
    </div>
  );
};

export default HeroSection;
