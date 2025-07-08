import Image from 'next/image';
import Link from 'next/link';

export default function Newsletter({ newsletter }) {
  const dataArray = newsletter.name.split('_');

  return (
    <Link
      key={newsletter.id}
      href={newsletter.webViewLink}
      target='_blank'
      rel='noopener noreferrer'
      className='max-w-[480px]'
    >
      <div className='bg-transparent border-1 border-amber-950 flex gap-4 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200'>
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
          alt={dataArray.at(0).trim()}
          // onError={(e) => (e.srcset = 'placeholder.webp')}
          width={100}
          height={125}
          // unoptimized={true}
          className='rounded-lg w-[100] h-fit object-cover'
        />
        <div>
          <h3 className='text-xl text-primary mb-4'>
            {dataArray.at(0).trim()}
          </h3>

          <p className='text-sm text-gray-800 mb-6'>
            {dataArray?.at(1)?.trim() || ''}
          </p>

          <p className='font-bold text-sm text-black'>
            {dataArray?.at(-1)?.trim() || ''}
          </p>
        </div>
      </div>
    </Link>
  );
}
