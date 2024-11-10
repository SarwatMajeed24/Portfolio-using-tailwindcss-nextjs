import React from 'react';
import { FaGithub } from "react-icons/fa6";
import { SiVercel } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import Link from 'next/link';

const Contact = () => {
  return (
    <div id="contact" className="bg-gradient-to-r from-pink-300 to-red-500">
      <section className="text-gray-600 body-font relative">
        <div className="container px-4 sm:px-6 lg:px-8 py-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-2xl sm:text-3xl font-medium title-font mb-4 text-gray-900">
              Contact
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black">
              Feel free to contact me
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-black">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-black">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Send Message
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-black hover:text-indigo-600">sarwatmajeed2015@gmail.com</a>
                <p className="leading-normal my-5">
                  Gulshan-e-Iqbal block 14
                  <br />
                </p>
                <div className="flex justify-center space-x-4">
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
                    href="https://www.linkedin.com/feed/" 
                    className="text-blue-800"
                  >
                    <FaLinkedin className='text-2xl sm:text-3xl hover:text-blue-600' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
