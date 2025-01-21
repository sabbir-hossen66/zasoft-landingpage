import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ServiceImg = () => {
  return (
    <div className="relative bg-cover bg-center h-[400px] sm:h-[500px] lg:h-[600px]" style={{ backgroundImage: "url('https://i.ibb.co.com/Rpmppb0/pexels-senanur-ulusoy-182138396-15924271.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4 sm:px-8">
        {/* Quote Icon */}
        <FaQuoteLeft className="text-white text-4xl sm:text-5xl mb-4" />

        {/* Testimonial Text */}
        <p className="text-white text-sm sm:text-lg lg:text-xl max-w-3xl leading-relaxed">
          We chose Level3 Carrier Limited because they were able to bring IP transit service under one umbrella as a managed service while lowering our costs and setting us up to achieve even more using the game-changing productivity and video capabilities enabled by our powerful new network.
        </p>

        {/* Divider */}
        <div className="flex justify-center items-center gap-2 mt-4">
          <span className="block w-6 h-[2px] bg-red-500"></span>
          <span className="block w-6 h-[2px] bg-gray-300"></span>
          <span className="block w-6 h-[2px] bg-gray-500"></span>
        </div>
      </div>
    </div>
  );
};

export default ServiceImg;