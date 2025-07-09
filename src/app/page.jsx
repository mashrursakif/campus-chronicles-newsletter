import NewsLetters from './components/Newsletters';
import Link from 'next/link';
import Tabs from './components/Tabs';
import Header from './components/Header';

export default async function Home() {
  const res = await fetch(
    `https://www.googleapis.com/drive/v3/files?q=%27${process.env.GOOGLE_DRIVE_FOLDER_ID}%27+in+parents&key=${process.env.GOOGLE_DRIVE_API_KEY}&fields=files(id,name,description,webViewLink,thumbnailLink)`
  );
  const data = await res.json();

  const latestEdition = data.files.at(-1);

  return (
    <div className='md:min-h-screen flex flex-col md:flex-row overflow-visible md:overflow-hidden'>
      <div className='bg-grad flex-1 flex flex-col justify-start items-center w-auto md:w-[50vw]'>
        {/* <Header /> */}

        <div className='flex items-center justify-center flex-col py-24 px-10 max-w-screen sm:max-w-xl text-center md:mt-24'>
          <h1 className='text-7xl font-bold mb-8 text-primary'>
            Campus Chronicles
          </h1>

          <p className='text-lg text-secondary mb-10'>
            Welcome to Campus Chronicles! Here you can find all the latest
            newsletters. Be up to date with important news and notices. Access
            entire catalog of past editions. And much more. You can read our
            latest edition right now below:
          </p>

          <div className='flex gap-6'>
            <Link
              href={latestEdition.webViewLink}
              className='text-xl bg-primary text-white px-4 py-3 rounded-xl shadow-xl hover-bg transition duration-200'
              target='_blank'
              rel='noopener noreferrer'
            >
              Read Latest Edition
            </Link>

            {/* <Link
              href='/about'
              className='bg-secondary text-amber-950 px-4 py-3 rounded-xl hover-bg transition duration-200'
              target='_blank'
              rel='noopener noreferrer'
            >
              Learn More About Us
            </Link> */}
          </div>
        </div>
      </div>

      <div className='bg-secondary md:h-screen md:overflow-y-auto md:overflow-x-hidden min-h-[600px] flex-1'>
        <Tabs newsletters={data.files} />
      </div>
    </div>
  );
}

// Example format:
// Newsletter Week 14 | Many cats were adopted by students this week! | 24th July 2025.pdf
