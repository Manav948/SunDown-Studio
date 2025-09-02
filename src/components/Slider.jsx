import React from "react";

const InfiniteSlider = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-gray-300 py-4 bg-black">
      <div className="animate-slide inline-block">
        <span className="mx-12 text-4xl font-bold text-white">Environments</span>
        <span className="mx-12 text-4xl font-bold text-white">Experience</span>
        <span className="mx-12 text-4xl font-bold text-white">Contact</span>
        {/* Repeat to create continuous loop */}
        <span className="mx-12 text-4xl font-bold text-white">Environments</span>
        <span className="mx-12 text-4xl font-bold text-white">Experience</span>
        <span className="mx-12 text-4xl font-bold text-white">Contact</span>
      </div>
    </div>
  );
};

export default InfiniteSlider;
