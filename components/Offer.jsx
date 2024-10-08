import React from 'react';

const Offer = () => {
  return (
    <>
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto laptop:px-0 laptop:pt-12 mb-24">
        <h2 className="mb-12 laptop:text-4xl mobile:text-4xl font-semibold text-center leading-tight text-primaryDark">
          What I am good at
        </h2>
        <div className="w-full">
          {/* Change the flex direction for mobile */}
          <div className="flex flex-col w-full mb-10 mobile:flex-col laptop:flex-row laptop:gap-8"> {/* Add gap-8 for spacing */}
            <div className="w-full mb-10 mobile:mb-5 laptop:mb-0 laptop:w-1/2">
              <div className="relative h-full ml-0 mr-0 mobile:mr-0">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-primary rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-black rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-black">Web Development</h3>
                  </div>
                  <p className="mb-2 text-gray-600 text-lg">
                    I specialize in creating responsive, interactive websites using the latest web technologies, including HTML, CSS, JavaScript, React.js, and Next.js. My goal is to deliver user-friendly designs and optimize performance for a seamless browsing experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full laptop:w-1/2 mobile:mt-4">
              <div className="relative h-full ml-0 laptop:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-primary rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-black rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-black">Project Management</h3>
                  </div>
                  <p className="mb-2 text-gray-600 text-lg">
                    With extensive experience in Agile and Scrum methodologies, I manage end-to-end project lifecycles, ensuring projects are delivered on time and within budget while meeting high-quality standards and fostering team collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mb-5 mobile:flex-col laptop:flex-row laptop:gap-8 mobile:mt-0 mobile:pt-0"> {/* Add gap-8 for spacing */}
            <div className="w-full mb-10 mobile:mb-5 laptop:mb-0 laptop:w-1/2">
              <div className="relative h-full ml-0 mr-0 mobile:mr-0">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-primary rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-black rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-black">Content Creation</h3>
                  </div>
                  <p className="mb-2 text-gray-600 text-lg">
                    I create engaging digital content, including blog posts, to help brands connect with their audience and enhance their online presence. My content strategy focuses on SEO optimization and audience engagement.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full mb-10 mobile:mb-5 laptop:mb-0 mobile:mt-4 laptop:w-1/2">
              <div className="relative h-full ml-0 mr-0 mobile:mr-0">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-primary rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-black rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-black">Scalability</h3>
                  </div>
                  <p className="mb-2 text-gray-600 text-lg">
                    I design and develop scalable solutions that grow with your business. Whether it’s building a robust tech infrastructure or enhancing frontend experience, I ensure that systems can deliver what consumers want.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full laptop:w-1/2">
              <div className="relative h-full ml-0 laptop:mr-10 mobile:mt-4">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-primary rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-black rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-black">Machine Learning & Research</h3>
                  </div>
                  <p className="mb-2 text-gray-600 text-lg">
                    My expertise in machine learning and AI research allows me to develop intelligent systems that can analyze data, predict trends, and optimize processes. From data pre-processing to model building, I provide comprehensive solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offer;
