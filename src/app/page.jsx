import Link from 'next/link';
import Tabs from './components/Tabs';

function orderData(data) {
  const newsletters = data.files.map((newsletter) => {
    const dataArray = newsletter.name.replace(/\.pdf$/i, '').split('_');

    const title = dataArray.at(0).trim();
    const description = dataArray?.at(1)?.trim() || '';
    const date = dataArray?.at(-1)?.trim() || '';
    const weekNumber = parseFloat(title.match(/Week\s+(\d+)/i)[1] || '0');

    return {
      id: newsletter.id,
      title,
      description,
      date,
      thumbnailLink: newsletter.thumbnailLink,
      webViewLink: newsletter.webViewLink,
      weekNumber,
    };
  });

  const orderedNewsletters = newsletters.sort(
    (a, b) => b.weekNumber - a.weekNumber
  );
  return orderedNewsletters;
}

export default async function Home() {
  const res = await fetch(
    `https://www.googleapis.com/drive/v3/files?q=%27${process.env.GOOGLE_DRIVE_FOLDER_ID}%27+in+parents&key=${process.env.GOOGLE_DRIVE_API_KEY}&fields=files(id,name,description,webViewLink,thumbnailLink)`,
    { cache: 'no-store' }
  );
  const data = await res.json();

  const newsletters = orderData(data);
  const latestEdition = newsletters.at(-1);

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
        <Tabs newsletters={newsletters} />
      </div>
    </div>
  );
}
