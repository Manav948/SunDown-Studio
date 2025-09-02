import React from "react";

const InfiniteSlider = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-gray-300 py-16 mt-40">
      <div className="animate-slide inline-block">
        <span className="mx-12 text-6xl font-bold text-black">Environments</span>
        <span className="mx-12 text-6xl font-bold text-black">Experience</span>
        <span className="mx-12 text-6xl font-bold text-black">Contact</span>
        {/* Repeat to create continuous loop */}
        <span className="mx-12 text-6xl font-bold text-black">Environments</span>
        <span className="mx-12 text-6xl font-bold text-black">Experience</span>
        <span className="mx-12 text-6xl font-bold text-black">Contact</span>

        <span className="mx-12 text-6xl font-bold text-black">Environments</span>
        <span className="mx-12 text-6xl font-bold text-black">Experience</span>
        <span className="mx-12 text-6xl font-bold text-black">Contact</span>

        <span className="mx-12 text-6xl font-bold text-black">Environments</span>
        <span className="mx-12 text-6xl font-bold text-black">Experience</span>
        <span className="mx-12 text-6xl font-bold text-black">Contact</span>
      </div>
    </div>
  )
}
export default InfiniteSlider;
