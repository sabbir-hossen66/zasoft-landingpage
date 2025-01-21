import React, { useState } from 'react';
import Title from '../../ui/title/Title';
import { services } from '../../ui/data';
import { FaArrowAltCircleUp, FaRegArrowAltCircleDown } from 'react-icons/fa';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <div className="mt-20 px-4 md:px-8 lg:px-16">
      <Title title="OUR SERVICES" subtitle="OUR SERVICES" />

      <div className="bg-white mt-10">
        <div className="text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center p-5 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300 ease-in-out h-full"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {hoveredCard === index ? (
                  // Hover content
                  <div className="absolute inset-0 bg-white text-gray-700 p-5 rounded-lg shadow-lg flex flex-col justify-between items-center">
                    <p className="text-sm text-center">
                      Direct Access to a worldwide network structure and a team of proficient experts is what allows for pro-active network management, faster fault response times, and higher controlling power over our traffic.
                    </p>

                    <FaArrowAltCircleUp className="text-red-500 mt-4 text-2xl" />
                  </div>
                ) : (

                  <>
                    <div className="text-4xl text-teal-500 mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {service.description}
                    </p>
                    <div className="mt-auto text-2xl text-gray-400">
                      <FaRegArrowAltCircleDown />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Services;
