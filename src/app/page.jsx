// 'use client';

// import { google } from 'googleapis';
// import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsLetters from './components/Newsletters';

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

  return (
    <div className='flex items-center justify-center flex-col py-12'>
      <div className='max-w-xl text-center mb-40'>
        <h1 className='text-6xl font-bold mt-12 mb-8 text-amber-900'>
          Campus Chronicles
        </h1>
        <p className='text-lg text-lime-950'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id
          pretium neque. Nunc ultrices feugiat dolor sed condimentum. Sed
          facilisis, magna vitae pellentesque luctus, diam lorem viverra turpis,
          sit amet tincidunt leo nisl eu risus. Maecenas scelerisque fermentum
          sapien at ultrices. Ut libero ligula, eleifend non gravida ut,
          vehicula eget magna
        </p>
      </div>

      <NewsLetters newsletters={data.files} />
    </div>
  );
}

// Newsletter Week 14 | Many cats were adopted by students this week! | 24th July 2025.pdf

// https://www.googleapis.com/drive/v3/files?q=undefined+in+parents+and+mimeType%3D%27application%2Fpdf%27&fields=files(id,+name,+mimeType,+webViewLink) 403 (Forbidden)
