import React from 'react';
import aboutPhoto from '../../assets/about.png';
import useAOS from '../useAOS/UseAos';

const AboutText = () => {
  useAOS();

  return (
    <div className='flex-col-1 lg:flex justify-between'>
      {/* left side */}
      <div className="bg-white p-8 rounded-lg max-w-4xl mx-auto" data-aos="fade-right">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Values</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Connected Security:</h3>
            <p className="text-gray-600">
              Network-based visibility, control and security solutions are deployed by leading service providers
              and enterprises to improve network performance, ensure optimal QoE, and deliver value-added security
              services.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Internet Experience:</h3>
            <p className="text-gray-600">
              Online content streaming and gaming through shortest path ensuring latency and gaming experience.
            </p>
          </div>
        </div>
        <div className="mt-6 flex ">
          <div className="flex space-x-2">

            <span className="w-3 h-3 bg-gray-300 rounded-full" data-aos="fade-up"></span>
            <span className="w-3 h-3 bg-red-600 rounded-full" data-aos="fade-down"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full" data-aos="fade-up"></span>
          </div>
        </div>
      </div>

      {/* right side */}
      <div data-aos="fade-left">
        <img src={aboutPhoto} alt="" />
      </div>
    </div>
  );
};

export default AboutText;