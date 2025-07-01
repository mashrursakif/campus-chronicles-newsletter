// 'use client';

// import { google } from 'googleapis';
// import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsLetters from './components/Newsletters';
import Link from 'next/link';
import Image from 'next/image';

// url = `https://www.googleapis.com/drive/v3/files?q=%27${YOUR_FOLDER_ID}%27+in+parents&key=${YOUR_API_KEY}&fields=files(id,name,description)`

// export const getServerSideProps = async () => {
//   // const res = await axios.get('https://www.googleapis.com/drive/v3/files', {
//   //   params: {
//   //     key: process.env.GOOGLE_DRIVE_API_KEY,
//   //     q: `'${process.env.GOOGLE_DRIVE_FOLDER_ID}' in parents and mimeType='application/pdf'`,
//   //     fields: 'files(id, name, description)',
//   //   },
//   // });

//   console.log('Fetched newsletters:');
//   const res = fetch(
//     // `https://www.googleapis.com/drive/v3/files?q=%27${process.env.GOOGLE_DRIVE_FOLDER_ID}%27+in+parents&key=${process.env.GOOGLE_DRIVE_API_KEY}&fields=files(id,name,description)`
//     `https://www.googleapis.com/drive/v3/files?q=%27${'1LaHYRSpXlVvJFMiBDQ-R1PpJZicoqXem'}%27+in+parents&key=${'AIzaSyAzHCoxcmaVsr3vmk8KomRyQtaLmXTGX4c'}&fields=files(id,name,description)`
//   )
//     .then((res) => res.json())
//     .then((text) => {
//       console.log('Fetched data:', text);

//       return text;
//     });

//   return {
//     props: {
//       data: {
//         a: 10,
//       },
//     },
//   };
// };

export default async function Home() {
  // const [newsletters, setNewsletters] = useState([]);

  const res = await fetch(
    `https://www.googleapis.com/drive/v3/files?q=%27${process.env.GOOGLE_DRIVE_FOLDER_ID}%27+in+parents&key=${process.env.GOOGLE_DRIVE_API_KEY}&fields=files(id,name,description,webViewLink,thumbnailLink)`
  );
  const data = await res.json();

  const latestEdition = data.files.at(-1);

  return (
    <div>
      <div className='bg-transparent'>
        <div className='max-w-6xl mx-auto flex items-center justify-center flex-col py-20 px-6 max-w-xl text-center'>
          <h1 className='text-7xl font-bold mb-8 text-primary'>
            Campus Chronicles
          </h1>

          <p className='text-lg text-secondary mb-12'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id
            pretium neque. Nunc ultrices feugiat dolor sed condimentum. Sed
            facilisis, magna vitae pellentesque luctus, diam lorem viverra
            turpis, sit amet tincidunt leo nisl eu risus. Maecenas scelerisque
            fermentum sapien at ultrices. Ut libero ligula, eleifend non gravida
            ut, vehicula eget magna
          </p>

          <div className='flex gap-6'>
            <Link
              href={latestEdition.webViewLink}
              className='bg-primary text-white px-4 py-3 rounded-xl shadow-xl hover-bg transition duration-200'
              target='_blank'
              rel='noopener noreferrer'
            >
              Read Latest Edition
            </Link>

            <Link
              href='/about'
              className='bg-secondary text-amber-950 px-4 py-3 rounded-xl hover-bg transition duration-200'
              target='_blank'
              rel='noopener noreferrer'
            >
              Learn More About Us
            </Link>
          </div>
        </div>

        {/* <div className='max-w-3xl mx-auto bg-amber-100 p-8 rounded-lg mb-12 flex items-center gap-6'>
          <div className='max-w-md'>
            <h2 className='text-primary text-2xl font-bold mb-4'>
              Latest Edition
            </h2>

            <p className='text-secondary text-lg mb-6'>
              Nunc ultrices feugiat dolor sed condimentum. Sed facilisis, magna
              vitae pellentesque luctus, diam lorem viverra turpis, sit amet
              tincidunt leo nisl eu risus
            </p>

            <Link
              href={latestEdition.webViewLink}
              className='bg-primary text-white px-4 py-3 rounded-xl'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button>Read Now</button>
            </Link>
          </div>

          <div>
            <Image
              src={latestEdition.thumbnailLink}
              fallbackSrc='/placeholder.webp'
              alt='Latest Edition'
              width={100}
              height={150}
              className='rounded-lg ml-6'
            />
          </div>
        </div> */}
      </div>

      <NewsLetters newsletters={data.files} />
    </div>
  );
}

// Newsletter Week 14 | Many cats were adopted by students this week! | 24th July 2025.pdf

// https://www.googleapis.com/drive/v3/files?q=undefined+in+parents+and+mimeType%3D%27application%2Fpdf%27&fields=files(id,+name,+mimeType,+webViewLink) 403 (Forbidden)
