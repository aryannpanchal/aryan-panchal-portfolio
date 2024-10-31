import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Publications = () => {
  return (
    <>
      <p id="publications" className="font-semibold text-center laptop:text-4xl mobile:text-2xl pb-12 mobile:pt-24 laptop:pt-0">My Publications</p>
      
      <div  className="flex justify-center mobile:mx-6">
        <div className="grid gap-12 mobile:grid-cols-1 laptop:grid-cols-3 max-w-7xl">
          
          {/* Project Card 1 */}
          <div className="rounded-lg overflow-hidden shadow-lg ring-2 ring-primaryDark">
            <div className="relative">
              <Image
                className="w-full border-b-2 border-primaryDark"
                src="/copyr.svg"
                alt="Hyperglycemia prediction project image"
                width={400}
                height={300}
                layout="responsive"
                objectFit="cover"
              />
              <div className="absolute top-0 right-0 px-2 py-1 m-2 rounded-md text-sm font-medium bg-primary text-white">
                Published
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">
Systematic Approach in Multiple Disease Prognosis Using Machine Learning Techniques©</h3>
              <p className="text-gray-600 text-sm mb-4">
              Copyright under Government of India · May 6, 2024. I hold a registered copyright for this project titled A Systematic Approach in Multiple Disease Prognosis using Machine Learning, encompassing the title, abstract, system architecture, and logo.
              </p>
            </div>
            <div className='mx-4'>
              <Link href="https://drive.google.com/file/d/1KrjN8LAElyyC9LIubBCQtI0Q3-0ek0tp/view" target="_blank">
                <text>
                  <p className='text-center mobile:mb-4 text-black px-4 py-1 rounded-lg border-primary border-2 font-semibold hover:bg-primaryDark hover:text-white transition'>View copyright</p>
                </text>
              </Link>
            </div>
          </div>
          
          {/* Project Card 2 */}
          <div className="rounded-lg overflow-hidden shadow-lg ring-2 ring-primaryDark">
            <div className="relative">
              <Image
                className="w-full border-b-2 border-primaryDark"
                src="/ijire.svg"
                alt="Chemisphere official website image"
                width={400}
                height={300}
                layout="responsive"
                objectFit="cover"
              />
              <div className="absolute top-0 right-0 px-2 py-1 m-2 rounded-md text-sm font-medium bg-primary text-white">
              Published
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">A Comprehensive Survey of Machine Learning Algorithms for Multi-Disease Prognosis</h3>
              <p className="text-gray-600 text-sm mb-4">
              In this comprehensive analysis, study of various machine learning-based systems for multi-disease prognosis has been conducted. Predictive machine learning algorithms are used extensively in the domain of medical science thereby leading to a considerable improvement in accurately predicting a disease.              </p>
            </div>
            <div className='mx-4'>
              <Link href="https://www.researchgate.net/publication/381723747_A_Comprehensive_Survey_of_Machine_Learning_Algorithms_for_Multi-Disease_Prognosis" target="_blank">
                <text>
                  <p className='text-center mobile:mb-4 text-black px-4 py-1 rounded-lg border-primary border-2 font-semibold hover:bg-primaryDark hover:text-white transition'>View publication</p>
                </text>
              </Link>
            </div>
          </div>
          
          {/* Project Card 3 */}
          <div className="rounded-lg overflow-hidden shadow-lg ring-2 ring-primaryDark">
            <div className="relative">
              <Image
                className="w-full border-b-2 border-primaryDark"
                src="/ijirt.svg"
                alt="Chemisphere app project image"
                width={400}
                height={300}
                layout="responsive"
                objectFit="cover"
              />
              <div className="absolute top-0 right-0 px-2 py-1 m-2 rounded-md text-sm font-medium bg-primary text-white">
              Published
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">
Technical and Management Specific Survey of Medical Systems for Effective Treatment</h3>
              <p className="text-gray-600 text-sm mb-4">
              Hospital management systems provide benefits such as operational flexibility, improved management, quality patient care, tight cost control and profitability. The aim of the project, called the Hospital Management System, is to digitize the hospital's management office to create a very user-friendly, fast and cost-effective software. Manages the collection of patient information, diagnostic details, progress, and more. 
              </p>

              {/* Button Container */}
             
            </div> 
            <div className='mx-4'>
              <Link href="https://www.researchgate.net/publication/381723747_A_Comprehensive_Survey_of_Machine_Learning_Algorithms_for_Multi-Disease_Prognosis" target="_blank">
                <text>
                  <p className='text-center mobile:mb-4 text-black px-4 py-1 rounded-lg border-primary border-2 font-semibold hover:bg-primaryDark hover:text-white transition'>View publication</p>
                </text>
              </Link>
            </div>
          </div>
          
          {/* GitHub Link */}
          <div className='flex justify-center items-center col-span-full mb-36 pt-4'>
          {/* <Link
    target="__blank"
    className="flex text-center items-center justify-center"
    href="https://github.com/aryannpanchal"
  >
    <div className="flex h-10 w-10 items-center justify-center space-x-2 rounded-md border-2 border-primary border-muted bg-muted">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
        <path
          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
        />
      </svg>
    </div>

    <div className="flex items-center">
      <div className="h-4 w-4 border-y-8 border-l-0 border-r-8 border-solid border-primary boder-2 border-y-transparent"></div>
      <div className="flex h-10 items-center rounded-md bg-gray-100 border-primary border-2 px-4 font-medium hover:text-white hover:bg-primaryDark transition">
        View all projects on Github
      </div>
    </div>
  </Link> */}
          </div>

        </div>
      </div>
    </>
  );
};

export default Publications;
