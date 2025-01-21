import React from 'react';
import aboutPhoto from '../../assets/about.png';

const AboutText = () => {
  return (
    <div className='flex-col-1   lg:flex justify-between text-center'>
      {/* left side */}
      <div>hi</div>

      {/* right side */}
      <div>
        <img src={aboutPhoto} alt="" />
      </div>
    </div>
  );
};

export default AboutText;