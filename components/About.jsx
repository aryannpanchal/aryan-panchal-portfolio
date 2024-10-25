'use client'

import React from 'react';

const About = () => {
  return (
    <>
      <p className='font-semibold text-center laptop:text-4xl mobile:text-4xl pb-12 mobile:pt-14 laptop:pt-0'>About me</p>
      <div className="mobile:mb-24 text-gray-100 body-font laptop:mb-36 shadow-xl border-primary border-2 laptop:mx-24 mobile:max-w-screen mobile:mx-6 rounded-2xl">
        <section className="container mx-auto bg-h-100px p-6">
          <div className="flex flex-wrap laptop:m-4 laptop:p-6 text-center text-black mobile:m-0 mobile:justify-center mobile:text-center"> {/* Centering content on mobile */}
            <p className='laptop:text-lg mobile:text-justify'>A dedicated and passionate Computer Engineering student with over 3 years of corporate exposure and 2 years of technical experience. I thrive at the intersection of innovation and leadership, having served as the founding president of the Entrepreneurship Cell at Rajiv Gandhi Institute of Technology, Mumbai. In this role, I adeptly led a team of over 100 students, honing my problem-solving skills and technical acumen.

              My polished communication skills and extensive leadership experience have been pivotal in guiding multiple startups and small-scale companies toward operational excellence and scalability. Beyond my professional endeavors, I possess a profound affinity for music and am currently refining my proficiency in playing the violin, which adds a creative dimension to my technical pursuits.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
