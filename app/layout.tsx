import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  description: "As a Computer Engineer with over 3 years of corporate exposure and 2 years of technical experience, I have exhibited problem solving skills and technical acumen. My polished communication skills, coupled with extensive leadership experience, have been pivotal in propelling multiple startups and small-scale companies toward operational excellence and scalability.",
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
        {/* Thumbnail Image */}
        <a href="https://ibb.co/qp2yd67">
          <img src="https://i.ibb.co/qp2yd67/Screenshot-2024-10-26-182613.png" alt="Thumbnail" />
        </a>
      </body>
    </html>
  );
}
