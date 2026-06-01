import { getSearchTV } from '../../lib/tmdb';
import { TV } from '../../types/MoviesTV';
import Link from 'next/link';
import Image from 'next/image';
import MediaGrid from '@/app/components/MediaGrid';
import MediaCart from '@/app/components/MediaCart';

type Props = {
  searchParams: {
    query: string;
  };
};

export default async function SearchPages({ searchParams }: Props) {
  const { query } = await searchParams;
  const data = await getSearchTV(query);
  const tv: TV[] = data.results;
  // 1. Перевірка на наявність результатів
  if (!tv || tv.length === 0) {
    return (
      <main className="max-w-[1600px] m-auto px-4 text-center mt-20">
        <h1 className="text-4xl font-bold mb-4">TV Show "{query}" not found</h1>
        <p className="text-gray-400">Try entering a different title or check for typos.</p>
        <Link href="/tv" className="text-blue-500 hover:underline mt-4 block">
          Return to TV list
        </Link>
      </main>
    );
  }
  return (
    <main className="max-w-[1600] m-auto px-4 ">
      <h1 className="flex justify-center text-7xl mb-6 "> TV Shows popular </h1>
      <MediaGrid>
        {tv.map((tvShow) => (
          <MediaCart
            key={tvShow.id}
            href={`/tv/${tvShow.id}`}
            title={tvShow.name}
            imagePath={tvShow.poster_path}
          />
        ))}
      </MediaGrid>
    </main>
  );
}
