'use client';
import { useState } from 'react';
import Image from 'next/image';
const ButtonVisible = ({ cast }: { cast: any[] }) => {
  const [visible, setVisible] = useState(8);
  const showMore = () => {
    setVisible((prev) => prev + 4);
  };
  return (
    <div>
    <ul className= "grid grid-cols-4 gap-1" >
    {
      cast.slice(0, visible).map((item) => (
        <li key= { item.id } >
        <Image
              src={
        item.poster_path
          ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
          : '/vercel.svg'
      }
              alt = { item.name || 'Image' }
              width = { 250}
              height = { 250}
        />

        <p>{ item.title || item.name } </p>
        </li>
      ))
    }
    </ul>
  {
    visible < cast.length && (
      <div>
      <button onClick={ showMore }> + </button>
        </div>
      )}
</div>
  );
};
export default ButtonVisible;
