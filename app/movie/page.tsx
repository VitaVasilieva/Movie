import { getMovies } from '../lib/tmdb';
import { Movie } from '../types/MoviesTV';
import SearchInputs from '../components/SearchInputs';
import MediaGrid from '../components/MediaGrid';
import MediaCart from '../components/MediaCart';
const Movies = async () => {
  const data = await getMovies();
  const movies: Movie[] = data?.results || [];

  return (
    <main className="max-w-[1600px] m-auto px-4 ">
      <section className="mb-10">
        <p>Movie search </p>
        <div className="max-w-md">
          <SearchInputs basePath="/search/movie" />
        </div>
      </section>
      <h1 className="flex justify-center text-7xl mb-6 "> Movies popular </h1>
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
};
export default Movies;
