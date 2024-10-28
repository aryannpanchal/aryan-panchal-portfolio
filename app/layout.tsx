import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aryan Panchal Portfolio Website",
  description: "As a Computer Engineer with over 3 years of corporate exposure and 2 years of technical experience, I have exhibited problem solving ability and technical skill.",
  openGraph: {
    title: "Aryan Panchal Portfolio Website",
    description: "As a Computer Engineer with over 3 years of corporate exposure and 2 years of technical experience, I have exhibited problem solving ability and technical skill.",
    url: "https://aryan-panchal-portfolio.vercel.app/", // Replace with your actual URL
    siteName: "Aryan Panchal",
    images: [
      {
        url: "/ap.png", // Path to your local image
        width: 1200,  // Adjust width as needed
        height: 630,  // Adjust height as needed
        type: "image/png", // Change to 'image/png'
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
