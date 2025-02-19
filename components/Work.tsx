import React from 'react';

const Work = () => {
  return (
    <>
      <p className="font-semibold text-center text-2xl mobile:text-3xl laptop:text-4xl pb-12 laptop:pt-8 z-100">Work experience</p>
      <div className="container mobile:pb-8 mx-auto w-full h-full mb-12 laptop:mb-36">
        <div className="relative wrap overflow-hidden p-4 mobile:p-8 mobile:px-0 tablet:p-10 h-full z-0">
          <div className="WorkDiv border-2-2 absolute border-opacity-20 border-primary h-full border z-0"></div>
          
          {/* Project Intern Experience */}
          <div className="mb-8 flex flex-col mobile:flex-row justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12 hidden mobile:block"></div>
            <div className="z-5 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white z-5">1</h1>
            </div>
            <div className="order-1 bg-primary rounded-lg shadow-xl w-full mobile:w-5/12 px-4 py-4">
              <h3 className="font-bold text-white text-lg mobile:text-sm laptop:text-lg">Project Intern <br /> <span className="font-thin">Scanbo.com</span></h3>
            </div>
          </div>

          {/* Startup Engineer Experience */}
          <div className="mb-8 flex flex-col mobile:flex-row-reverse justify-between items-center w-full left-timeline">
            <div className="order-1 w-5/12 hidden mobile:block"></div>
            <div className="z-5 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 bg-primary rounded-lg shadow-xl w-full mobile:w-5/12 px-4 py-4">
              <h3 className="font-bold text-white text-lg mobile:text-sm laptop:text-lg text-right">Startup Engineer <br /><span className="font-thin text-right block">Chemisphere.in</span></h3>
            </div>
          </div>

          {/* Founding President Experience */}
          <div className="mb-8 flex flex-col mobile:flex-row justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12 hidden mobile:block"></div>
            <div className="z-5 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-primary rounded-lg shadow-xl w-full mobile:w-5/12 px-4 py-4">
              <h3 className="font-bold text-white text-lg mobile:text-sm laptop:text-lg">Founding President<br /><span className="font-thin">E-Cell, RGIT</span></h3>
            </div>
          </div>

          {/* Data Science Intern Experience */}
          <div className="mb-8 flex flex-col mobile:flex-row-reverse justify-between items-center w-full left-timeline">
            <div className="order-1 w-5/12 hidden mobile:block"></div>
            <div className="z-5 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
            </div>
            <div className="order-1 bg-primary rounded-lg shadow-xl w-full mobile:w-5/12 px-4 py-4">
              <h3 className="font-bold text-white text-lg mobile:text-sm laptop:text-lg text-right">Data Science Intern <br /> <span className="font-thin text-right block">AICTE</span></h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
