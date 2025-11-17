import { ParamValue } from 'next/dist/server/request/params';
import httpClient from '../httpClient';

export const getSingleBlogContent = async (slug: string | ParamValue) => {
  const res = await httpClient.get(
    `/blogs?filters[slug][$eq]=${slug}&populate[hero_section][populate]=*&populate[blog_content_rich_text][populate]=*&populate[blogs_faqs][populate]=*&populate[content_section][populate][other_blogs][populate][blogs][populate][hero_section][populate]=*`,
  );
  const data = res?.data?.data?.[0];
  return data;
};
