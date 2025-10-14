import React from "react";
import Logo from "../components/ui/Logo";
import Link from "next/link"

export default function page() {
  return (
    <div className="w-full min-h-screen bg-off-white">
      {/* Header */}
      <header className="px-20 py-6">
        <nav className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-6">
            <Link 
              href="/#manifesto"
              className="font-medium text-slate-700 hover:text-slate-400 transition-colors duration-300"
            >
              Manifesto
            </Link>
            <Link
              href="/#faq"
              className="font-medium text-slate-700 hover:text-slate-400 transition-colors duration-300"
            >
              FAQ
            </Link>
          </div>
        </nav>
      </header>

      <div className="px-20 py-8 flex flex-col gap-10">

      <div className="flex flex-col gap-5 max-w-1/2">
        <h1 className="text-slate-700 text-3xl lato mb-4">Having a problem?</h1>

        <p className="text-slate-700 text-xl lato">
          We want to know about it. Your feedback regarding issues is genuinely
          important to us.
        </p>

        <p className="text-slate-700 text-xl lato">
          Please describe the issue you&apos;re experiencing in detail at{" "}
          <span className="text-xl lato text-blue-500">
            <a href="mailto:locusapp@gmail.com?&subject=Support%20Request&body=Please%20describe%20the%20issue%20you%27re%20experiencing%20in%20detail%20here.">
              locusapp@gmail.com
            </a>
          </span>{" "}
          and we&apos;ll do our best to assist you as quickly as possible.
        </p>
      </div>

      {/* Footer */}
      <footer className="py-6" style={{ borderColor: '#F2F2F7' }}>
        <div className="flex items-center justify-between">
            <div />

            <p className='text-slate-700 font-lato'>&copy;2025 Locusapp</p>
        </div>
      </footer>
      </div>
    </div>
  );
}
