import React from 'react';
import { motion } from 'framer-motion'; // For animations
import { FaServer, FaCloudUploadAlt, FaNetworkWired, FaGlobe, FaSitemap, FaCogs } from 'react-icons/fa';

const features = [
  { icon: <FaCloudUploadAlt className="text-5xl text-teal-600" />, title: "100% Uptime" },
  { icon: <FaServer className="text-5xl text-teal-600" />, title: "Data Centre" },
  { icon: <FaCogs className="text-5xl text-teal-600" />, title: "Countrywide Reach" },
  { icon: <FaNetworkWired className="text-5xl text-teal-600" />, title: "Extensive Peering" },
  { icon: <FaSitemap className="text-5xl text-teal-600" />, title: "Submarine Cables" },
];

const FeaturesSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-bold text-gray-800">{feature.title}</h3>
            <motion.div
              className="flex justify-center mt-4"
              whileHover={{ y: -5 }}
            >
              <span className="w-10 h-10 text-red-600 font-extrabold text-2xl">&#x2193;</span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
