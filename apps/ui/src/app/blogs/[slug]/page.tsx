'use client';

import Image from 'next/image';

import Header from '@/components/global/header';
import Breadcrumb from '@/components/ui/BreadCrum';
import HeroSection from '@/components/blog/heroSection';
import Content from '@/components/blog/Content';
import FAQS from '@/components/blog/FAQS';
import SuggestionBlog from '@/components/blog/SuggestionBlog';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getSingleBlogContent } from '@/api/blog/blog';
import {
  BlogHero,
  ContentProps,
  FAQData,
  OtherPosts,
  PostItem,
} from '@/types/blog-types';
import { formatReadableDate } from '@/utils/formateDate';
import httpClient from '@/api/httpClient';
import BlogRichText from '@/components/blog/BlogRichText';
import HeroSectionSkeleton from '@/components/blog/skeleton/HeroSectionSkeleton';
import ContentSkeleton from '@/components/blog/skeleton/ContentSkeletonProps';
import BlogSkeleton from '@/components/blog/skeleton/BlogSkeletonStatic';
import { createIdFromTitle } from '@/utils/createIdFromTitle';
import Footer from '@/components/global/footer';
import { BlogContent } from '@/components/blog/BlogMarkDown';

export default function Home() {
  const { slug } = useParams();
  const [heroSection, setHeroSection] = useState<BlogHero>();
  const [contentSection, setContentSection] = useState<ContentProps>();

  const [blogContent, setBlogContent] = useState();
  const [recentPosts, setRecentPost] = useState<OtherPosts>();
  const [faqs, setFaq] = useState<FAQData>();
  const [blogData, setBlogData] = useState();

  const [trendingBlogs, setTrendingBlogs] = useState<PostItem[]>();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const data = await getSingleBlogContent(slug);
    setBlogData(data?.blog_content_rich_text);
    setBlogContent(data?.blog_content);
    console.log('Trending blogs: ', filterTrendingPosts(data));
    setTrendingBlogs(filterTrendingPosts(data));

    const recentPosts = await httpClient.get(
      '/blogs?sort=createdAt:desc&pagination[limit]=3&populate[hero_section][populate]=*',
    );

    const filterPosts = recentPosts.data.data?.map((item: any) => ({
      slug: item?.slug,
      date: formatReadableDate(item?.createdAt, 'short'),
      title: item?.title,
      image: `http://localhost:1337${item?.hero_section?.image?.url}`,
    }));
    setRecentPost({
      postTitle: 'Recent Posts',
      postItem: filterPosts,
    });

    const heroSectionData = filterDataForHeroSection(data);
    setHeroSection(heroSectionData);
    console.log('Blogs Data : ', data);

    const anchoreTagData = filterAnchoreTag(data);
    const otherPosts = otherPostsFilterData(data);
    setContentSection({
      anchoreTag: anchoreTagData,
      otherPosts: otherPosts,
    });
    const faqs = filterFAQS(data);
    setFaq(faqs);
  };

  //Extract "Markdown languag" H2 tag from the content

  function extractH2Headings(markdown: string) {
    const lines = markdown.split(/\r?\n/);

    const h2 = lines
      .map((line) => {
        const match = line.match(/^###\s+(.*)$/); // only H3
        return match ? match[1].trim() : null;
      })
      .filter(Boolean) as string[];

    return h2;
  }

  const filterDataForHeroSection = (data: any): BlogHero => {
    const heroSection = data?.hero_section;

    return {
      title: data?.title,
      sub_title: heroSection?.sub_title,
      author: {
        name: heroSection?.author_name,
        dateOfPublishing: formatReadableDate(data?.publishedAt),
        estimatedReadingTime: '15 minute read',
      },
      description: heroSection?.description,
      image: {
        src: `http://localhost:1337${heroSection?.image?.url}`,
        alt: `image`,
      },
    };
  };

  const filterAnchoreTag = (data: any) => {
    const h2tag = extractH2Headings(data?.blog_content);
    console.log(h2tag);
    // data?.blog_content_rich_text
    const anchoreTag = h2tag?.map((item: any) => ({
      title: item ?? '',
      link: createIdFromTitle(item ?? ''),
    }));

    const removedEmptyTag = anchoreTag.filter((item: any) => item?.title.trim() !== '');

    return removedEmptyTag;
  };

  const filterFAQS = (data: any) => {
    const faqsData = data?.blogs_faqs;
    const faqs = faqsData?.faq_content?.map((item: any) => ({
      question: item?.question,
      answer: item?.answer,
    }));

    return {
      title: faqsData?.heading || '',
      faqs: faqs,
    };
  };

  const otherPostsFilterData = (data: any) => {
    const otherPosts =
      data?.content_section?.other_blogs?.blogs?.map((item: any) => ({
        slug: item?.slug,
        date: formatReadableDate(item?.createdAt),
        title: item?.title,
        image: item?.hero_section?.image?.url,
      })) || [];

    const postTitle = data?.content_section?.other_blogs?.heading;
    return {
      postItem: otherPosts || [],
      postTitle: postTitle,
    };
  };

  const filterTrendingPosts = (data: any) => {
    const trendingPosts =
      data?.trending_blogs?.map((item: any) => ({
        slug: item?.slug,
        date: formatReadableDate(item?.createdAt),
        title: item?.title,
        image: `http://localhost:1337${item?.hero_section?.image?.url}`,
        description: item?.hero_section?.description,
      })) || [];
    return trendingPosts;
  };
  const postData = contentSection?.otherPosts?.postItem || [];
  const otherPostsData = postData?.length > 0 ? contentSection?.otherPosts : recentPosts;

  return (
    <div className="h-full bg-white">
      <div className="h-full lg:px-[1.5rem] xl:px-[6.5rem] px-[16px] w-full bg-white">
        <Header />
        {/* <Breadcrumb /> */}
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'blogs', href: '/blogs' },
            { label: 'Cost of Living in UAE 2025', herf: `blogs/${slug}` },
          ]}
        />
        {heroSection ? <HeroSection blog={heroSection} /> : <HeroSectionSkeleton />}
      </div>
      <div className="w-full">
        {contentSection ? (
          <Content anchoreTag={contentSection?.anchoreTag} otherPosts={otherPostsData} />
        ) : (
          <ContentSkeleton />
        )}
        {/* {blogData ? <BlogRichText data={blogData} /> : <BlogSkeleton />} */}
        {blogContent ? <BlogContent content={blogContent} /> : <BlogSkeleton />}
      </div>
      {faqs && <FAQS data={faqs} />}
      {trendingBlogs && <SuggestionBlog otherPosts={trendingBlogs} />}
      <div className="w-full px-[1.5rem] xl:px-[6.5rem]">
        <Footer />
      </div>
    </div>
  );
}
