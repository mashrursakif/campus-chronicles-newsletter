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
        <div className='bg-grad'>
          <div className='max-w-xl mx-auto border-b-2 border-amber-900 z-50 flex items-center justify-around p-6'>
            <div>
              <Link
                className='text-xl font-bold text-primary'
                href='/#newsletter-list'
              >
                Newsletters
              </Link>
            </div>

            <div>
              <Link className='text-xl font-bold text-primary' href='/about'>
                About
              </Link>
            </div>
          </div>

          <div className='min-h-screen'>{children}</div>
        </div>
      </body>
    </html>
  );
}
