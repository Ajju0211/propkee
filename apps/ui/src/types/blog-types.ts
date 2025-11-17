export interface BlogHero {
  title: string;
  sub_title: string;
  description: string;
  author: {
    name: string;
    dateOfPublishing: string;
    estimatedReadingTime: string;
  };
  image: {
    src: string;
    alt: string;
  };
}

export interface AnchorItem {
  title?: string;
  link?: string;
}

export interface PostItem {
  slug?: string;
  date?: string;
  title?: string;
  image?: string;
}

export interface OtherPosts {
  postTitle?: string;
  postItem?: PostItem[];
}

export interface ContentProps {
  anchoreTag?: AnchorItem[];
  otherPosts?: OtherPosts;
  mainTitle?: string;
  subTitle?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQData {
  title: string;
  faqs: FAQItem[];
}

export type TableColumn = {
  label: string;
  required?: boolean;
  type?: string;
};

export type TableData = {
  columns: TableColumn[];
  rows: string[][];
};
