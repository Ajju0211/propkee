import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

type Item = {
  items: [] | any;
};

export default function Breadcrumb({ items }: Item) {
  return (
    <nav className="flex lg:my-[1.5rem] items-center justify-start flex-wrap sm:flex-nowrap overflow-x-auto">
      {items.map((item: any, index: any) => (
        <div
          key={index}
          className="flex items-center gap-[4px] sm:gap-[0.25rem] max-w-[120px] sm:max-w-none overflow-hidden"
        >
          {index !== 0 && (
            <ChevronRight className="w-4 h-4 mx-2 text-[#00193BE5]/80 shrink-0" />
          )}

          {item.href ? (
            <Link
              href={item.href}
              className="truncate overflow-hidden whitespace-nowrap blog-smallHeading"
              title={item.label} // tooltip on hover
            >
              {item.label}
            </Link>
          ) : (
            <span
              className="truncate overflow-hidden whitespace-nowrap blog-smallHeading"
              title={item.label}
            >
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
