import React from 'react';

const testimonialsData = [
  {
    id: 1,
    name: "Chandan Biswas",
    designation: "Founder & CEO, Chemisphere",
    image: "/chandancut.svg", // Replace with your image path
    text: "Aryan Panchal has driven growth at Chemisphere through leadership in tech development and community expansion.",
  },
  {
    id: 2,
    name: "Dr. Ajay Prabhakar",
    designation: "Senior Consultant - United Nations",
    image: "/prabhakarsir.svg", // Replace with your image path
    text: "Aryan excels in event management, strategic planning, and technical proficiency, inspiring teams with his leadership.",
  },
  {
    id: 3,
    name: "Dr. Sharmila Rathod",
    designation: "Associate Professor, Dept.of CE, RGIT",
    image: "/sharmila-maam.png", // Replace with your image path
    text: "Aryan Panchal has demonstrated exceptional research aptitude and academic excellence, consistently producing high-quality work",
  },
  // Add more testimonials if needed
];

const Testimonials = () => {
  return (
    <section id='testimonials' className='bg-gray-100 mobile:pb-14'>
      <h1 className='font-semibold text-center laptop:text-4xl mobile:text-2xl pb-12 text-primary'>Testimonials</h1>
      <div className='container mx-auto'>
        <div className="flex flex-col laptop:flex-row laptop:space-x-8 laptop:justify-center">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="max-w-md mx-auto mb-8">
              <div className="relative overflow-hidden bg-gradient-to-r from-primary to-primaryDark rounded-xl shadow-2xl p-8 text-white">
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-12"></div>
                <div className="relative z-10">
                  <svg className="w-12 h-12 mb-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-xl mobile:text-sm font-medium mb-12">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center">
                    {/* <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4" /> */}
                    <div>
                      <h4 className="font-semibold mobile:text-sm ">{testimonial.name}</h4>
                      <p className="text-gray-200 mobile:text-sm ">{testimonial.designation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
