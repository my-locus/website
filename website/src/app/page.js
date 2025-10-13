"use client";

import "./globals.css";
import Image from "next/image";
import thumbtackBlack from "../../assets/locus-thumbtack-black.png";
import thumbtackWhite from "../../assets/locus-thumbtack-white.png";
import locationDecision from "../../assets/location-confirmation.jpg";

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
            <a href="#features" className="text-base font-semibold text-gray-900 dark:text-white">
              Features
            </a>
            <a href="#about" className="text-base font-semibold text-gray-900 dark:text-white">
              About
            </a>
            <a href="./support" className="text-base font-semibold text-gray-900 dark:text-white">
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
      <section id="features" className="bg-white py-32">
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
      <section className="bg-white py-26">
        <div className="mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Remove the Annoying External Factors
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="text-center">
              <div className="mx-auto h-48 w-48 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Image</span>
              </div>
            </div>
            <div className="text-center">
              <div className="mx-auto h-48 w-48 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="bg-white py-26">
        <div className="mx-auto px-6 lg:px-8">
          <div className="text-center flex flex-col items-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Focus on Socializing with a Personalized<br />Location Finding and Date Planning Assistant
            </h2>
            <Image
                src={locationDecision}
                alt="location decision"
                className="mt-10 h-130 ml-3 w-auto"
              />
          </div>
        </div>
      </section>
      <footer className="bg-violet-400 dark:bg-violet-800">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-8">
          <div className="flex items-center gap-6">
            <p className="text-base text-gray-900 dark:text-white">
              © 2025 Locus
            </p>
            <a href="#" className="text-base text-gray-900 dark:text-white">
              Terms
            </a>
            <a href="./privacy" className="text-base text-gray-900 dark:text-white">
              Privacy
            </a>
          </div>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/mylocusapp" className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
