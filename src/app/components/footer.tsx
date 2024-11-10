import React from 'react';
import Image from 'next/image';
import { FaGithub } from "react-icons/fa6";
import { SiVercel } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-red-200">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex flex-col sm:flex-row items-center">
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 mb-4 sm:mb-0">
            <Image 
              src="/accessts/picture/Profile Picture.jpeg" 
              alt="Sarwat Majeed" 
              width={40} 
              height={50} 
              className='h-16 w-16 rounded-full'
            />
            <span className="ml-3 text-lg sm:text-xl">Sarwat Majeed</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 mt-4 sm:mt-0 text-center">
            © 2024 Sarwat Majeed —
          </p>
          <div className="flex mt-4 sm:mt-0 justify-center sm:justify-start space-x-3">
            <Link 
              target="_blank" 
              href="https://github.com/SarwatMajeed24" 
              className="text-black"
            >
              <FaGithub className='text-2xl sm:text-3xl hover:text-gray-600' />
            </Link>
            <Link 
              target="_blank" 
              href="https://vercel.com/sarwat-majeeds-projects" 
              className="text-black"
            >
              <SiVercel className='text-2xl sm:text-3xl hover:text-gray-600' />
            </Link>
            <Link 
              target="_blank" 
              href="https://www.linkedin.com/in/sarwat-majeed" 
              className="text-blue-800"
            >
              <FaLinkedin className='text-2xl sm:text-3xl hover:text-blue-600' />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
