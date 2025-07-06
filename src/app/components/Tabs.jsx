'use client';

import Link from 'next/link';
import { useState } from 'react';
import About from './About';
import Newsletters from './Newsletters';

export default function Tabs({ newsletters }) {
  const [tab, setTab] = useState('#newsletters');

  // useEffect(() => {
  //   if (window.location.hash) {
  //     setTab(window.location.hash);
  //   }
  // }, []);

  return (
    <>
      <div className='w-full max-w-xl mx-auto border-amber-900 z-50 flex items-center'>
        <Link
          className={`text-xl font-bold text-primary p-6 border-amber-900 w-[50%] text-center ${
            tab == '#newsletters' ? 'border-b-2' : ''
          }`}
          href='/#newsletters'
          onClick={(e) => {
            e.preventDefault();
            setTab('#newsletters');
          }}
        >
          Newsletters
        </Link>

        <Link
          className={`text-xl font-bold text-primary p-6 border-amber-900 w-[50%] text-center ${
            tab == '#about' ? 'border-b-2' : ''
          }`}
          href='/#about'
          onClick={(e) => {
            e.preventDefault();
            setTab('#about');
          }}
        >
          About
        </Link>
      </div>

      {tab == '#newsletters' ? (
        <Newsletters newsletters={newsletters} className='' />
      ) : tab == '#about' ? (
        <About />
      ) : (
        <></>
      )}
    </>
  );
}
