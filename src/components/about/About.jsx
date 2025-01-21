import React from 'react';
import Title from '../../ui/title/Title';
import AboutText from '../../ui/aboutText/AboutText';

const About = () => {
  return (
    <div className=' mt-20'>
      <Title title="STORY ABOUT US" subtitle="WHO WE ARE" />
      <div className='container mx-auto mt-10'>
        <AboutText />
      </div>

    </div>
  );
};

export default About;