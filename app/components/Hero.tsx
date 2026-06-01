import { MediaItem } from "../types/MoviesTV";

type HeroProps = {
  item: MediaItem;
};

const Hero = ({ item }: HeroProps) => {
  const title = 'title' in item ? item.title : item.name;
  const backdropUrl = `https://image.tmdb.org/t/p/original${item.backdrop_path}`;

  return (
    <div
      className= "relative w-full h-screen bg-cover bg-center flex items-end"
  style = {{ backgroundImage: `url(${backdropUrl})` }
}
    >
  <div className="absolute inset-0 bg-black/50" > </div>

    < div className = "relative p-10 text-white max-w-3xl" >
      <h1 className="text-6xl font-bold mb-4" > { title } </h1>
        < p className = "text-lg mb-6 line-clamp-3" > { item.overview } </p>
          </div>
          </div>
  );
};

export default Hero;
