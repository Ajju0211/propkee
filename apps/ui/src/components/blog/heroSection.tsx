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
    <div className="w-full h-full md:min-h-[44rem]">
      <h1 className="blog-title">{blog?.title}</h1>
      <p className="blog-subTitle lg:mt-[0.62rem]">{blog?.sub_title}</p>

      <div className="w-full h-full lg:mt-[3.5rem] flex items-start justify-start">
        <div className="w-full h-full flex flex-col justify-between items-start">
          <p className="w-full max-w-[35rem] h-full blog-description">
            {blog?.description}
          </p>

          <div className="flex flex-col sm:flex-row lg:mt-[2.25rem] max-h-[ 3.5rem] lg:mb-[2.44rem] w-full items-start justify-start gap-[1rem]">
            <Button
              containerClass="max-w-[12.25rem] flex items-center justify-center py-[0.5rem] px-[1.8rem]"
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
              containerClass="max-w-[12.25rem] flex items-center justify-center py-[0.5rem] px-[1.8rem]"
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

          <div className="flex w-full flex-col gap-[1rem] h-full justify-between items-start">
            <div className="flex items-center justify-start w-full">
              <p className="blog-smallHeading text-blog-color-70 w-[15rem]">
                AUTHOR NAME:
              </p>
              <span className="blog-subTitle font-instrument-sans-600 blog-text-primary">
                {blog?.author?.name}
              </span>
            </div>

            <div className="flex items-center justify-start w-full">
              <span className="blog-smallHeading w-[15rem] uppercase text-blog-color-70">
                Date OF PUBLISHING:
              </span>
              <span className="blog-subTitle font-instrument-sans-600 blog-text-primary">
                {blog?.author?.dateOfPublishing}
              </span>
            </div>

            <div className="flex items-center justify-start w-full">
              <span className="blog-smallHeading w-[15rem] uppercase text-blog-color-70">
                Estimated Reading Time:
              </span>
              <span className="blog-subTitle font-instrument-sans-600 blog-text-primary">
                {blog.author.estimatedReadingTime}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full h-full md:max-h-[22.375rem] md:max-w-[39.5625rem] overflow-hidden rounded-[2rem]">
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
