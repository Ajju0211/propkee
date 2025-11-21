import Image from 'next/image';
import React from 'react';
import Button from '../ui/button';
import { BlogHero } from '@/types/blog-types';

interface HeroSectionProps {
  blog: BlogHero;
}

function HeroSection({ blog }: HeroSectionProps) {
  console.log('Image src : ', blog?.image?.src);
  return (
    <div className="w-full h-full md:min-h-[44rem] py-[28px]">
      <h1 className="blog-title">{blog?.title}</h1>
      <p className="blog-subTitle mt-[32px] md:mt-0 lg:mt-[0.62rem]">{blog?.sub_title}</p>

      <div className="w-full h-full lg:mt-[3.5rem] flex items-start justify-start md:gap-8">
        <div className="w-full mt-[32px] md:mt-0 h-full flex flex-col justify-between items-start">
          <p className="w-full  max-w-[35rem] h-full blog-description">
            {blog?.description}
          </p>

          <div className="flex flex-row mt-[1rem] lg:mt-[2.25rem] lg:mb-[2.44rem] w-full items-center justify-center md:justify-start gap-[1rem]">
            <Button
              containerClass="w-full sm:max-w-[12.25rem] flex items-center justify-center"
              icon={
                <div className="w-[1.5rem] h-[1.5rem]">
                  <Image
                    alt="logo"
                    height={40}
                    width={40}
                    src="/assets/social-media/apple.svg"
                  />
                </div>
              }
              text="Propkee on the"
            >
              App Store
            </Button>

            <Button
              containerClass="w-full sm:max-w-[12.25rem] flex items-center justify-center"
              icon={
                <div className="w-[1.5rem] h-[1.5rem]">
                  <Image
                    alt="logo"
                    height={40}
                    width={40}
                    className="w-full h-full"
                    src="/assets/social-media/google-play.svg"
                  />
                </div>
              }
              text="Get it on"
            >
              Google Play
            </Button>
          </div>

          <div className="w-full h-full mt-[2rem] md:mt-[0] md:max-h-[22.375rem] md:max-w-[39.5625rem] overflow-hidden rounded-[2rem] block md:hidden">
            <img
              src={blog?.image?.src}
              alt={blog?.image?.alt}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex w-full flex-col gap-[1rem] mt-[2rem] md:mt-[0] h-full justify-between items-start">
            <div className="flex lg:flex-row flex-col lg:items-center item-start justify-start w-full">
              <p className="blog-smallHeading text-blog-color-70 w-[15rem]">
                AUTHOR NAME:
              </p>
              <span className="blog-subTitle font-instrument-sans-600 blog-text-primary">
                {blog?.author?.name}
              </span>
            </div>

            <div className="flex lg:flex-row flex-col lg:items-center item-start justify-start w-full">
              <span className="blog-smallHeading w-[15rem] uppercase text-blog-color-70">
                Date OF PUBLISHING:
              </span>
              <span className="blog-subTitle font-instrument-sans-600 blog-text-primary">
                {blog?.author?.dateOfPublishing}
              </span>
            </div>

            <div className="flex lg:flex-row flex-col lg:items-center item-start justify-start w-full">
              <span className="blog-smallHeading w-[15rem] uppercase text-blog-color-70">
                Estimated Reading Time:
              </span>
              <span className="blog-subTitle font-instrument-sans-600 blog-text-primary">
                {blog.author.estimatedReadingTime}
              </span>
            </div>
          </div>
        </div>

        <div className=" hidden md:block w-full h-full md:max-h-[22.375rem] md:max-w-[39.5625rem] overflow-hidden rounded-[2rem]">
          <img
            src={blog?.image?.src}
            alt={blog?.image?.alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
