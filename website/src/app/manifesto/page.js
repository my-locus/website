import React from "react";
import Image from "next/image";
import Link from "next/link"

import Logo from "../components/ui/Logo";

export default function Manifesto() {
  return (
    <div className="w-full min-h-screen bg-off-white">
      {/* Header */}
      <header className="px-20 py-6">
        <nav className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-6">
            <Link 
              href="/manifesto"
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

      <div className="px-20 py-8 gap-10 flex flex-col">

      <div className="flex flex-col gap-3">
        <p className="text-4xl comic-relief text-slate-700">The Locus Manifesto: Securing the Connection</p>
      </div>

      <div className="max-w-3/4 flex flex-col gap-7">
        <div className="flex flex-col gap-4">
          <p className="text-2xl lato-bold text-slate-700">I. The State of Disconnect</p>
          <ThemeText 
            text={"We live in an era where connection should thrive, yet students are accepting that college is lonely, leading to an unspoken problem of social disconnect. College life is often romanticized, but upon arrival, the reality is not what was expected."} 
          />
          <ThemeText 
            text={"We recognize that the journey toward a meaningful romantic relationship is fraught with unnecessary effort and anxiety. A great match or connection deserves more than an awkward coffee date or a routine trip to the boba store."} 
          />
          <ThemeText 
            text={"The current customer value chain for dating is broken. Established methods require customers to undertake activities that are high in effort. Tools like Yelp or Google Maps only give a list of places, failing to ensure the vibe and location actually match the unique personalities of both people. This disconnect, where the place doesn't work for one partner, causes friction. This planning, this guessing, this effort, is a value eroding activity that must be eliminated."} 
          />
        </div>
        
        <div className="flex flex-col gap-4">
          <p className="text-2xl lato-bold text-slate-700">II. Our Decoupling Mandate</p>
          <ThemeText 
            text={"Locus is founded on the principle of decoupling—breaking the links of the existing customer value chain by identifying and stealing the activity that customers are most unsatisfied with. We target the weakest link in the social connection process: the high effort, time, and anxiety associated with planning a successful date."} 
          />
          <ThemeText 
            text={"Locus is the app for after you find someone. We are focused on accelerating the possibility of obtaining a good social connection and a good partner."} 
            bold={true}
          />
        </div>
        
        <div className="flex flex-col gap-4">
          <p className="text-2xl lato-bold text-slate-700">III. The Power of the Personal Wingman</p>
          <ThemeText 
            text={"We replace guesswork with engineering, turning the unpredictable process of securing a connection into a designed experience."} 
          />
          <div className="ml-4 flex flex-col gap-3">
            <ThemeText 
              text={"1. Personality First: Through an onboarding quiz, we gather your OCEAN scores and responses to create a detailed personality profile. We do the same for your potential partner. We believe that sharing these personality insights right away accelerates the possibility of getting a good partner."} 
            />
            <ThemeText 
              text={"2. The AI Wingman: Our AI acts as a personal wingman, designing a full plan—a full playbook—based on the personalities of both individuals."} 
            />
            <ThemeText 
              text={"3. The Perfect Date Plan: We provide the perfect vibe, activity, and location. Unlike simple listings, our plan is comprehensive, filling the void that causes social anxiety. This includes clarifying the general vibe of the place, suggesting appropriate formalities (what to wear), solving logistical issues like parking, and even suggesting conversation topics."} 
            />
            <ThemeText 
              text={"4. Eliminating Erosion: By taking over the organization scheme and logistical planning, we perform this activity on behalf of customers. We reduce the costs of money, time, and effort required to execute the connection activity, helping customers reduce expenses they think they should not be paying."} 
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <p className="text-2xl lato-bold text-slate-700">IV. Focus on the Connection</p>
          <ThemeText 
            text={"We decouple the value eroding activity of complex date planning from the value creating activity of genuine social connection."} 
          />
          <ThemeText 
            text={"We get the plan right so you can focus on securing that connection."} 
            bold={true}
          />
          <ThemeText 
            text={"Where modern apps also encourage you to stay on your screen, Locus is designed so you're spending less time on your phone doing icebreakers and more time having a genuine connection with someone special."} 
          />
        </div>
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

function ThemeText({ text, bold = false }) {
  if (bold) {
    return <p className="lato-bold text-lg text-slate-700">{text}</p>;
  } else {
    return <p className="lato text-lg text-slate-700">{text}</p>;
  }
}