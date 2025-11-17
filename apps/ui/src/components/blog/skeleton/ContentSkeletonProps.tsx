import React from 'react';

interface ContentSkeletonProps {}

function ContentSkeleton({}: ContentSkeletonProps) {
  return (
    <div className="w-full px-[2rem]  xl:px-[6.5rem] py-8 md:min-h-[42rem] h-full blog-bg-color-f1 lg:mt-14 animate-pulse">
      {/* Title & Subtitle */}
      <div className="flex flex-col lg:gap-4 items-start justify-start mb-6">
        <div className="bg-gray-300 h-10 w-1/3 lg:w-1/5 rounded-md mb-2"></div>
        <div className="bg-gray-200 h-6 w-2/3 lg:w-1/2 rounded-md"></div>
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-between gap-6 lg:gap-8">
        {/* LEFT LIST */}
        <div className="flex-1 flex flex-col gap-4 max-w-full lg:max-w-[48rem]">
          {Array(5)
            .fill(null)
            .map((_, idx) => (
              <div key={idx} className="w-full relative">
                <div className="bg-gray-300 mb-5 h-8 sm:h-12 w-3/4 rounded-md py-3"></div>
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-400"></span>
              </div>
            ))}
        </div>

        {/* RIGHT RECENT POSTS */}
        <div className="flex-1 max-w-full lg:max-w-[24rem] flex flex-col gap-4">
          <div className="bg-gray-300 h-6 w-1/2 rounded-md mb-2"></div>

          {Array(3)
            .fill(null)
            .map((_, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 bg-white rounded-xl gap-4"
              >
                {/* Text */}
                <div className="flex-1 flex flex-col gap-2 w-full md:w-[15.6875rem]">
                  <div className="bg-gray-200 h-4 w-1/2 rounded-md"></div>
                  <div className="bg-gray-300 h-5 w-full rounded-md"></div>
                </div>

                {/* Image */}
                <div className="w-full sm:w-[6.125rem] h-[5.375rem] rounded-lg bg-gray-300 overflow-hidden"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ContentSkeleton;
