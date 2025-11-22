'use client';

import Image from 'next/image';
import React from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import Button from '../ui/button';
import Sidebar from './headerSidebar/Sidebar';

function Header() {
  const headerItems = ['Why Propkee ?', 'Agents', 'Developers', 'Testimonials'];
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <>
      <header className="w-full py-4 flex items-center justify-between sm:px-4">
        {/* Logo */}
        <div className="h-[32px] w-[121px] sm:h-[40px] sm:w-[150px] flex-shrink-0">
          <Image
            alt="logo"
            height={50}
            width={150}
            src="/assets/logo.svg"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6">
          {headerItems.map((item, idx) => (
            <div
              key={idx}
              className="blog-description py-2 px-4 whitespace-nowrap cursor-pointer"
            >
              {item}
            </div>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden sm:block">
          <Button onClick={handleClick}>Contact Us</Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden flex items-center p-2 rounded-md hover:bg-gray-100"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <HiOutlineMenuAlt4 size={28} />
        </button>
      </header>

      {/* Sidebar */}
      <Sidebar open={open} onClose={() => setOpen(false)} items={headerItems} />
    </>
  );
}

export default Header;
