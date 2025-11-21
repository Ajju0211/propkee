'use client';

import Image from 'next/image';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import Button from '../ui/button';

function Header() {
  const header = ['Why Propkee ?', 'Agents', 'Developers', 'Testimonials'];

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <header className="w-full py-4 flex items-center justify-between">
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
        {header.map((item, idx) => (
          <div key={idx} className="blog-description py-2 px-4 whitespace-nowrap">
            {item}
          </div>
        ))}
      </nav>

      {/* Desktop Button */}
      <div className="hidden sm:block">
        <Button onClick={handleClick}>Contact Us</Button>
      </div>

      {/* Mobile Hamburger */}
      <button className="sm:hidden flex items-center">
        <HiOutlineMenuAlt4 size={28} />
      </button>
    </header>
  );
}

export default Header;
