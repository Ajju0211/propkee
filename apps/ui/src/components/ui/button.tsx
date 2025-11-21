'use client';

import { cn } from '@/utils/cn';
import React from 'react';

type ButtonProps = {
  onClick?: () => void;
  text?: string;
  icon?: React.ReactNode;
  children: string | React.ReactNode;
  containerClass?: string;
};

function Button({ onClick, icon: Icon, text, children, containerClass }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        `
          w-full h-full bg-black rounded-full 
          flex items-center justify-center gap-[0.5rem] 
          py-[0.75rem] px-[1.25rem]
          max-md:w-[153px]       
          max-md:h-[48px]
          max-md:py-[8px]
          max-md:px-[16px]
          max-md:gap-[12px]
        `,
        containerClass,
      )}
    >
      <div className="w-[1.5rem] h-[1.5rem] flex items-center justify-center">
        {Icon ? (
          Icon
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.5036 20.35C14.441 27.4003 -3.55048 9.72189 3.68329 2.54193C4.51475 1.7178 6.10921 1.93055 6.93334 2.76201V2.76446C7.74035 3.50056 8.10473 3.92362 8.81882 4.67684C9.64295 5.51074 9.67962 6.86555 8.84817 7.68968L7.43711 9.10072C5.69348 10.859 13.0715 18.2933 14.9081 16.5179L16.3216 15.1093C17.153 14.2852 18.5079 14.246 19.332 15.0775C20.0461 15.8307 20.5058 16.2391 21.2174 16.9923C22.0416 17.8238 22.335 19.5259 21.5036 20.35Z"
              fill="white"
            />
          </svg>
        )}
      </div>

      <div className="w-full h-full flex flex-col items-start justify-start">
        {/* Small screen fonts smaller */}
        {text && (
          <p
            className="font-instrument-sans-500 text-white whitespace-nowrap 
                        text-[11px] max-md:text-[10px] 
                        md:text-[14px] leading-normal"
          >
            {text}
          </p>
        )}

        {/* Main label */}
        <span
          className="blog-peragraph text-white whitespace-nowrap font-instrument-sans-700
                        text-[16px] max-md:text-[13px] md:text-[18px]"
        >
          {children}
        </span>
      </div>
    </button>
  );
}

export default Button;
