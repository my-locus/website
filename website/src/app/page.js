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
    <div className="w-full min-h-screen flex justify-center gap-3 flex-col items-center outline-1">
      <div className="flex gap-5 flex-col items-center">
        <p className="comic-relief text-5xl text-center w-48 ">Locus</p>
        {isDarkMode && (
          <Image
            src={thumbtackWhite}
            alt="Locus Thumbtack White"
            width={100}
            height={100}
            className="w-32 h-32"
          />
        )}
        {isDarkMode == false && (
          <Image
            src={thumbtackBlack}
            alt="Locus Thumbtack Black"
            width={100}
            height={100}
            className="w-32 h-32"
          />
        )}
      </div>

      <p className="comic-relief text-2xl text-center">
        Curating experiences for couples. Coming soon...
      </p>
    </div>
  );
}
