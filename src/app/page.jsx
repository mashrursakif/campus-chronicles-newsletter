// 'use client';

// import { google } from 'googleapis';
// import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsLetters from './components/Newsletters';
import Link from 'next/link';
import Image from 'next/image';
import Header from './components/Header';

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
    <div className='flex flex-col md:flex-row overflow-auto md:overflow-hidden'>
      <div className='bg-grad flex-1 h-screen flex flex-col justify-start items-center'>
        <Header />

        <div className='flex items-center justify-center flex-col py-20 px-10 max-w-xl text-center'>
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
      </div>

      <NewsLetters
        newsletters={data.files}
        className='flex-1 h-screen overflow-auto'
      />
    </div>
  );
}

// Example format:
// Newsletter Week 14 | Many cats were adopted by students this week! | 24th July 2025.pdf
