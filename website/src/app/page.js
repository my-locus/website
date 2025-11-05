"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Demo from "../../assets/demo2.png"
import { Download, Sparkles, MapPin, ChevronDown } from 'lucide-react';
import Logo from "./components/ui/Logo"
import Modal from "./components/ui/Modal"
import DownloadApple from "../../assets/download_apple.svg"
import PreregisterGoogle from "../../assets/preregister_google.png.png"
import GetAppButton from './components/ui/GetAppButton';

export default function LocusLanding() {

  const [openFaq, setOpenFaq] = useState(null);
  const [showAndroidModal, setShowAndroidModal] = useState(false);

  const faqs = [
    {
      question: "How does locus work?",
      answer: "Both you and your partner complete a quick onboarding personality quiz based on the OCEAN model. Our AI analyzes both personalities to recommend spots that you both and gives you insight about each other."
    },
    {
      question: "Is locus free?",
      answer: "Yes. Free to use."
    },
    {
      question: "Do both people need to have the app?",
      answer: "Yes so you can get the most accurate results. However we're commited to making the sharing process as easy as possible."
    },
    {
      question: "What makes locus different?",
      answer: "Existing apps either keep you stuck on your phone with endless icebreakers or no direction. locus gets you off the app and into real life faster. We're not a dating app. We help our users have better connections with the partner they just met, like an actual wingman."
    },
    {
      question: "What's a way to invite someone to use locus?",
      answer: "Locus is an AI wingman that knows both of us. We both take a quick personality quiz - then get insights about each other and date plans tailored to our combined personalities."
    },
    {
      question: "Does locus learn from my preferences?",
      answer: "Yes. Our AI learns from the date plan suggestions you use and reject, giving you a more personalized experience the more you use locus. This means better recommendations over time that truly match your style."
    },
    {
      question: "When is Android arriving?",
      answer: "The Android version of locus is currently in a closed beta. We're looking for Android insiders to help us test, find bugs, and give feedback . If you're an Android user and want to be one of the first to try locus, you can sign up to become a beta tester."
    },
  ];

  return (
    <div className="min-h-screen bg-off-white">
      {/* Featured Header */}
      <div className="bg-yellow-400 py-3">
        <div className="container mx-auto px-4">
          <p className="lato text-center text-sm font-bold text-slate-800">
            🎉 Featured by UCI ANTrepreneur Center -{" "}
            <a
              href="https://antrepreneur.uci.edu/2025/10/24/interview-with-antrepreneurs-larry-le-and-aadi-agrawal-of-locus/"
              target="_blank"
              rel="noopener"
              className="text-blue-500 underline hover:no-underline"
            >
              Read the full interview
            </a>
          </p>
        </div>
      </div>

      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-6">
            <GetAppButton />
            {/* <a
              href="/manifesto"
              className="font-medium text-slate-700 hover:text-slate-400 transition-colors duration-300"
            >
              Manifesto
            </a>
            <a
              href="#faq"
              className="font-medium text-slate-700 hover:text-slate-400 transition-colors duration-300"
            >
              FAQ
            </a> */}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-10 relative overflow-hidden">
        {/* Animated grid background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(127, 95, 255, 0.15) 1.5px, transparent 1.5px),
              linear-gradient(90deg, rgba(127, 95, 255, 0.15) 1.5px, transparent 1.5px)
            `,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 90% 70% at 50% 40%, black 20%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 40%, black 20%, transparent 100%)',
            animation: 'fadeGrid 4s ease-in-out infinite alternate'
          }}
        />

        <style>{`
          @keyframes fadeGrid {
            0% { opacity: 0.6; }
            100% { opacity: 1; }
          }
        `}</style>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div>



              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700 mb-6 leading-tight">
                A great match deserves more than an{' '}
                <span className='text-locus-off-purple'>awkward boba date</span>
              </h1>

              <p className="comic-relief text-lg md:text-xl mb-8 text-slate-700">
                Skip the planning stress and back and forth texts trying to learn about someone. locus uses a quick onboarding personality quiz to give you insight and a date plan that lets you both be yourselves.</p>

              {/* App Store Buttons */}
              <div className="flex flex-row gap-3 sm:gap-5 mb-6">
                <a
                  href="https://apps.apple.com/us/app/locus-find-places-together/id6752917187?platform=iphone"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center w-36 sm:w-48 h-12 sm:h-14 rounded-2xl flex-shrink-0"
                >
                  <Image src={DownloadApple} alt="app store icon" className="w-full h-full object-contain" />
                </a>

                <button
                  onClick={() => setShowAndroidModal(true)}
                  className="w-36 sm:w-48 h-12 sm:h-14 rounded-2xl hover:cursor-pointer flex-shrink-0"
                >
                  <Image src={PreregisterGoogle} alt="google play icon" className="w-full h-full object-contain scale-105 sm:scale-100" />
                </button>
              </div>

              <p className="text-sm text-slate-400">
                Free to download • Perfect for college students • Built by UC Irvine students
              </p>
            </div>

            {/* Right side - Phone mockup */}
            <div className="relative hidden lg:flex justify-center items-center">
              <div
                className="w-[340px] h-[680px] rounded-[55px] shadow-2xl relative overflow-hidden"
                style={{
                  backgroundColor: '#1a1a1a',
                  boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0), 0 0 0 8px #2a2a2a, 0 0 0 10px #1a1a1a'

                }}
              >
                {/* Top notch */}
                <div className="absolute top-7 left-1/2 transform -translate-x-1/2 w-22 h-6 bg-black rounded-full z-20"></div>

                {/* Screen content */}
                <div className="absolute p-4" style={{ backgroundColor: '#f2f2f2' }}>

                  {/* Screenshot area */}
                  <div
                    className="w-full h-full overflow-hidden"
                  >
                    <Image
                      src={Demo}
                      alt="locus App Demo"
                      width={320}
                      height={640}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Bottom line */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-36 h-1 bg-gray-600 rounded-full z-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-700 text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="border-t" style={{ borderColor: '#E5E7EB' }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b transition-all duration-300"
                style={{ borderColor: '#E5E7EB' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:cursor-pointer"
                >
                  <h3 className="text-xl font-bold pr-8" style={{ color: '#314158' }}>
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 flex-shrink-0 transition-transformduration-300 ${openFaq === index ? 'rotate-180' : ''
                      }`}
                    style={{ color: '#314158' }}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="px-6 pb-6">
                    <p className='comic-relief' style={{ color: '#717171' }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-6">
            Your AI wingman is waiting
          </h2>
          <p className="comic-relief text-lg text-slate-600 mb-8">
            Stop settling for safe, boring dates that kill the vibe. Get personality insights, a place that fits you both, and let science create sparks.
          </p>

          <div className="flex flex-row justify-center gap-3 sm:gap-5">
            <a
              href="https://apps.apple.com/us/app/locus-find-places-together/id6752917187?platform=iphone"
              target="_blank"
              rel="noopener"
              className="flex items-center w-36 sm:w-48 h-12 sm:h-14 rounded-2xl flex-shrink-0"
            >
              <Image src={DownloadApple} alt="app store icon" className="w-full h-full object-contain" />
            </a>

            <button
              onClick={() => setShowAndroidModal(true)}
              className="w-36 sm:w-48 h-12 sm:h-14 rounded-2xl hover:cursor-pointer flex-shrink-0"
            >
              <Image src={PreregisterGoogle} alt="google play icon" className="w-full h-full object-contain scale-105 sm:scale-100" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6" style={{ borderColor: '#F2F2F7' }}>
        <div className="px-5 lg:px-24 flex items-center justify-between">
          <div />

          <p className='text-slate-700 lato'>&copy;2025 locusapp</p>
        </div>
      </footer>

      {/* Android Beta Modal */}
      <Modal isOpen={showAndroidModal} onClose={() => setShowAndroidModal(false)}>
        <div className="text-center">
          <h3 className="text-xl font-bold text-slate-700 mb-4">
            Android Beta Testing
          </h3>
          <p className="text-slate-600 mb-6">
            The Android version is currently in beta testing. Join our beta program to be among the first to try locus on Android!
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScaCrWWdVTitHf3WAhuqA2z0QJ57ukPe2wYzjLRlmXBeOzflA/viewform?usp=dialog"
            target="_blank"
            rel="noopener"
            className="inline-block px-6 py-3 bg-locus-off-purple text-white font-semibold rounded-xl hover:scale-105 transition-all"
            onClick={() => setShowAndroidModal(false)}
          >
            Sign Up for Beta
          </a>
        </div>
      </Modal>
    </div>
  );
}