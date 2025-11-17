import React from 'react';

interface HeroSectionSkeletonProps {}

function HeroSectionSkeleton({}: HeroSectionSkeletonProps) {
  return (
    <div className="w-full h-full animate-pulse p-4 lg:p-0 max-h-[44rem] flex flex-col lg:flex-col gap-6">
      {/* Title */}
      <div className="bg-gray-300 h-10 sm:h-12 w-3/5 sm:w-2/5 rounded-md"></div>

      {/* Sub-title */}
      <div className="bg-gray-200 h-6 sm:h-8 w-2/3 sm:w-1/2 rounded-md"></div>

      <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-8 mt-4 lg:mt-[3.5rem]">
        {/* Left content */}
        <div className="flex-1 flex flex-col justify-between gap-4">
          {/* Description */}
          <div className="bg-gray-200 h-24 sm:h-32 w-full max-w-full lg:max-w-[35rem] rounded-md"></div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <div className="bg-gray-300 h-14 sm:h-16 w-40 sm:w-48 rounded-md"></div>
            <div className="bg-gray-300 h-14 sm:h-16 w-40 sm:w-48 rounded-md"></div>
          </div>

          {/* Author info */}
          <div className="flex flex-col gap-2 w-full">
            {Array(3)
              .fill(null)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-2"
                >
                  <div className="bg-gray-300 h-4 sm:h-5 w-full sm:w-[15rem] rounded-md"></div>
                  <div className="bg-gray-200 h-4 sm:h-5 w-full sm:w-[10rem] rounded-md"></div>
                </div>
              ))}
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 rounded-2xl bg-gray-300 h-56 sm:h-72 md:h-80 w-full md:max-w-[39.5625rem] overflow-hidden"></div>
      </div>
    </div>
  );
}

export default HeroSectionSkeleton;
