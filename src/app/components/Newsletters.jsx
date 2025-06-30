import Image from 'next/image';
import Link from 'next/link';

export default function Newsletter({ newsletters }) {
  return (
    <div>
      <h2 className='text-3xl text-lime-950 font-bold mb-8'>Newsletters</h2>

      <div className='grid grid-cols-1 gap-6'>
        {newsletters?.map((newsletter) => (
          <Link
            key={newsletter.id}
            href={newsletter.webViewLink}
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='max-w-[500px] bg-lime-50 flex  gap-4 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200'>
              <Image
                src={newsletter.thumbnailLink}
                alt={newsletter.name}
                width={100}
                height={150}
                // unoptimized={true}
                className='rounded-lg width-[auto] height-[auto] object-cover'
              />
              <div>
                <h3 className='text-xl text-amber-900 mb-4'>
                  {newsletter.name}
                </h3>

                <p className='text-sm text-gray-800'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus id pretium neque. Nunc ultrices feugiat dolor sed
                  condimentum. Sed facilisis
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
