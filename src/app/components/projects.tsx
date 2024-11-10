import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


import countdownTimerImg from '../../../public/accessts/picture/countdowntimer.jpeg';
import cliAtmMachineImg from '../../../public/accessts/picture/Cli ATM Machine.jpeg';
import hackathonImg from '../../../public/accessts/picture/resume builder.jpeg';
import weatherwidgetImg from '../../../public/accessts/picture/weather widget.jpeg';
import birthdaywishImg from '../../../public/accessts/picture/birthday wish.jpeg';
import hackathonImg2 from '../../../public/accessts/picture/Dynamic Resume.jpeg';

const Projects = () => {
  return (
    <div id="projects" className="bg-gradient-to-r from-pink-300 to-red-500 min-h-screen">
      <section className="text-gray-600 body-font min-h-full">
        <div className="container px-5 py-24 mx-auto min-h-full flex flex-col justify-center">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Work
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black">
              I have used my skills(like HTML, CSS, Typescript, Next.js, React, TailwindCSS) for making the following projects
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Project Class */}
            <div className="flex relative">
              <Image
                alt="Countdown Timer"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={countdownTimerImg}
                layout="fill"
                objectFit="cover"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  Countdown Timer
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  30 Days 30 Projects
                </h1>
                <p className="leading-relaxed">
                  This is the 1st day of 30 days 30 projects. Countdown timer using Next.js, Tailwind CSS, and Shadcn UI.
                </p>
                <Link target="blank" href={"https://30-days-30-projects-challenge.vercel.app/"}>
                  <p className="leading-relaxed text-indigo-500 hover:underline">
                    View Project...
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex relative">
              <Image
                alt="Cli ATM Machine"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={cliAtmMachineImg}
                layout="fill"
                objectFit="cover"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  Cli ATM Machine
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Ramzan Coding Night projects
                </h1>
                <p className="leading-relaxed">
                  This is a CLI-based ATM machine. In this project, different features like fast cash withdrawal and bill payment are used.
                </p>
                <Link target="blank" href={"https://github.com/SarwatMajeed24/ATM-project.git"}>
                  <p className="leading-relaxed text-indigo-500 hover:underline">
                    View Project...
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex relative">
              <Image
                alt="Hackathon"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={hackathonImg}
                layout="fill"
                objectFit="cover"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  Hackathon Milestone 1
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Quarter 2 First Hackathon
                </h1>
                <p className="leading-relaxed">
                  This is my first Next.js hackathon. In this project, I used Next.js and TailwindCSS. Here the link to the first milestone.
                </p>
                <Link target="blank" href={"https://static-interactive-resume-builder-omega.vercel.app/"}>
                  <p className="leading-relaxed text-indigo-500 hover:underline">
                    View Project...
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex relative">
              <Image
                alt="Weather Widget"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={weatherwidgetImg}
                layout="fill"
                objectFit="cover"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  Weather Widget
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  30 Days 30 Project
                </h1>
                <p className="leading-relaxed">
                  This is the 2nd day of 30 days 30 projects. Weather Widget using Next.js, Tailwind CSS, and Shadcn UI.
                </p>
                <Link target="blank" href={"https://30-days-30-projects-challenge-q8ka.vercel.app/"}>
                  <p className="leading-relaxed text-indigo-500 hover:underline">
                    View Project...
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex relative">
              <Image
                alt="Birthday Wish"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={birthdaywishImg}
                layout="fill"
                objectFit="cover"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  Birthday Wish
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  30 Days 30 Project
                </h1>
                <p className="leading-relaxed">
                  This is the 3rd day of 30 days 30 projects. Birthday Wish using Next.js, Tailwind CSS, and Shadcn UI.
                </p>
                <Link target="blank" href={"https://30-days-30-projects-challenge-ojpj.vercel.app/"}>
                  <p className="leading-relaxed text-indigo-500 hover:underline">
                    View Project...
                  </p>
                </Link>
              </div>
            </div>


            <div className="flex relative">
              <Image
                alt="Hackathon"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={hackathonImg2}
                layout="fill"
                objectFit="cover"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  Hackathon Milestone 3
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Quarter 2 First Hackathon
                </h1>
                <p className="leading-relaxed">
                  This is my first Next.js hackathon. In this project, I used Next.js and TailwindCSS. Here the link to the first milestone.
                </p>
                <Link target="blank" href={"https://dynamic-resume-builder-with-form-milestone3.vercel.app/"}>
                  <p className="leading-relaxed text-indigo-500 hover:underline">
                    View Project...
                  </p>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects;
