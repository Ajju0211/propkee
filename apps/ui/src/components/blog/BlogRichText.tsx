import React from 'react';
import DynamicTable from './DynamicTable';
import { TableData } from '@/types/blog-types';
import { createIdFromTitle } from '@/utils/createIdFromTitle';

interface Node {
  type: string;
  children?: Node[];
  text?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  url?: string;
  format?: string;
  [key: string]: any;
}

export default function BlogRichText({ data }: { data: any[] }) {
  const content = data;

  console.log('Content: ', content);
  if (!Array.isArray(content)) return null;

  // Handle inline children
  const renderInline = (children: any[]) => {
    return children?.map((child: any, index: number) => {
      if (child.type === 'text') {
        const text = child.text ?? '';
        const style = { whiteSpace: 'pre-wrap' };

        let element: React.ReactNode = (
          <span key={index} style={style}>
            {text}
          </span>
        );

        if (child.bold) element = <strong key={index}>{element}</strong>;
        if (child.italic) element = <em key={index}>{element}</em>;
        if (child.underline) element = <u key={index}>{element}</u>;
        if (child.strikethrough) element = <s key={index}>{element}</s>; // <-- strikethrough

        return element;
      }

      if (child.type === 'link') {
        return (
          <a
            key={index}
            href={child.url}
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
            style={{ whiteSpace: 'pre-wrap' }}
          >
            {renderInline(child.children)}
          </a>
        );
      }

      return null;
    });
  };

  const renderRichText = (richText: any[]) => {
    return richText?.map((item, index) => {
      const getText = () =>
        item.children
          ?.map((child: any, i: number) => {
            if (!child.text) return null;

            if (child.bold) return <strong key={i}>{child.text}</strong>;
            if (child.italic) return <em key={i}>{child.text}</em>;
            if (child.underline) return <u key={i}>{child.text}</u>;

            return child.text;
          })
          .join('') || '';

      const renderNestedLists = (children: any[]) => {
        return children?.map((li: any, liIndex: number) => {
          return (
            <li key={liIndex} className="whitespace-pre-wrap">
              {renderInline(li.children)}

              {/* nested list detection */}
              {li.children?.map((child: any, nestedIndex: number) => {
                if (child.type === 'list') {
                  const NestedTag = child.format === 'unordered' ? 'ul' : 'ol';
                  return (
                    <NestedTag
                      key={nestedIndex}
                      className={`ml-2 whitespace-pre-wrap ${
                        child.format === 'unordered' ? 'list-disc' : 'list-decimal'
                      }`}
                    >
                      {renderNestedLists(child.children || [])}
                    </NestedTag>
                  );
                }
                return null;
              })}
            </li>
          );
        });
      };

      switch (item.type) {
        case 'heading-one':
          return (
            <h1 key={index} className="blog-h1 whitespace-pre-wrap">
              {renderInline(item.children)}
            </h1>
          );

        case 'heading-two':
        case 'heading':
          return (
            <h2 key={index} className="blog-h2 whitespace-pre-wrap">
              {renderInline(item.children)}
            </h2>
          );

        case 'heading-three':
          return (
            <h3 key={index} className="blog-h3 whitespace-pre-wrap">
              {renderInline(item.children)}
            </h3>
          );

        case 'heading-four':
          return (
            <h4 key={index} className="blog-h4 whitespace-pre-wrap">
              {renderInline(item.children)}
            </h4>
          );

        case 'heading-five':
          return (
            <h5 key={index} className="blog-h5 whitespace-pre-wrap">
              {renderInline(item.children)}
            </h5>
          );

        case 'heading-six':
          return (
            <h6 key={index} className="blog-h6 whitespace-pre-wrap">
              {renderInline(item.children)}
            </h6>
          );

        case 'paragraph': {
          const hasIframe = item.children?.some((c: any) =>
            (c.text || '').includes('<iframe'),
          );

          if (hasIframe) {
            const text = item.children?.map((c: any) => c.text).join('') || '';
            const cleaned = text
              .replace(/width=["'][^"']*["']/gi, '')
              .replace(/height=["'][^"']*["']/gi, '')
              .replace(
                /<iframe([^>]*)>/i,
                '<iframe$1 style="width:100%;height:100%;border:0;display:block;position:absolute;top:0;left:0;"',
              );

            return (
              <div
                key={index}
                className="relative my-6 w-full overflow-hidden rounded-xl"
              >
                <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                  <div
                    className="absolute inset-0"
                    dangerouslySetInnerHTML={{ __html: cleaned }}
                  />
                </div>
              </div>
            );
          }

          // Always render empty paragraph
          return (
            <p
              key={index}
              className="blog-description mt-[0.5rem]  whitespace-pre-wrap min-h-[1rem]"
            >
              {renderInline(item.children ?? [])}
            </p>
          );
        }

        case 'quote':
          return (
            <blockquote
              key={index}
              className="border-l-4 pl-4 italic text-gray-600 my-4 whitespace-pre-wrap"
            >
              {renderInline(item.children)}
            </blockquote>
          );

        case 'image':
          return (
            <img
              key={index}
              src={item.image?.url}
              alt={item.image?.alternativeText || 'Blog image'}
              className="my-6 w-full rounded-lg"
            />
          );

        /* LISTS */
        case 'list': {
          const ListTag = item.format === 'unordered' ? 'ul' : 'ol';

          return (
            <ListTag
              key={index}
              className={`blog-description  ml-3.5 space-y-1 list-inside ${
                item.format === 'unordered' ? 'list-disc' : 'list-decimal'
              }`}
            >
              {renderNestedLists(item.children)}
            </ListTag>
          );
        }

        case 'code':
          return (
            <pre
              key={index}
              className="my-6 p-4 bg-black text-white rounded-lg overflow-auto whitespace-pre-wrap"
            >
              <code className="whitespace-pre-wrap">{item.children?.[0]?.text}</code>
            </pre>
          );

        default:
          return (
            <p key={index} className="blog-description whitespace-pre-wrap">
              {item.type}
            </p>
          );
      }
    });
  };

  return (
    <div className="w-full h-full px-[2rem] py-[2.5rem] xl:py-[5.5rem] xl:px-[6.5rem]">
      {content.map((section, sectionIndex) => {
        const id = createIdFromTitle(section?.heading);
        return (
          <React.Fragment key={section?.id || sectionIndex}>
            {/* Text Content with Sidebar */}
            <div className="flex flex-col w-full  justify-between">
              {section?.heading && (
                <h2 id={id} className="blog-h2 mb-[1rem] md:mb-[1.25rem]">
                  {section?.heading}
                </h2>
              )}
              <div className="w-full">
                {renderRichText(
                  section?.rich_text?.filter(
                    (item: { type: string; children: { type: string }[] }) =>
                      item.type !== 'paragraph' || item.children[1]?.type !== 'link',
                  ),
                )}
              </div>
              {section?.tables.map((table: any) => <DynamicTable table={table?.table} />)}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
