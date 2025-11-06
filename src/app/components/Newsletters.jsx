'use client';

import Fuse from 'fuse.js';
import { useMemo, useState } from 'react';
import Newsletter from './Newsletter';
// import ImageWithFallback from './ImageWithFallback';

export default function Newsletters({ newsletters, className }) {
	const [query, setQuery] = useState('');

	const fuse = new Fuse(newsletters, {
		keys: ['title', 'description', 'date'],
		threshold: 0.4,
	});

	const results = useMemo(
		() => (query ? fuse.search(query).map((res) => res.item) : newsletters),
		[query]
	);

	return (
		<div
			className={`py-12 px-6 lg:px-10 w-auto md:w-[50vw] flex flex-col items-center overflow-visible ${className}`}
		>
			<div className='max-w-4xl'>
				<div className='mb-8 flex flex-col items-center'>
					<h2
						className='text-3xl text-secondary text-center font-bold mb-6'
						// id='newsletter'
					>
						Newsletters
					</h2>

					<input
						type='text'
						className='outline-none text-lg px-5 py-3 border-solid border-2 border-primary w-full max-w-2xl rounded-4xl focus-border'
						value={query}
						placeholder='Search Newsletters'
						onChange={(e) => setQuery(e.target.value)}
					/>
				</div>

				{results.length == 0 ? (
					<p className='text-lg text-center text-primary'>
						No Newsletters Found
					</p>
				) : (
					<div className='grid grid-cols-1 2xl:grid-cols-2 gap-6'>
						{results?.map((newsletter) => (
							<Newsletter key={newsletter.id} newsletter={newsletter} />
						))}
					</div>
				)}
			</div>
		</div>
	);
}
