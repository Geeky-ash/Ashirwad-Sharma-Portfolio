import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavBar from "../components/Navbar"; // keep this
import Footer from '@/components/Footer';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashirwad Sharma - Applied Data Scientist & Full-Stack AI Developer",
  authors: [{ name: "Ashirwad Sharma" }],
  description: "Portfolio of Ashirwad Sharma, an AI Developer from Mumbai, India with expertise in NLP, LLMs, and intelligent systems.",
  icons: "/Ashirwad Profile.jpeg",
  keywords: [
    "Ashirwad Sharma",
    "Portfolio of Ashirwad",
    "Ashirwad Sharma portfolio",
    "Ashirwad Sharma portfolio website",
    "Ashirwad Sharma portfolio website of rajesh",
    "ashirwad sharma",
    "Ashirwad Sharma",
    "Ashirwad Sharma portfolio",
    "ashirwad",
    "ashirwad portfolio",
    "Ashirwad portfolio website",
    "Full stack web developer",
    "Full stack developer in Mumbai",
    "Full stack developer in Maharashtra",
    "Full stack developer in india",
    "Full stack developer in nashik",
    "Full stack developer in mumbai maharashtra",
    "Full stack developer in india",
    "Web developer",
    "Web developer in nashik",
    "Web developer in maharashtra",
    "Web developer in india",
    "Web developer in sandip foundation",
    "Web developer in nashik maharashtra",
    "Website developer in mumbai",
    "Website developer in maharashtra",
    "Website developer in india",
    "Need a website developer",
    "Best website developer",
    "Best website developer in mumbai",
    "Best website developer in maharashtra",
    "Best website developer in india",
    "Best website developer in Sandip Foundation",
    "Best website developer in mumbai maharashtra",
    "Best full stack web developer",
    "Full stack website developer for my business",
    "Web developer near me",
    "Full stack web developer",
    "Full stack developer in Mumbai",
    "Get Material",
    "Web development",
    "Software engineer",
    "Software engineer in Mumbai",
    "Software engineer in Nashik",
    "Web Developer in Mumbai",
    "Website Developer in Berhampur",
    "Web Developer in India",
    "Website Developer in India",
    "Web Developer in Odisha",
    "Website Developer in Odisha",
    "Web Developer in Berhampur Odisha",
    "Website Developer in Berhampur Odisha",
    "Talagana Rajesh nist",
    "Talagana Rajesh Get Material",
    "Talagana Rajesh berhampur",
    "Website developers",
    "Website developers in berhampur",
    "Website developers in india",
    "Near by website developers",
    "Best website developers",
    "Best full stack developers",
    "Need a web developer",
    "Freelance web developer",
    "Freelance web developer in berhampur",
    "Freelance web developer in odisha",
    "Freelance web developer in india",
    "Freelancer ashirwad",
    "Freelancer ashirwad mumbai",
    "ashirwad freelancer",
    "ashirwad freelancing",
    "Freelance web developer in mumbai maharashtra",
    "Freelance web developer in nashik maharashtra",
    "Freelance web developer in pune maharashtra",
    "Freelance web developer in pune",
    "Freelance web developer in pune unversity",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ashirwad Sharma",
              image: "https://talaganarajesh.vercel.app/talaganaRajesh.jpg",
              jobTitle: "Website Developer",
              url: "https://talaganarajesh.vercel.app/",
              sameAs: [
                "https://www.linkedin.com/in/ashirwad-sharma-91305329a",
                "https://github.com/Geeky-ash",
                "https://x.com/Kakashi46077413",
                "https://www.instagram.com/ig.ashh__/"
              ]
            })
          }}
        />
        <meta name="google-site-verification" content="ETpfMVbd5MVRbbOSI8n5MtBcYkJc7IUWaw9QGhatoCE" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Pass items to NavBar */}
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
