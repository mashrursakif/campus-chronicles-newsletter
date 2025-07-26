import Image from 'next/image';
import Link from 'next/link';

export default function Newsletter({ newsletter }) {
  return (
    <Link
      key={newsletter.id}
      href={newsletter.webViewLink}
      target='_blank'
      rel='noopener noreferrer'
      className='max-w-[480px]'
    >
      <div className='bg-transparent h-full border-1 border-amber-950 flex gap-4 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200'>
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
          // src='/placeholder.webp'
          alt={newsletter.title}
          // onError={(e) => (e.srcset = 'placeholder.webp')}
          width={128}
          height={180}
          // unoptimized={true}
          className='rounded-lg w-[128px] h-full object-cover'
        />
        <div
        // className='px-2 py-4'
        >
          <h3 className='text-xl text-primary mb-4'>{newsletter.title}</h3>

          <p className='text-sm text-gray-800 mb-6'>{newsletter.description}</p>

          <p className='font-bold text-sm text-black'>{newsletter.date}</p>
        </div>
      </div>
    </Link>
  );
}
