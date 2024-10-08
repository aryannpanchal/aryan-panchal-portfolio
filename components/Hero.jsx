import React from 'react';
import Image from 'next/image'; // If using an image from the public directory, otherwise use an actual SVG component

const HeroSection = () => {
  return (
    <>
    <div className="flex mobile:flex-col  laptop:flex-row items-center justify-between w-full mobile:my-24 mobile:mb-[230px] laptop:mt-0 laptop:mb-12 h-screen px-4 mobile:px-8 laptop:px-16 bg-white">
      
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center items-start space-y-4 mobile:pr-8 ">
        <h1 className="text-4xl mobile:text-5xl font-bold text-gray-900">
          Hello, I am Aryan Panchal
        </h1>
        <h2 className="text-xl mobile:text-2xl text-gray-700">
          Welcome to my portfolio
        </h2>
        <p className="text-md mobile:text-lg text-gray-600">
        As a Computer Engineer with over 3 years of corporate exposure and 2 years of technical experience, I have exhibited problem
solving skills and technical acumen. My polished communication skills, coupled with extensive leadership experience, have been
pivotal in propelling multiple startups and small-scale companies toward operational excellence and scalability. 
        </p>
        <button className="bg-white text-black px-4 py-1 rounded-lg border-primary border-2 font-semibold hover:bg-primaryDark hover:text-white transition">
          Open resume 📄
        </button>
      </div>

      {/* Right Section (SVG Image) */}
      <div className="flex-1 mt-8 mobile:mt-0 flex justify-center items-center mobile:order-2 mobile:py-12">
        {/* Example of using an Image component. You can replace this with actual SVG or an img tag if needed. */}
        <Image
          src="/aryan portfolio.svg" // Ensure your SVG image is in the public directory
          alt="Hero SVG Image"
          width={600}
          height={600}
        
        />
      </div>
    </div>

    <section className="relative bg-primaryDark laptop:h-[1000px] rounded-b-[30px] max-w-screen overflow-hidden laptop:-translate-y-40">
      {/* SVG Wave */}
      <svg
        className="absolute top-0 left-0 w-full h-24 z-10" // Adjusted height for the wave
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="white" // Change this color for different wave colors
          d="M0,192L30,197.3C60,203,120,213,180,213.3C240,213,300,203,360,192C420,181,480,171,540,165.3C600,160,660,160,720,144C780,128,840,96,900,96C960,96,1020,128,1080,149.3C1140,171,1200,181,1260,160C1320,139,1380,85,1410,64L1440,43L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>

      {/* Text Content */}
      <div className="relative flex flex-col items-center justify-start h-full text-center p-8">
        <h1 className="text-5xl font-bold text-white mt-24">Explore</h1>
        {/* <p className="mt-4 text-lg text-gray-300">Explore my work and get in touch!</p> */}
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      {/* Card 1 */}
      <div className="p-4 md:w-1/2 laptop:w-1/3 ">
        <div className="h-full  border-opacity-60 rounded-lg overflow-hidden border-2 border-white">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/projectcard.svg" alt="blog" />
          <div className="p-6">
            <h2 className="tracking-widest text-lg title-font font-thin text-white mb-1">PROJECTS</h2>
            <h1 className="tracking-normal text-lg font-normal text-gray-100 mt-8 mb-8"><span className='font-thin italic'>Featured<br /></span>Innovative Strategies in Multi-Disease Prognosis using Machine Learning</h1>
            <p className="leading-relaxed mb-3 text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center justify-center mt-8 flex-wrap">
              <a href='/' className="bg-white text-black px-4 py-1 rounded-lg border-primary hover:bg-primaryDark hover:text-white transition border-2 font-semibold text-ce">View all projects
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="p-4 md:w-1/2 laptop:w-1/3 ">
        <div className="h-full  border-opacity-60 rounded-lg overflow-hidden border-2 border-white">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/paperSS.svg" alt="blog" />
          <div className="p-6">
            <h2 className="tracking-widest text-lg title-font font-thin text-white mb-1">PUBLICATIONS</h2>
            <h1 className="tracking-normal text-lg font-normal text-gray-100 mt-8 mb-8"><span className='font-thin italic'>Featured<br /></span>Innovative Strategies in Multi-Disease Prognosis using Machine Learning</h1>
            <p className="leading-relaxed mb-3 text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center justify-center mt-8 flex-wrap">
              <a href='/' className="bg-white text-black px-4 py-1 rounded-lg border-primary hover:bg-primaryDark hover:text-white transition border-2 font-semibold text-ce">View all publications
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="p-4 md:w-1/2 laptop:w-1/3 ">
        <div className="h-full  border-opacity-60 rounded-lg overflow-hidden border-2 border-white">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/chemisphereSS.svg" alt="blog" />
          <div className="p-6">
            <h2 className="tracking-widest text-lg title-font font-thin text-white mb-1">WORK EXPERIENCE</h2>
            <h1 className="tracking-normal text-lg font-normal text-gray-100 mt-8 mb-8"><span className='font-thin italic'>Featured<br /></span>Innovative Strategies in Multi-Disease Prognosis using Machine Learning</h1>
            <p className="leading-relaxed mb-3 text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center justify-center mt-8 flex-wrap">
              <a href='/' className="bg-white text-black px-4 py-1 rounded-lg border-primary hover:bg-primaryDark hover:text-white transition border-2 font-semibold text-ce">View all experiences
              </a>
            </div>
          </div>
        </div>
      </div>

    

      {/* Add more cards as needed */}
    </div>
  </div>
</section>

      </div>
    </section>
    </>
  );
};

export default HeroSection;
