import React from 'react';

const BlogSkeleton: React.FC = () => {
  return (
    <div className="w-full flex flex-col lg:gap-[4rem] gap-[1rem] md:gap-[2rem] px-[2rem] md:px-[6.5rem] py-[3rem] animate-pulse">
      {/* Title */}
      <div className="h-10 md:h-14 bg-gray-300 rounded w-3/4"></div>

      {/* Subtitle */}
      <div className="h-6 md:h-8 bg-gray-300 rounded w-2/3"></div>

      {/* Paragraphs */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>

      {/* Heading */}
      <div className="h-8 md:h-10 bg-gray-300 rounded w-1/2 mt-6"></div>

      {/* Paragraphs */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-4/5"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      </div>

      {/* Table Skeleton */}
      <div className="overflow-x-auto w-full h-full mt-6">
        <div className="min-w-full border border-gray-300 rounded">
          {/* Table header */}
          <div className="flex border-b border-gray-300">
            <div className="flex-1 h-20 bg-gray-300 m-1 rounded"></div>
            <div className="flex-1 h-20 bg-gray-300 m-1 rounded"></div>
            <div className="flex-1 h-20 bg-gray-300 m-1 rounded"></div>
            <div className="flex-1 h-20 bg-gray-300 m-1 rounded"></div>
          </div>
          {/* Table rows */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex border-b border-gray-200 last:border-0">
              <div className="flex-1 h-20 bg-gray-300 m-1 rounded"></div>
              <div className="flex-1 h-20 bg-gray-300 m-1 rounded"></div>
              <div className="flex-1 h-20 bg-gray-300 m-1 rounded"></div>
              <div className="flex-1 h-20 bg-gray-300 m-1 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* More paragraphs */}
      <div className="space-y-2 mt-6">
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
