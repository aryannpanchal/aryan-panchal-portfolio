'use client';

import React from 'react';
import Image from 'next/image';

const Companies = () => {
  return (
    <>
      <p className='font-semibold text-center text-2xl mobile:text-3xl mobile:pt-12 laptop:text-4xl laptop:pt-8 z-100'>Associated companies </p>
      <section className="w-full h-fit flex justify-center items-center p-8 mobile:mb-12">
        <div className="max-w-screen-xl px-4 mx-auto laptop:pb-1">
          {/* Adjust the grid layout for mobile and larger screens */}
          <div className="grid grid-cols-1 mobile:grid-cols-1 laptop:grid-cols-3 gap-2 text-gray-500 mobile:gap-6 dark:text-gray-400">
            <a
              className="flex items-center justify-center relative image-1 h-full" // Centering the first image
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/1.png"
                alt="Company 1"
                width={200}  // Increased width
                height={100} // Increased height
                className="object-contain max-w-full" // Added object-contain for responsiveness
              />
            </a>
            <a
              className="flex items-center justify-center relative image-2 h-full" // Centering the second image
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/2.svg"
                alt="Company 2"
                width={400}  // Increased width
                height={100} // Increased height
                className="object-contain max-w-full mobile:mt-6 laptop:mt-0 mobile:w-[300px] laptop:w-[400px]" // Added object-contain for responsiveness
              />
            </a>
            <a
              className="flex items-center justify-center relative image-3 h-full" // Centering the third image
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/3.svg"
                alt="Company 3"
                width={200}  // Increased width
                height={10} // Increased height
                className="object-contain max-w-full " // Added object-contain for responsiveness
              />
            </a>
          </div>
          {/* Adding margin at the bottom */}
          <div className="mt-8" /> {/* Adjust this value as needed for more space */}
        </div>
      </section>
    </>
  );
};

export default Companies;
