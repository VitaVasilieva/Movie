import { getSearchMovie } from '../../lib/tmdb';
import { Movie } from '../../types/MoviesTV';
import Link from 'next/link';
import Image from 'next/image';
import MediaGrid from '@/app/components/MediaGrid';
import MediaCart from '@/app/components/MediaCart';

type Props = {
  searchParams: {
    query: string;
  };
};

export default async function SearchPage({ searchParams }: Props) {
  const { query } = await searchParams;
  const data = await getSearchMovie(query);
  const movies: Movie[] = data.results;
  // 1. Перевірка на наявність результатів
  if (!movies || movies.length === 0) {
    return (
      <main className="max-w-[1600px] m-auto px-4 text-center mt-20">
        <h1 className="text-4xl font-bold mb-4">Movie "{query}" not found</h1>
        <p className="text-gray-400">Try entering a different title or check for typos.</p>
        <Link href="/movie" className="text-blue-500 hover:underline mt-4 block">
          Return to movie list
        </Link>
      </main>
    );
  }
  return (
    <main className="max-w-[1600px] m-auto px-4 ">
      <h1 className="flex justify-center text-7xl mb-6 "> Movies</h1>
      <MediaGrid>
        {movies.map((movie) => (
          <MediaCart
            key={movie.id}
            href={`/movie/${movie.id}`}
            title={movie.title}
            imagePath={movie.poster_path}
          />
        ))}
      </MediaGrid>
    </main>
  );
}
