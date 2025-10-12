"use client";

import "./globals.css";
import Image from "next/image";
import thumbtackBlack from "../../assets/locus-thumbtack-black.png";
import thumbtackWhite from "../../assets/locus-thumbtack-white.png";

import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check the user's system preference for dark mode (tailwind also uses this under the hood)
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (event) => {
      setIsDarkMode(event.matches);
    };
    mediaQuery.addEventListener("change", handleChange);

    // Clean up the event listener when the component unmounts to prevent memory leaks
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div>
      <header className="bg-violet-400 dark:bg-violet-800">
        <nav className="container flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-x-6 md:gap-x-12">
            <a href="#">
              <span className="sr-only">Locus</span>
              <Image
                src={thumbtackBlack}
                alt="Locus Logo"
                className="h-8 w-auto dark:hidden"
              />
              <Image
                src={thumbtackWhite}
                alt="Locus Logo"
                className="h-8 w-auto hidden dark:block"
              />
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
            <a href="https://apps.apple.com/us/app/locus-find-places-together/id6752917187?platform=iphone" className="flex items-center gap-1 rounded-lg bg-violet-700 px-5 py-2 text-sm font-semibold text-white hover:text-black dark:border-black dark:bg-black dark:hover:bg-white">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}
