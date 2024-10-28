import React from 'react';

const Testimonials = () => {
  return (
    <section id='testimonials' className='bg-gray-100 mobile:pb-14'>
      <h1 className='font-semibold text-center laptop:text-4xl mobile:text-2xl pb-12 text-primary'>Testimonials</h1>
      <div className='container mx-auto'>
        <div className="grid gap-8 laptop:grid-cols-3 mobile:grid-cols-1">
          {/* Testimonial Card 1 */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative overflow-hidden bg-gradient-to-r from-primary to-primaryDark rounded-xl shadow-2xl p-8 text-white flex flex-col h-full">
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-12"></div>
              <div className="relative z-10 flex-grow">
                <svg className="w-12 h-12 mb-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-sm mb-12">
                  Aryan Panchal has driven growth at Chemisphere through leadership in tech development and community expansion.
                </p>
                <div className="flex items-center">
                  <img src="/chandancut.svg" alt="Chandan Biswas" className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold mobile:text-sm">Chandan Biswas</h4>
                    <p className="text-gray-200 mobile:text-sm">Founder & CEO, Chemisphere</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative overflow-hidden bg-gradient-to-r from-primary to-primaryDark rounded-xl shadow-2xl p-8 text-white flex flex-col h-full">
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-12"></div>
              <div className="relative z-10 flex-grow">
                <svg className="w-12 h-12 mb-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-sm mb-12">
                  Aryan excels in event management, strategic planning, and technical proficiency, inspiring teams with his leadership.
                </p>
                <div className="flex items-center">
                  <img src="/prabhakarsir.svg" alt="Dr. Ajay Prabhakar" className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold mobile:text-sm">Dr. Ajay Prabhakar</h4>
                    <p className="text-gray-200 mobile:text-sm">Senior Consultant - United Nations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Card 3 */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative overflow-hidden bg-gradient-to-r from-primary to-primaryDark rounded-xl shadow-2xl p-8 text-white flex flex-col h-full">
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-12"></div>
              <div className="relative z-10 flex-grow">
                <svg className="w-12 h-12 mb-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-sm mb-12">
                  Aryan Panchal has demonstrated exceptional research aptitude and academic excellence, consistently producing high-quality work.
                </p>
                <div className="flex items-center pt-[10px]">
                  <img src="/sharmila-maam.png" alt="Dr. Sharmila Rathod" className="w-10 h-10 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold mobile:text-sm">Dr. Sharmila Rathod</h4>
                    <p className="text-gray-200 mobile:text-sm">Associate Professor, Dept. of CE, RGIT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add more testimonial cards here as needed */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
