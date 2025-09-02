import React from "react";

const InfiniteSlider = () => {
  return (
    <div className="w-full overflow-hidden bg-black py-4">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Repeated text */}
        <span className="mx-10 text-4xl font-bold text-white">
          environments
        </span>
        <span className="mx-10 text-4xl font-bold text-white">
          experience
        </span>
        <span className="mx-10 text-4xl font-bold text-white">
          contact
        </span>
        {/* duplicate for smooth loop */}
        <span className="mx-10 text-4xl font-bold text-white">
          environments
        </span>
        <span className="mx-10 text-4xl font-bold text-white">
          experience
        </span>
        <span className="mx-10 text-4xl font-bold text-white">
          contact
        </span>
      </div>
    </div>
  );
};

export default InfiniteSlider;
