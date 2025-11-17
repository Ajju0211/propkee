'use client';

import Image from 'next/image';
import { FaPhone } from 'react-icons/fa';

import Button from '../ui/button';

function Header() {
  const header = ['Why Propkee ?', 'Agents', 'Developers', 'Testimonials'];

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="w-full h-full max-h-[6.5rem]   py-[1.5rem] flex items-center justify-between">
      <div className="w-full max-w-[13.25rem] h-[3.5rem]">
        <Image
          alt="logo"
          height={50}
          width={50}
          src={'/assets/logo.svg'}
          className="w-full h-full"
        />
      </div>
      <div className="h-full flex items-center justify-center gap-[0.75rem]">
        {header.map((item, idx) => (
          <div
            key={idx}
            className="blog-description hidden lg:block text-nowrap py-[0.88rem] px-[1.5rem]"
          >
            {item}
          </div>
        ))}
      </div>
      <div>
        <Button onClick={handleClick}>Contact Us</Button>
      </div>
    </div>
  );
}

export default Header;
