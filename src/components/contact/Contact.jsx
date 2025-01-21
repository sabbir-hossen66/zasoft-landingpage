import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { IoCall } from 'react-icons/io5';
import { MdMessage } from 'react-icons/md';

const Contact = () => {
  return (
    <div className='container mx-auto mt-20'>
      <div className='flex-col-1 p-3 lg:flex justify-evenly '>
        <div className='flex justify-between'>
          <div>
            <h2 className='text-xl font-semibold'>Adress :</h2>
            <p className='text-gray-500'>Plot 11 Road 113/A</p>
            <p className='text-gray-500'>Gulshan Dhaka 1212, Bangladesh  </p>
          </div>
          <div>
            <CiLocationOn className="w-8 h-20 text-gray-500" />
          </div>
        </div>

        <div className='flex justify-between'>
          <div>
            <h2 className='text-xl font-semibold'>Quick Contact:</h2>
            <p className='text-gray-500'>+880 1733-336122</p>
            <p className='text-gray-500'>info@level3carrier.com</p>
          </div>
          <div>
            <MdMessage className="w-8 h-20 text-gray-500" />
          </div>
        </div>

        <div className='flex justify-between'>
          <div>
            <h2 className='text-xl font-semibold'>24x7 Support Center:</h2>
            <p className='text-gray-500'>08000-123-123 (Toll Free)</p>
            <p className='text-gray-500'>soc@level3carrier.com</p>

          </div>
          <div>
            <IoCall className="w-8 h-20 text-gray-500" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;