import React from "react";

const IconTabs = () => {
  return (
    <div className="flex justify-center flex-wrap gap-3 p-4">
      {/* Telecom */}
      <div className="flex flex-row items-center border rounded-md shadow-sm px-3 py-1 sm:px-4 sm:py-2 bg-white hover:shadow-md transition gap-2">
        <span className="text-base sm:text-xl text-blue-500">
          📱
        </span>
        <span className="text-xs sm:text-sm text-gray-700 font-medium">Telecom</span>
      </div>

      {/* Carrier */}
      <div className="flex flex-row items-center border rounded-md shadow-sm px-3 py-1 sm:px-4 sm:py-2 bg-white hover:shadow-md transition gap-2">
        <span className="text-base sm:text-xl text-blue-500">
          🌐
        </span>
        <span className="text-xs sm:text-sm text-gray-700 font-medium">Carrier</span>
      </div>

      {/* Peering */}
      <div className="flex flex-row items-center border rounded-md shadow-sm px-3 py-1 sm:px-4 sm:py-2 bg-white hover:shadow-md transition gap-2">
        <span className="text-base sm:text-xl text-blue-500">
          🤝
        </span>
        <span className="text-xs sm:text-sm text-gray-700 font-medium">Peering</span>
      </div>

      {/* Technology */}
      <div className="flex flex-row items-center border rounded-md shadow-sm px-3 py-1 sm:px-4 sm:py-2 bg-white hover:shadow-md transition gap-2">
        <span className="text-base sm:text-xl text-blue-500">
          💻
        </span>
        <span className="text-xs sm:text-sm text-gray-700 font-medium">Technology</span>
      </div>
    </div>
  );
};

export default IconTabs;
