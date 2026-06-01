'use client';
import { useState } from 'react';
import Image from 'next/image';
const ButtonMovieActor = ({ cast }: { cast: any[] }) => {
  const [visible, setVisible] = useState(8);
  const showMore = () => {
    setVisible((prev) => prev + 4);
  };
  return (
    <div>
    <ul className= "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4" >
    {
      cast.slice(0, visible).map((item) => (
        <li key= { item.id } className = "flex flex-col items-center gap-2" >
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36" >
      <Image
                className="rounded-2xl hover:shadow-2xs object-cover"
                src = {
          item.profile_path
            ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
            : '/movie.jpg'
        }
                alt = { item.name || 'Image' }
                fill
        />
        </div>
        < p className = "text-center text-sm sm:text-base" > { item.name } </p>
        </li>
      ))
    }
    </ul>
  {
    visible < cast.length && (
      <div className="mt-6 flex justify-center" >
        <button
            className="rounded-lg bg-slate-700 px-6 py-2 text-white transition hover:bg-slate-600"
    onClick = { showMore }
      >
      Add more
        </button>
        </div>
      )}
</div>
  );
};
export default ButtonMovieActor;
