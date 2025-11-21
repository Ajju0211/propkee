import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

type Item = {
  items: [] | any;
};

export default function Breadcrumb({ items }: Item) {
  return (
    <nav className="flex items-center lg:my-[1.5rem] whitespace-nowrap overflow-x-auto">
      {items.map((item: any, index: number) => (
        <div key={index} className="flex items-center sm:gap-2 min-w-0">
          {index !== 0 && (
            <ChevronRight className="w-4 h-4 mx-1 text-[#00193BE5]/80 shrink-0" />
          )}

          {item.href ? (
            <Link
              href={item.href}
              className="blog-smallHeading truncate max-w-[200px] sm:max-w-none"
              title={item.label}
            >
              {item.label}
            </Link>
          ) : (
            <span
              className="blog-smallHeading truncate max-w-[200px] sm:max-w-none"
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
