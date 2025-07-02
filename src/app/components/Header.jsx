import Link from 'next/link';

export default function Header() {
  return (
    <div className='w-full max-w-xl mx-auto border-b-2 border-amber-900 z-50 flex items-center justify-around p-6'>
      <div>
        <Link
          className='text-xl font-bold text-primary'
          href='/#newsletter-list'
        >
          Newsletters
        </Link>
      </div>

      <div>
        <Link className='text-xl font-bold text-primary' href='/about'>
          About
        </Link>
      </div>
    </div>
  );
}
