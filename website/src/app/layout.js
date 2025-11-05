import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "locus",
  description: "Stop settling for boring boba dates. Locus uses personality science to create perfect date plans for college students. Get personality insights and let AI find your spark.",

  // Open Graph (OG) tags (which web crawlers like Apple's will read when someone shares your)
  // website
  openGraph: {
    // title: ""
    description: 'Locus is an AI wingman that knows both of you. You both take a quick personality quiz - then get insights about each other and date plans tailored to your combined personalities.',
    siteName: 'locus',
    url: 'https://www.trylocus.app', // The canonical URL

    images: [
      {
        url: 'https://www.trylocus.app/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'locus - A mutual AI wingman for first dates',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  itunes: {
    appId: '6752917187',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}