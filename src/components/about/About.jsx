import React from 'react';
import Title from '../../ui/title/Title';
import AboutText from '../../ui/aboutText/AboutText';
import FeaturesSection from '../featuresSection/FeaturesSection';

const About = () => {
  return (
    <div className=' mt-20'>
      <Title title="STORY ABOUT US" subtitle="WHO WE ARE" />
      <div className='container mx-auto mt-10'>
        <AboutText />
        <FeaturesSection />
      </div>

    </div>
  );
};

export default About;