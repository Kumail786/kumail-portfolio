import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE = "https://kumail-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Kumail Raza | Senior Software Engineer, Full Stack & AI",
  description:
    "Senior Software Engineer with 7+ years building scalable SaaS platforms and AI products. Full stack (Next.js, React, Python) and applied AI on AWS. Open to remote roles.",
  keywords: [
    "Kumail Raza",
    "Senior Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Next.js",
    "React",
    "Python",
    "AWS",
    "Remote",
  ],
  authors: [{ name: "Kumail Raza" }],
  openGraph: {
    title: "Kumail Raza | Senior Software Engineer, Full Stack & AI",
    description:
      "Building scalable software and AI products. Full stack plus applied AI on AWS. Open to remote roles.",
    url: SITE,
    siteName: "Kumail Raza",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumail Raza | Senior Software Engineer",
    description: "Full stack and AI engineer building scalable software and AI products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
