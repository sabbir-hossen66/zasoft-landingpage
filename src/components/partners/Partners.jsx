import React from 'react';
import IconTabs from '../../ui/IconTabs';
import useAOS from '../../ui/useAOS/UseAos';

const Partners = () => {
  useAOS();
  return (
    <div>
      <div className="container mx-auto mt-20 px-4">
        {/* First Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start lg:gap-10">
          {/* Heading Section */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              PARTNERS BEHIND OUR <br className="hidden md:block" /> SUCCESS
            </h2>
            <div className="w-12 h-1 bg-red-500 mt-2 mx-auto lg:mx-0"></div>
          </div>

          {/* Icon Tabs */}
          <div className="mt-6 lg:mt-0">
            <IconTabs />
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start mt-10 lg:mt-16 gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="text-center lg:text-left" data-aos="zoom-in">
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Through our partners’ best in technology, solve <br className="hidden md:block" />
              your unique, global business needs whether you're a small <br className="hidden md:block" />
              to medium or enterprise business.
            </p>
            <h2 className="text-red-500 font-semibold text-md mt-5 cursor-pointer hover:underline">
              Join With Us
            </h2>
          </div>

          {/* Image Section */}
          <div className="flex justify-center" data-aos="zoom-in-down">
            <img
              src="https://i.ibb.co.com/VBHMWrW/photo.png"
              alt=""
              className="w-full max-w-xs md:max-w-sm lg:max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
