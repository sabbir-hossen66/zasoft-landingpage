import React from 'react';
import Title from '../../ui/title/Title';
import { services } from '../../ui/data';

const Services = () => {
  return (
    <div className='mt-20'>
      <Title title='OUR SERVICES' subtitle={'OUR SERVICES'} />

      <div className="bg-white mt-10">
        <div className=" text-center">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-5 shadow rounded-lg hover:shadow-xl transition"
              >
                <div className="text-4xl text-teal-500 mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
                <div className="mt-4">
                  <div className="text-gray-500 text-xl">⬇️</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Services;