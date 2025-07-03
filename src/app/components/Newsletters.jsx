'use client';

import Fuse from 'fuse.js';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
// import ImageWithFallback from './ImageWithFallback';

export default function Newsletters({ newsletters, className }) {
  const [query, setQuery] = useState('');

  const fuse = new Fuse(newsletters, {
    keys: ['name', 'description'],
    threshold: 0.4,
  });

  const results = useMemo(
    () => (query ? fuse.search(query).map((res) => res.item) : newsletters),
    [query]
  );

  return (
    <div
      className={`py-12 px-6 lg:px-10 w-auto md:w-[50vw] flex flex-col items-center overflow-visible ${className}`}
    >
      <div className='max-w-4xl'>
        <div className='mb-8 flex flex-col items-center'>
          <h2
            className='text-3xl text-secondary text-center font-bold mb-6'
            // id='newsletter'
          >
            Newsletters
          </h2>

          <input
            type='text'
            className='outline-none text-lg px-5 py-3 border-solid border-2 border-primary w-full max-w-2xl rounded-4xl focus-border'
            value={query}
            placeholder='Search Newsletters'
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {results.length == 0 ? (
          <p className='text-lg text-center text-primary'>
            No Newsletters Found
          </p>
        ) : (
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
            {results?.map((newsletter) => (
              <Link
                key={newsletter.id}
                href={newsletter.webViewLink}
                target='_blank'
                rel='noopener noreferrer'
                className='max-w-[480px]'
              >
                <div className='bg-lime-50 flex gap-4 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200'>
                  {/* <ImageWithFallback
                  src={newsletter.thumbnailLink}
                  // fallback='/placeholder.webp'
                  alt={newsletter.name}
                  width={100}
                  height={150}
                  // unoptimized={true}
                  className='rounded-lg w-[auto] h-fit object-cover'
                /> */}

                  <Image
                    src={newsletter.thumbnailLink}
                    alt={newsletter.name}
                    // onError={(e) => (e.srcset = 'placeholder.webp')}
                    width={100}
                    height={125}
                    // unoptimized={true}
                    className='rounded-lg w-[auto] h-fit object-cover'
                  />
                  <div>
                    <h3 className='text-xl text-primary mb-4'>
                      {newsletter.name.split('.')[0]}
                    </h3>

                    <p className='text-sm text-gray-800 mb-6'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus id pretium neque
                    </p>

                    <p className='font-bold text-sm text-black'>
                      20th January, 2025
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
