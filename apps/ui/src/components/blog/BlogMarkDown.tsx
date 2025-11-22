import { useIsMobile } from '@/hook/useIsMobile';
import { createIdFromTitle } from '@/utils/createIdFromTitle';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { useState } from 'react';

export function BlogContent({ content }: { content: string }) {
  const isMobile = useIsMobile();

  /**
   * Convert table → accordion (MOBILE ONLY)
   */

  const AccordionRow = ({
    titleCell,
    contentCells,
    rows,
    rowIndex,
  }: {
    titleCell: React.ReactNode;
    contentCells: React.ReactNode[];
    rows: any;
    rowIndex: number;
  }) => {
    const [open, setOpen] = useState(false);

    return (
      <div
        className={`bg-transparent p-[0.75rem] flex flex-col items-center justify-start gap-[0.62rem]
           ${rowIndex !== rows.length - 1 ? ' border-b-[0.5px]  border-[rgba(128,128,128,0.55)]' : ''}
          `}
      >
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className={`w-full flex items-center text-[18px] leading-[24px] justify-between blog-subTitle font-instrument-sans-700 bg-transparent blog-text-primary
          `}
        >
          <span>{titleCell}</span>

          <span
            className={`transition-transform p-[0.25rem] ${
              open ? 'rotate-180' : 'rotate-0'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
            >
              <path
                d="M13 7L7 1L1 7"
                stroke="#808080"
                strokeOpacity="0.55"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        {open && (
          <div className="w-full">
            {contentCells.map((cell, idx) => (
              <div key={idx} className="py-2 relative  blog-description  ">
                {cell}
                {contentCells.length - 1 !== idx && (
                  <div className="w-full h-[1px] bg-[#a8a8a8] rounded-lg  my-[12px]" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const TableToAccordion = (props: any): JSX.Element | null => {
    const childrenArray = React.Children.toArray(props?.children);
    const tbody = childrenArray.find(
      (child): child is React.ReactElement =>
        React.isValidElement(child) && child.type === 'tbody',
    );

    if (!tbody) return null;

    const rows = React.Children.toArray(tbody.props.children);

    return (
      <div className="my-4 flex flex-col items-stretch gap-[1.12rem] justify-start  rounded-[0.75rem] bg-[#F1EEEB] overflow-hidden">
        {rows.map((row: any, rowIndex: number) => {
          if (!React.isValidElement(row)) return null;

          const cells = React.Children.toArray(row.props.children);
          const titleCell = cells[0];
          const contentCells = cells.slice(1);

          return (
            <AccordionRow
              rowIndex={rowIndex}
              rows={rows}
              key={rowIndex}
              titleCell={
                React.isValidElement(titleCell) ? titleCell.props.children : null
              }
              contentCells={contentCells.map((el: any) =>
                React.isValidElement(el) ? el.props.children : null,
              )}
            />
          );
        })}
      </div>
    );
  };

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
          // h1: (props) => <h1 className="blog-h1 pt-[0.5rem]" {...props} />,
          // h2: (props) => <h2 className="blog-h2 pt-[0.5rem]" {...props} />,
          // h3: (props) => <h3 className="blog-h3 pt-[0.5rem]" {...props} />,
          // h4: (props) => <h4 className="blog-h4 pt-[0.5rem]" {...props} />,
          // h5: (props) => <h5 className="blog-h5 pt-[0.5rem]" {...props} />,
          // h6: (props) => <h6 className="blog-h6 pt-[0.5rem]" {...props} />,
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
          table: (props) =>
            isMobile ? (
              TableToAccordion(props)
            ) : (
              <div className="overflow-x-auto w-full my-6 rounded-[1.5rem] border bg-white border-[#EAEAEA]">
                <table
                  className="w-full rounded-[1.5rem] border bg-white border-[#EAEAEA]"
                  {...props}
                />
              </div>
            ),

          // desktop-only styling
          tr: (props) => (!isMobile ? <tr {...props} /> : <>{props.children}</>),
          thead: (props) =>
            !isMobile ? <thead className="bg-[#BF8B50]" {...props} /> : null,
          th: (props) =>
            !isMobile ? (
              <th
                className="md:blog-subTitle text-[20px] text-start md:min-h-[4rem] py-[1rem] px-[1.5rem] border-[2px] border-[#EAEBF0] text-white"
                {...props}
              />
            ) : null,
          td: (props) =>
            !isMobile ? (
              <td
                className="blog-description text-start px-[1.5rem] h-full md:min-h-[4.625rem] py-[0.75rem] border-[2px] border-[#EAEBF0] font-instrument-sans-500 text-[#5F6D7E]"
                {...props}
              />
            ) : null,
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
