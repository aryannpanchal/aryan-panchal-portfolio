
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Projects = () => {
  return (
    <>
      <p className="font-semibold text-center laptop:text-4xl mobile:text-2xl pb-12 mobile:pt-24 laptop:pt-0">My Projects</p>
      
      <div className="flex justify-center mobile:mx-6 pb-36">
        <div className="grid gap-12 mobile:grid-cols-1 laptop:grid-cols-3 max-w-7xl">
          
          {/* Project Card 1 */}
          <div className="rounded-lg overflow-hidden shadow-lg ring-2 ring-primaryDark">
            <div className="relative">
              <Image
                className="w-full border-b-2 border-primaryDark"
                src="/proj img.svg"
                alt="Hyperglycemia prediction project image"
                width={400}
                height={300}
                layout="responsive"
                objectFit="cover"
              />
              <div className="absolute top-0 right-0 px-2 py-1 m-2 rounded-md text-sm font-medium bg-green-500 text-white">
                On-going
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">Hyperglycemia prediction using ECG & PPG signals via deep learning</h3>
              <p className="text-gray-600 text-sm mb-4">
                Developing a deep learning model for hyperglycemia detection using ECG and PPG signals. Collaborated with a multidisciplinary team to design and evaluate models with Python and TensorFlow.
              </p>
            </div>
          </div>
          
          {/* Project Card 2 */}
          <div className="rounded-lg overflow-hidden shadow-lg ring-2 ring-primaryDark">
            <div className="relative">
              <Image
                className="w-full border-b-2 border-primaryDark"
                src="/web chemi.svg"
                alt="Chemisphere official website image"
                width={400}
                height={300}
                layout="responsive"
                objectFit="cover"
              />
              <div className="absolute top-0 right-0 px-2 py-1 m-2 rounded-md text-sm font-medium bg-primary text-white">
                Completed
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">Chemisphere official website</h3>
              <p className="text-gray-600 text-sm mb-4">
                Curated and developed a website for Chemisphere.in from scratch using Next.js and Tailwind CSS, deploying it successfully into production.
              </p>
            </div>
            <div className='mx-4'>
              <Link href="https://chemisphere.in" target="_blank">
                <text>
                  <p className='text-center mobile:mb-4  text-black px-4 py-1 rounded-lg border-primary border-2 font-semibold hover:bg-primaryDark hover:text-white transition'>Visit website 🌏︎</p>
                </text>
              </Link>
            </div>
          </div>
          
          {/* Project Card 3 */}
          <div className="rounded-lg overflow-hidden shadow-lg ring-2 ring-primaryDark">
            <div className="relative">
              <Image
                className="w-full border-b-2 border-primaryDark"
                src="/app chemi2.svg"
                alt="Chemisphere app project image"
                width={400}
                height={300}
                layout="responsive"
                objectFit="cover"
              />
              <div className="absolute top-0 right-0 px-2 py-1 m-2 rounded-md text-sm font-medium bg-primary text-white">
                Completed
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">Chemisphere app</h3>
              <p className="text-gray-600 text-sm mb-4">
                Served as the project manager for the Chemisphere app, overseeing its development and successful release on the Google Play Store & App Store.
              </p>

              {/* Button Container */}
              <div className="flex flex-row justify-center laptop:space-y-0 gap-4 laptop:space-x-4">
                {/* App Store Button */}
                <Link href='/' type="button" className="flex items-center justify-center w-48 h-14 text-black bg-transparent border border-black rounded-lg hover:bg-gray-800 hover:text-white transition duration-300">
                  <div className="mr-2">
                    <svg viewBox="0 0 384 512" width="20" className="fill-current">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="-mt-1 font-sans text-lg font-semibold">App Store</div>
                  </div>
                </Link>

                {/* Google Play Button */}
                <Link href='https://play.google.com/store/apps/details?id=com.chemisphereApp.app' type="button" className="flex items-center justify-center w-48 h-14 text-white bg-black rounded-lg hover:bg-transparent hover:border-primaryDark border-2 hover:text-black transition duration-300">
                  <div className="mr-2">
                    <svg viewBox="30 336.7 120.9 129.2" width="20">
                      <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z" />
                      <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z" />
                      <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z" />
                      <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs">GET IT ON</div>
                    <div className="-mt-1 font-sans text-lg font-semibold">Google Play</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Projects;
