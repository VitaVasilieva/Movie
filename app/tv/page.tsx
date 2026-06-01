import { getTV } from '../lib/tmdb';
import { TV } from '../types/MoviesTV';
import MediaGrid from '../components/MediaGrid';
import MediaCart from '../components/MediaCart';
import SearchInputs from '../components/SearchInputs';

const TvShow = async () => {
  const data = await getTV();
  const tv: TV[] = data.results;

  return (
    <main className="max-w-[1600] m-auto px-4 ">
      <section className="mb-10">
        <p>TV search </p>
        <div className="max-w-md">
          <SearchInputs basePath="/search/tv" />
        </div>
      </section>
      <h1 className="flex justify-center text-7xl mb-6 "> Movies popular </h1>
      <MediaGrid>
        {tv.map((movie) => (
          <MediaCart
            key={movie.id}
            href={`/tv/${movie.id}`}
            title={movie.name}
            imagePath={movie.poster_path}
          />
        ))}
      </MediaGrid>
    </main>
  );
};
export default TvShow;
