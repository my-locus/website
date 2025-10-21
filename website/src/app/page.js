"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Demo from "../../assets/demo.png"
import { Download, Sparkles, MapPin, ChevronDown } from 'lucide-react';
import Logo from "./components/ui/Logo"
import Modal from "./components/ui/Modal"
import DownloadApple from "../../assets/download_apple.svg"
import PreregisterGoogle from "../../assets/preregister_google.png.png"

export default function LocusLanding() {

  const [openFaq, setOpenFaq] = useState(null);
  const [showAndroidModal, setShowAndroidModal] = useState(false);

  const faqs = [
    {
      question: "How does Locus work?",
      answer: "Locus gets to know both of you through a quick, insightful personality quiz. Our AI then finds your common ground and designs a complete blueprint for a great hangout—the right vibe, the perfect activity, and the ideal location, all built around what makes you both tick."
    },
    {
      question: "Is Locus free?",
      answer: "Yes, the core features of Locus—getting personalized plans and connecting with another person—are free to use. As a UC Irvine launched startup, all your features are available at no cost."
    },
    {
      question: "Do both people need to have the app?",
      answer: "Yes, for the best and most accurate recommendations, both people need to download the app and complete their personality quiz. This ensures the plan is perfectly personalized for both of you. When you invite someone, they get a special link that takes them right to the app for a smooth and quick setup."
    },
    {
      question: "What makes Locus different from just Googling date ideas?",
      answer: "Googling gives you endless, generic lists that create more guesswork. Locus eliminates the guesswork entirely. Instead of just a list of places, Locus acts as your expert guide, providing a small, curated set of plans based on the unique combination of your two personalities. It's not about finding a popular place; it's about finding the right place for you and your date to have a genuine connection."
    },
    {
      question: "What's the best way to invite someone to use Locus without it being awkward?",
      answer: "We recommend framing it as a fun, easy way to skip the planning headache. Hey, so I just found this new app called Locus. It's like an AI that finds cool spots based on our personalities. Wanna try it out to find a place for us to meet?"
    },
    {
      question: "When is Android coming?",
      answer: "Great news! The Android version of Locus is currently in a closed beta. We're looking for passionate users to help us test the app, find bugs, and give us feedback so we can move on to a public release. If you're an Android user and want to be one of the first to try Locus, you can sign up to become a beta tester right here: [Link to your beta sign-up form]. Your feedback is crucial to helping us bring the full Locus experience to the entire Android community!"
    },
  ];

  return (
    <div className="min-h-screen bg-off-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-6">
            <a
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
            </a>
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{
                background: 'linear-gradient(135deg, #7F5FFF 0%, #5C43E0 100%)',
                boxShadow: '0 2px 8px rgba(127, 95, 255, 0.3)'
              }}>
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Now live at UC Irvine</span>
              </div>


              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700 mb-6 leading-tight">
                A great match deserves more than an{' '}
                <span className='text-locus-off-purple'>awkward coffee date</span>
              </h1>

              <p className="text-lg md:text-xl mb-8 text-slate-700">
                Locus acts as your personal AI wingman after you match, designing a full date plan—from the vibe to the location—based on both your personalities.</p>

              {/* App Store Buttons */}
              <div className="flex flex-row gap-5 mb-6">
                <a
                  href="https://apps.apple.com/us/app/locus-find-places-together/id6752917187?platform=iphone"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center w-48 h-14 rounded-2xl"
                >
                  <Image src={DownloadApple} alt="app store icon" className="w-full h-full object-contain" />
                </a>

                <button
                  onClick={() => setShowAndroidModal(true)}
                  className="w-48 h-14 rounded-2xl hover:cursor-pointer"
                >
                  <Image src={PreregisterGoogle} alt="google play icon" className="w-full h-full object-contain" />
                </button>
              </div>

              <p className="text-sm text-slate-400">
                Free to download • AI-powered date planning • Perfect for after you match
              </p>
            </div>

            {/* Right side - Phone mockup */}
            <div className="relative hidden md:flex justify-center items-center">
              <div
                className="w-[340px] h-[680px] rounded-[55px] shadow-2xl relative overflow-hidden"
                style={{
                  backgroundColor: '#1a1a1a',
                  boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0), 0 0 0 8px #2a2a2a, 0 0 0 10px #1a1a1a'

                }}
              >
                {/* Screen content */}
                <div className="absolute p-4" style={{ backgroundColor: '#f2f2f2' }}>

                  {/* Screenshot area */}
                  <div
                    className="w-full h-full overflow-hidden"
                  >
                    <Image
                      src={Demo}
                      alt="Locus App Demo"
                      width={320}
                      height={640}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
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
                    <p style={{ color: '#717171' }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6" style={{ borderColor: '#F2F2F7' }}>
        <div className="px-24 flex items-center justify-between">
          <div />

          <p className='text-slate-700 font-lato'>&copy;2025 Locusapp</p>
        </div>
      </footer>

      {/* Android Beta Modal */}
      <Modal isOpen={showAndroidModal} onClose={() => setShowAndroidModal(false)}>
        <div className="text-center">
          <h3 className="text-xl font-bold text-slate-700 mb-4">
            Android Beta Testing
          </h3>
          <p className="text-slate-600 mb-6">
            The Android version is currently in beta testing. Join our beta program to be among the first to try Locus on Android!
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