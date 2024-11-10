import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className="bg-gradient-to-r from-pink-300 to-red-500">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex-col md:flex-row items-center">
          
          
          <div className="order-first md:order-last lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-8 md:mt-0 md:ml-8">
            <Image
              className="object-cover object-center rounded-full w-full h-auto"
              alt="Sarwat Majeed"
              src="/accessts/picture/Profile Picture.jpeg"
              width={200} 
              height={200} 
              priority={true} 
            />
          </div>
          
          <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-8 flex flex-col md:items-start md:text-left mb-12 md:mb-0 items-center text-center">
            <h1 className="title-font text-3xl sm:text-4xl mb-4 font-medium text-gray-900">
              Explore about me
            </h1>
            <p className="mb-6 leading-relaxed text-sm sm:text-base lg:text-lg">
              Welcome to my portfolio! I am a dedicated Mathematics educator and a versatile developer with a passion for leveraging mathematical principles to solve complex problems. Proficient in a wide range of programming languages—including TypeScript, JavaScript, HTML, and CSS—as well as frameworks like React, Next.js, Tailwind CSS, and Bootstrap, I thrive at the intersection of mathematics and technology.
              <br />
              <br />
              I enjoy using my technical knowledge to bridge the gap between theory and practice. This unique combination allows me to create engaging learning experiences and robust applications that address real-world challenges.
              <br />
              <br />
              My journey in the tech world has equipped me with the skills to develop sophisticated applications and algorithms while harnessing the analytical power of mathematics. I take pleasure in tackling challenges and transforming abstract concepts into practical solutions that deliver meaningful impact.
              <br />
              <br />
              I am committed to continuous learning and staying at the forefront of emerging technologies, always seeking new ways to integrate my mathematical expertise into my development work. Thank you for exploring my portfolio; I look forward to sharing my journey and collaborating on exciting projects!
            </p>
            <div className="flex flex-wrap justify-center md:justify-start">
              <Link href="#skills">
                <button className="mb-2 md:mb-0 mr-2 inline-flex text-white bg-slate-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-base lg:text-lg">
                  View My Skills
                </button>
              </Link>
              <Link href="#projects">
                <button className="mb-2 md:mb-0 inline-flex text-white bg-amber-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-base lg:text-lg">
                  View My Work
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
