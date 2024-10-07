import React from 'react';

const testimonialsData = [
  {
    id: 1,
    name: "Chandan Biswas",
    designation: "Founder & CEO, Chemisphere in",
    image: "/chandancut.svg", // Replace with your image path
    text: "Aryan Panchal, Startup Engineer at Chemisphere, has significantly contributed to the company's growth. He led the development of the website and app, improved SEO, and expanded the social community to over 250,000. His leadership skills and technical expertise make him a valuable asset for future opportunities in technology and techno-management.",
  },
//   {
//     id: 2,
//     name: "Jane Smith",
//     designation: "",
//     image: "/path/to/image2.jpg", // Replace with your image path
//     text: "A wonderful experience that exceeded my expectations!",
//   },
//   {
//     id: 3,
//     name: "Alex Johnson",
//     designation: "",
//     image: "/path/to/image3.jpg", // Replace with your image path
//     text: "I learned so much and had a great time.",
//   },
];

const Testimonials = () => {
  return (
    <section className='laptop:h-fit bg-black py-14'>
      <p className='font-semibold text-center laptop:text-4xl mobile:text-4xl pb-12 text-white'>Testimonials</p>
      <div className='container mx-auto'>
        {testimonialsData.map((testimonial, index) => (
          <div key={testimonial.id} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className='w-1/2 flex justify-center'>
              <img src={testimonial.image} alt={testimonial.name} className='object-cover h-[400px] w-[400px] rounded-md' /> {/* Square image */}
            </div>
            <div className='w-1/2 p-4 space-y-4'>
              <p className='text-white font-semibold laptop:text-3xl'>{testimonial.name}</p>
              <p className='text-white font-medium laptop:text-xl'>{testimonial.designation}</p>
              <p className='text-gray-200 laptop:text-lg'>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
