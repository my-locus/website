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
  title: "Locus",
  description: "A great match deserves more than an awkward coffee date",

  // Open Graph (OG) tags (which web crawlers like Apple's will read when someone shares your)
  // website
  openGraph: {
    // title: 'Your Amazing Page Title', // Will default to metadata.title if not set
    // description: 'A compelling description...', // Will default to metadata.description
    // siteName: 'Your Site Name',
    url: 'https://www.trylocus.app', // The canonical URL
    
    images: [
      {
        url: 'https://www.trylocus.app/images/your-chosen-preview-image.jpg',
        width: 1200,
        height: 630,
        alt: 'A description of your preview image',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
