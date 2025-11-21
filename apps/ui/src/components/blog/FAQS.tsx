import { FAQData } from '@/types/blog-types';
import React from 'react';

interface FAQSProps {
  data: FAQData;
}

function FAQS({ data }: FAQSProps) {
  return (
    <div className="flex py-[3.5rem] h-full lg:min-h-[67.75rem] flex-col px-[1rem]  lg:px-[2rem] xl:px-[6.5rem] blog-bg-color-f4 gap-[16px]">
      <p className="blog-title">FAQs</p>
      <p className="blog-subTitle mt-[1rem]">{data?.title}</p>

      <div className="w-full h-full flex flex-col lg:gap-[1.5rem] gap-[24px] lg:mt-[3.5rem]">
        {data?.faqs?.map((item, idx) => (
          <div
            key={idx}
            className="py-[1.25rem] bg-[rgba(255,255,255,0.66)]
 px-[1.5rem] flex flex-col justify-start items-stretch gap-[1rem] rounded-[1.3125rem] border-l-[2px] border-[#E5B789] shadow-[117px_197px_64px_0_rgba(0,0,0,0),75px_126px_59px_0_rgba(0,0,0,0),42px_71px_50px_0_rgba(0,0,0,0.01),19px_32px_37px_0_rgba(0,0,0,0.02),5px_8px_20px_0_rgba(0,0,0,0.02)]"
          >
            <p className="blog-heading font-instrument-sans-700">{item?.question}</p>
            <p className="blog-description">{item?.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQS;
