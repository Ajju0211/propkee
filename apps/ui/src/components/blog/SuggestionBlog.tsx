import { PostItem } from '@/types/blog-types';
import { useRouter } from 'next/navigation';
import React from 'react';

function SuggestionBlog({ otherPosts }: { otherPosts: PostItem[] }) {
  const router = useRouter();

  // Debug: Check if data exists
  console.log('otherPosts:', otherPosts);

  // Handle empty or undefined data
  if (!otherPosts || otherPosts.length === 0) {
    return <></>;
  }

  return (
    <div className="w-full md:py-[5.5rem] py-4 bg-[#F9F9FB] h-full flex flex-col items-start justify-start px-[1rem] xl:px-[6.5rem]">
      <span className="blog-title">Trending Blogs</span>
      <p className="blog-subTitle mt-[0.62rem]">
        Lorem ipsum dolor sit amet consectetur. In.
      </p>

      <div className="w-full h-full mt-[2rem] md:mt-[3.5rem] overflow-hidden">
        <div className="w-full flex flex-col sm:flex-row items-start hide-scrollbar justify-start gap-4 h-full overflow-x-auto">
          {otherPosts.map((item, idx) => (
            <div
              key={idx}
              onClick={() => router.push(`/blogs/${item?.slug}`)}
              className="flex p-[0.75rem] flex-col w-full sm:min-w-[18.1406rem] h-auto min-h-[20rem] gap-[0.75rem] items-center border-[2px] justify-start rounded-[1.5rem] border-[#E9E9E9] bg-white cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="w-full relative overflow-hidden h-[8.75rem] rounded-[1.125rem] flex-shrink-0">
                <img
                  alt="image"
                  src={item?.image}
                  className="w-full h-full object-cover"
                />
                <div className="p-[0.375rem] absolute top-[0.75rem] left-[0.75rem] bg-[#BD8E55] rounded-[0.47rem] flex items-start justify-start">
                  <span className="text-[0.625rem] font-instrument-sans-500 font-normal leading-[0.625rem] text-white">
                    Trending
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-[0.5rem] flex-grow">
                <p className="blog-smallHeading font-instrument-sans-600 text-black line-clamp-2">
                  {item?.title}
                </p>
                <p className="text-[0.75rem] font-normal font-instrument-sans-400 leading-[1rem] line-clamp-2">
                  {item?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SuggestionBlog;
