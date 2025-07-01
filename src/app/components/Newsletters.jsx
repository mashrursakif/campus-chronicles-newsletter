import Image from 'next/image';
import Link from 'next/link';
// import ImageWithFallback from './ImageWithFallback';

export default function Newsletter({ newsletters }) {
  return (
    <div className='bg-secondary py-12 px-6 flex flex-col justify-center items-center'>
      <div className='max-w-4xl'>
        <h2
          className='text-3xl text-secondary text-center font-bold mb-8'
          id='newsletter-list'
        >
          Newsletters
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {newsletters?.map((newsletter) => (
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
      </div>
    </div>
  );
}
