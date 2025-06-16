import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TopNavBar } from "./components/TopNavBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata:Metadata = {
  title: "ResumeBuilder - Free Resume Builder",
  description:
    "ResumeBuilder is a free, open-source, and powerful resume builder that allows anyone to create a modern professional resume in 3 simple steps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <TopNavBar />
        {children}
      </body>
    </html>
  );
}
