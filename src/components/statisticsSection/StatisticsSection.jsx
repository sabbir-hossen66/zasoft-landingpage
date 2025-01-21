import React from 'react';

const stats = [
  { number: '100', label: 'Million Users' },
  { number: '4', label: 'Major Telecom Operators' },
  { number: '300+', label: 'ISPs' },
  { number: '100+', label: 'Cross Connect & Peering' },
];

const StatisticsSection = () => {
  return (
    <div className="relative bg-cover bg-center text-white py-16" style={{ backgroundImage: "url('https://i.ibb.co.com/BtwLCtP/pexels-pixabay-235986.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative container mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">BEST IN THE MARKET? NUMBERS WILL SPEAK</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <span className="text-6xl font-extrabold text-red-600">{stat.number}</span>
              <p className="text-lg font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
