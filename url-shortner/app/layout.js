import { Geist, Geist_Mono, Roboto_Mono, Martian_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["700"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // adjust as needed
});

export const metadata = {
  title: "Minilink",
  description: "A simple and user-friendly URL shortener",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${robotoMono.variable}
          ${martianMono.variable}
          antialiased font-martianMono
        `}
      >
        <Navbar />
        <div className="h-[84vh] w-full flex justify-center items-center bg-green-100">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
