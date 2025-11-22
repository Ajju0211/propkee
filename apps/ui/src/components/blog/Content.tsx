import { ContentProps } from '@/types/blog-types';
import React from 'react';

function Content({
  anchoreTag = [],
  otherPosts,
  mainTitle = 'Content',
  subTitle = 'Explore top-rated apartments with spacious layouts, modern amenities, and convenient access.',
}: ContentProps) {
  const handleScroll = (id: string) => {
    // Remove # if present and clean the ID
    const cleanId = id.replace('#', '').trim();
    const element = document.getElementById(cleanId);

    if (element) {
      // Get Lenis instance
      const lenis = (window as any).lenis;

      if (lenis) {
        // Use Lenis scrollTo for smooth scroll
        lenis.scrollTo(element, {
          offset: -120, // Adjust offset for fixed headers
          duration: 1.5,
          immediate: false,
          lock: true,
        });
      } else {
        // Fallback to native smooth scroll if Lenis not available
        console.warn('Lenis not found, using fallback scroll');
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 100;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } else {
      console.warn(`Element with ID "${cleanId}" not found`);
    }
  };

  return (
    <div className="w-full px-[1rem] lg:px-[2rem] xl:px-[6.5rem] py-[3.5rem] md:min-h-[41.875rem] h-full blog-bg-color-f1 lg:mt-[5.5rem]">
      <div className="w-full flex flex-col gap-[24px] lg:gap-[1rem] items-start justify-start">
        <h3 className="blog-title">{mainTitle || ''}</h3>
        <p className="blog-subTitle">{subTitle || ''}</p>
      </div>

      <div className="flex flex-col gap-[32px] lg:flex-row w-full justify-between lg:mt-[3.5rem]">
        {/* LEFT LIST */}
        <div className="flex w-full max-w-[48rem] flex-col justify-start items-start">
          <ul className="flex w-full flex-col gap-4">
            {(anchoreTag || []).map((item, idx) => (
              <li key={idx} className="w-full">
                <button
                  type="button"
                  onClick={() => handleScroll(item?.link || '')}
                  className="block blog-subTitle py-[1rem] pl-2 leading-[120%] cursor-pointer hover:blog-text-color-D1 relative text-left w-full transition-colors"
                >
                  {item?.title || ''}

                  <span className="absolute left-2 right-0 bottom-0 h-[1px] bg-gray-300"></span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT RECENT POSTS */}
        <div className="w-full md:max-w-[24.0625rem] max-w-full  flex flex-col gap-[1rem]">
          <span className="md:blog-subTitle text-[24px] md:font-instrument-sans-700 font-instrument-sans-700 blog-text-primary">
            {otherPosts?.postTitle || 'Recent Posts'}
          </span>

          {(otherPosts?.postItem || []).map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between p-[0.75rem] items-center bg-white rounded-[1.5rem]"
            >
              <div className="flex flex-col gap-[0.5rem] items-start justify-start md:w-[15.6875rem]">
                <span className="font-instrument-sans-400 text-[#686868] text-[0.875rem] leading-[0.875rem]">
                  {item?.date || ''}
                </span>

                <span className="blog-smallHeading line-clamp-2 font-instrument-sans-600 text-[#222]">
                  {item?.title || ''}
                </span>
              </div>

              <div className="w-[6.125rem] rounded-[1rem] h-[5.375rem] overflow-hidden flex-shrink-0">
                <img
                  className="w-full h-full object-cover"
                  alt={item?.title || 'image'}
                  src={item?.image || '/placeholder.svg'}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
