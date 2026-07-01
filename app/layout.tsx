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

const SITE = "https://kumail-portfolio-three.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Kumail Raza | Applied AI & Full Stack Engineer",
  description:
    "Applied AI engineer with 7+ years in software, building agentic and LLM powered products in production on AWS Bedrock, Gemini, LangGraph, and AG2/AutoGen, with strong full stack and cloud foundations. Open to remote roles.",
  keywords: [
    "Kumail Raza",
    "Applied AI Engineer",
    "AI Engineer",
    "LLM",
    "Agentic AI",
    "LangGraph",
    "AWS Bedrock",
    "Full Stack Developer",
    "Next.js",
    "Python",
    "Remote",
  ],
  authors: [{ name: "Kumail Raza" }],
  openGraph: {
    title: "Kumail Raza | Applied AI & Full Stack Engineer",
    description:
      "Building agentic and LLM powered products in production, with strong full stack and cloud foundations. Open to remote roles.",
    url: SITE,
    siteName: "Kumail Raza",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumail Raza | Applied AI & Full Stack Engineer",
    description: "Applied AI engineer building agentic and LLM powered products in production.",
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
