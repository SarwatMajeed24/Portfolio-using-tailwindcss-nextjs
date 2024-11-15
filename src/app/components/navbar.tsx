import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-red-400 z-50 sticky top-0">
      <header className="text-black body-font">
        <div className="container mx-auto flex flex-wrap p-2 md:p-4 flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Image 
              src="/accessts/picture/my pic.jpeg"
              alt="Sarwat Majeed" 
              width={50} 
              height={50} 
              className="rounded-full h-16 w-16 object-cover"
            />
            <span className="ml-3 text-xl">Sarwat Majeed</span>
          </div>

          <nav className="w-full md:w-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 text-base">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <Link href="#about" className="hover:text-blue-900">About</Link>
            <Link href="#skills" className="hover:text-blue-900">Skills</Link>
            <Link href="#projects" className="hover:text-blue-900">Projects</Link>
            <Link href="#contact" className="hover:text-blue-900">Contact</Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;

