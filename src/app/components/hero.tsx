"use client";
import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-pink-300 to-red-500 h-screen flex items-center justify-center px-4 md:px-8">
      <section className="text-gray-600 body-font w-full h-full flex flex-col items-center justify-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-6">
          <Image 
            src="/accessts/picture/my pic.jpeg"
            alt="Sarwat Majeed" 
            width={200} 
            height={200} 
            className="rounded-full object-cover mb-6 sm:mb-8 lg:mb-10"
          />
        </div>
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl mb-4 font-extrabold text-pink-950">
            Sarwat Majeed
            <div className="text-purple-800 font-semibold mt-2 sm:mt-4">
              <Typewriter 
                options={{ 
                  strings: ['Mathematics Expert', 'Full-Stack Developer', 'UI/UX Designer'],
                  autoStart: true,
                  loop: true
                }} 
              />
            </div>
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-4 leading-relaxed text-black">
            Hello! I am Sarwat Majeed, a passionate Mathematics teacher and a dedicated developer.
            With a love for numbers and a knack for problem-solving, I strive to make complex concepts accessible and engaging for my students.
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-4 leading-relaxed text-black">
            In addition to teaching, I enjoy developing applications that simplify everyday tasks and enhance learning experiences.
            My goal is to bridge the gap between education and technology, inspiring students to embrace the world of mathematics and coding.
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-4 leading-relaxed text-black">
            I have knowledge about HTML5, CSS3, TypeScript, Next.js, React, TailwindCSS, and Bootstrap.
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-8 leading-relaxed text-black">
            Join me on this journey of exploration and growth as we navigate the fascinating realms of mathematics and development together!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center mt-4 space-y-2 sm:space-y-0 sm:space-x-4">
            <a href="/accessts/Resume/Resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="inline-flex text-white bg-slate-500 border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm sm:text-lg">
                Resume
              </button>
            </a>
            <Link href="#contact">
              <button className="inline-flex text-gray-700 bg-yellow-500 border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-green-600 rounded text-sm sm:text-lg">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
