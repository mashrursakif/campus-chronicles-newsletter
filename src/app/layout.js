// Fuzzy Bubbles, Pangolin

import { Fuzzy_Bubbles, Indie_Flower, Pangolin } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

// Caveat brush, indie flower

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const fontClass = Pangolin({
  variable: '--custom-font',
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Campus Chronicles',
  description: 'Site for campus chronicles newsletter',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${fontClass.variable} antialiased`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}
