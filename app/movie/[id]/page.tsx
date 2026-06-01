import ButtonMovieActor from '@/app/components/buttomMovieActor';

import TrailerPlayer from '@/app/components/TrailerPlayer';
import { getIdMovies, getIdMovieCredits, getTrailersMovie } from '@/app/lib/tmdb';
import { Video } from '@/app/types/MoviesTV';

type Props = {
  params: {
    id: string;
  };
};

const MovieById = async ({ params }: Props) => {
  const { id } = await params;
  const movie = await getIdMovies(id);
  const person = await getIdMovieCredits(id);
  const trailers = await getTrailersMovie(id);

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="flex justify-center">
          <img
            className="w-full max-w-sm rounded-2xl hover:shadow-2xs"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>

        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center md:text-left">
            {movie.title}
          </h1>
          <p className="mt-4 mb-2 text-base md:text-2xl">{movie.overview}</p>
          <p className="mt-4 mb-2 text-base md:text-2xl">⭐️ {movie.vote_average}</p>
          <p className="mt-4 mb-2 text-base md:text-2xl">⏳ {movie.runtime} хв</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {trailers.map((video: Video) => (
          <TrailerPlayer key={video.id} video={video} />
        ))}
      </div>

      <div className="mt-10">
        <ButtonMovieActor cast={person.cast || []} />
      </div>
    </div>
  );
};
export default MovieById;
