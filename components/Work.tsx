import React from 'react';

const Work = () => {
  return (
    <>
      <p className='font-semibold text-center laptop:text-4xl mobile:text-2xl pb-12 mobile:pt-24 laptop:mt-0 laptop:pt-8 z-100 '>Work experience</p>
      <div className="container mx-auto w-full h-full laptop:mb-36">
        <div className="relative wrap overflow-hidden p-10 h-full z-0">
          <div className="WorkDiv border-2-2 absolute border-opacity-20 border-primary h-full border z-0"></div>
          
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-5 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white z-5">1</h1>
            </div>
            <div className="order-1 bg-primary rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">Project Intern, Scanbo.com</h3>
              <p className="text-sm leading-snug tracking-wide text-white">
                Developing deep learning models for hyperglycemia detection using ECG and PPG signals. Enhancing model accuracy and robustness through data preprocessing and analysis, contributing to healthcare AI advancements.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-5 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 bg-primary rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">Startup Engineer, Chemisphere.in</h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white">
                Leading the strategic design and development of Chemisphere's website and application. Boosted social media engagement to over 250K members and managed intern training and skill development.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-5 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-primary rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">Founding President, Entrepreneurship Cell, RGIT</h3>
              <p className="text-sm leading-snug tracking-wide text-white">
                Founded and led the E-Cell at RGIT, driving innovation and a startup ecosystem with over 100 students. Guided students in entrepreneurial ventures, fostering growth and a vibrant business culture.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-5 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
            </div>
            <div className="order-1 bg-primary rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">Data Science Intern, AICTE</h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white">
                Engineered a machine learning model to forecast car prices, including data cleaning, preprocessing, and linear regression. Developed a user interface with Flask and an interactive landing page using HTML, CSS, and JavaScript, with visualizations in Matplotlib.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
