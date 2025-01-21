import React from 'react';

const Title = ({ title, subtitle }) => {
  return (
    <>
      <div className="relative text-center">
        {/* Title */}
        <h3 className="text-gray-600 font-bold text-6xl absolute inset-0 flex items-center justify-center opacity-10 -mt-2">
          {title}
        </h3>

        {/* Subtitle */}
        <h2 className="text-2xl font-bold text-black relative z-10">
          {subtitle}
        </h2>

        {/* Red Line */}

      </div>
      <div className="w-16 h-1 bg-red-600 mt-3 mx-auto"></div>

    </>

  );
};

export default Title;