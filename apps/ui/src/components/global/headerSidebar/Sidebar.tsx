'use client';

import Image from 'next/image';
import React from 'react';
import { HiOutlineX } from 'react-icons/hi';
import Link from 'next/link';
import Button from '@/components/ui/button';

type Props = {
  open: boolean;
  onClose: () => void;
  items?: string[];
};

export default function Sidebar({ open, onClose, items = [] }: Props) {
  // Prevent scroll when sidebar open
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleClick = () => {
    alert('button clicked');
  };

  return (
    // Overlay
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        open ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        className={`fixed right-0 top-0 h-full w-[86vw] max-w-[420px] bg-white shadow-2xl transform transition-transform duration-300
          ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-end justify-end px-4 py-4">
          {/* example using uploaded file path as image src */}
          <button
            aria-label="Close menu"
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <HiOutlineX size={22} />
          </button>
        </div>

        <nav className="px-4 py-6">
          <ul className="flex flex-col gap-3">
            {items.map((it, i) => (
              <li key={i}>
                <Link
                  href={`/${it.replace(/\s+/g, '-').toLowerCase()}`}
                  onClick={onClose}
                  className="block text-lg font-medium blog-description text-[#231E18] py-2"
                >
                  {it}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <div className="mt-6">
              <Button onClick={handleClick}>Contact Us</Button>
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
}
