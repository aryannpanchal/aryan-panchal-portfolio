import React from 'react';

const testimonialsData = [
  {
    id: 1,
    name: "Chandan Biswas",
    designation: "Founder & CEO, Chemisphere",
    image: "/chandancut.svg", // Replace with your image path
    text: "Aryan Panchal, Startup Engineer at Chemisphere, has significantly contributed to the company's growth. He led the development of the website and app, improved SEO, and expanded the social community to over 250,000. His leadership skills and technical expertise make him a valuable asset for future opportunities in technology and techno-management.",
  },
  // Add more testimonials if needed
];

const Testimonials = () => {
  return (
    <section className='laptop:h-fit bg-black py-14'>
      <p className='font-semibold text-center laptop:text-4xl mobile:text-4xl pb-12 text-white'>Testimonials</p>
      <div className='container mx-auto'>
        {testimonialsData.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`flex flex-col laptop:flex-row items-center mb-8 ${
              index % 2 === 0 ? 'laptop:flex-row' : 'laptop:flex-row-reverse'
            }`}
          >
            <div className='w-full laptop:w-1/2 flex justify-center mb-4 laptop:mb-0'>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className='object-cover h-[400px] w-[400px] rounded-md'
              />
            </div>
            <div className='w-full laptop:w-1/2 p-4 space-y-4 text-center laptop:text-left'>
              <p className='text-white font-semibold laptop:text-3xl'>{testimonial.name}</p>
              <p className='text-white font-medium laptop:text-xl'>{testimonial.designation}</p>
              <p className='text-gray-200 laptop:text-lg'>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
