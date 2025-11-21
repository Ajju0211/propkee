import { createIdFromTitle } from '@/utils/createIdFromTitle';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

export function BlogContent({ content }: { content: string }) {
  const headingRenderer = (level: number) => (props: any) => {
    const text = React.Children.toArray(props.children).join('');
    return React.createElement(
      `h${level}`,
      {
        className: `blog-h${level} pb-[1.25rem]`,
        id: createIdFromTitle(text),
      },
      props.children,
    );
  };
  return (
    <div className="w-full h-full px-[1rem] lg:px-[2rem] py-[2.5rem] xl:py-[5.5rem] xl:px-[6.5rem] flex flex-col gap-[24px]">
      {' '}
      {/* 24px/1.5 rem gap*/}
      <ReactMarkdown
        remarkPlugins={[remarkGfm]} // tables, lists, markdown extras
        rehypePlugins={[rehypeRaw]} // allows HTML in markdown
        components={{
          //   h1: (props) => <h1 className="blog-h1 pt-[0.5rem]" {...props} />,
          //   h2: (props) => <h2 className="blog-h2 pt-[0.5rem]" {...props} />,
          //   h3: (props) => <h3 className="blog-h3 pt-[0.5rem]" {...props} />,
          //   h4: (props) => <h4 className="blog-h4 pt-[0.5rem]" {...props} />,
          //   h5: (props) => <h5 className="blog-h5 pt-[0.5rem]" {...props} />,
          //   h6: (props) => <h6 className="blog-h6 pt-[0.5rem]" {...props} />,
          h1: headingRenderer(1),
          h2: headingRenderer(2),
          h3: headingRenderer(3),
          h4: headingRenderer(4),
          h5: headingRenderer(5),
          h6: headingRenderer(6),
          span: (props) => <span className="blog-description pt-[0.5rem]" {...props} />,
          p: (props) => <p className="blog-description pt-[0.5rem]" {...props} />,
          ul: (props) => (
            <ul
              className="mt-4 mb-4 pl-6 list-disc list-inside blog-description "
              {...props}
            />
          ),
          ol: (props) => (
            <ol
              className="mt-4 mb-4 pl-6 list-decimal list-inside blog-description "
              {...props}
            />
          ),
          li: (props) => <li className="mb-1 pl-1" {...props} />,
          table: (props) => (
            <div className="overflow-x-auto w-full my-6 rounded-[1.5rem] border bg-white border-[#EAEAEA]">
              <table
                className="w-full rounded-[1.5rem] border bg-white border-[#EAEAEA]"
                {...props}
              />
            </div>
          ),
          tr: (props) => <tr className="" {...props} />,
          thead: (props) => <thead className="bg-[#BF8B50] " {...props} />,
          th: (props) => (
            <th
              className="blog-subTitle text-start md:min-h-[4rem] py-[1rem] px-[1.5rem] border-[2px] border-[#EAEBF0] text-white"
              {...props}
            />
          ),
          td: (props) => (
            <td
              className="blog-description  text-start px-[1.5rem] h-full md:min-h-[4.625rem] py-[0.75rem] border-[2px] border-[#EAEBF0] font-instrument-sans-500  text-[#5F6D7E] "
              {...props}
            />
          ),
          img: (props) => (
            <img className="blog-image w-full " alt={props.alt} src={props.src ?? ''} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
