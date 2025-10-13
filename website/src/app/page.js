"use client";

import "./globals.css";
import Image from "next/image";
import thumbtackBlack from "../../assets/locus-thumbtack-black.png";
import thumbtackWhite from "../../assets/locus-thumbtack-white.png";

import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showNavDownload, setShowNavDownload] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (event) => {
      setIsDarkMode(event.matches);
    };
    mediaQuery.addEventListener("change", handleChange);

    const handleScroll = () => {
      const heroSection = document.querySelector('.hero');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setShowNavDownload(rect.bottom < 0);
      }
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header className="relative z-50">
        <nav className={`fixed top-0 w-full mx-auto flex items-center justify-between px-6 py-5 transition-colors duration-300 ${isScrolled ? 'bg-violet-400 dark:bg-violet-800' : 'bg-transparent'}`}>
          <div className="flex items-center gap-x-6 md:gap-x-12">
            <a href="#" className="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white">
              <Image
                src={thumbtackBlack}
                alt="Locus Logo"
                className="h-8 ml-3 w-auto dark:hidden"
              />
              <Image
                src={thumbtackWhite}
                alt="Locus Logo"
                className="h-8 ml-3 w-auto hidden dark:block"
              />
              Locus
            </a>
            <a href="#" className="text-base font-semibold text-gray-900 dark:text-white">
              Features
            </a>
            <a href="#" className="text-base font-semibold text-gray-900 dark:text-white">
              About
            </a>
            <a href="/support" className="text-base font-semibold text-gray-900 dark:text-white">
              Contact
            </a>
          </div>
          
          <div className="ml-auto">
            {showNavDownload && (
              <a href="https://apps.apple.com/us/app/locus-find-places-together/id6752917187?platform=iphone" className="flex items-center gap-1 rounded-lg bg-violet-700 px-3 pr-4 py-2 text-sm font-semibold text-white hover:text-black dark:border-black dark:bg-black dark:hover:bg-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download
              </a>
            )}
          </div>
        </nav>
      </header>
      <section className="hero bg-violet-400 dark:bg-violet-800 relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-2xl py-48 md:py-58">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white md:text-7xl">
              Connect and Find Places Together
            </h1>
            <p className="mt-8 text-xl font-medium text-pretty text-black md:text-xl/8">
              Remove the friction in modern dating
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6 text-lg md:text-2xl">
              <a href="https://apps.apple.com/us/app/locus-find-places-together/id6752917187?platform=iphone" className="flex items-center gap-1 rounded-xl bg-violet-700 pl-8 pr-9 py-4 font-semibold text-white hover:text-black hover:-translate-y-1 transition-transform dark:border-black dark:bg-black dark:hover:bg-white">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download
              </a>
              <a href="#" className="flex items-center gap-1 rounded-xl bg-white px-8 py-4 font-semibold text-black hover:bg-gray-100 hover:text-gray-700 hover:-translate-y-1 transition-transform dark:border-black">
                Email Survey
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </section>
      <section className="bg-white py-102">
        <div className="mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How It Works
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto h-48 w-48 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-500">Image 1</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Take a Fun Quiz
              </h3>
            </div>
            <div className="text-center">
              <div className="mx-auto h-48 w-48 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Image 2</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Join a Group
              </h3>
            </div>
            <div className="text-center">
              <div className="mx-auto h-48 w-48 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Image 3</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Find Curated Date Experiences
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
