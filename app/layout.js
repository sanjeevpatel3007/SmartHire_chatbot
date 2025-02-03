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

export const metadata = {
  title: 'SmartHire Chatbot - Intelligent Website Content Analysis',
  description: 'An AI-powered chatbot that analyzes website content and answers questions intelligently using Gemini Pro AI.',
  keywords: ['website analysis', 'AI chatbot', 'content analysis', 'Gemini Pro', 'SmartHire'],
  authors: [{ name: 'SmartHire Team' }],
  openGraph: {
    title: 'SmartHire Chatbot',
    description: 'Intelligent website content analysis powered by Gemini Pro AI',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: '#4F46E5',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
