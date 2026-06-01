import Image from 'next/image';
import Link from 'next/link';

type MediaCartProps = {
  href: string;
  title: string;
  imagePath?: string | null;
  placeholder?: string;
  overline?: string;
};

const MediaCart = ({ href, title, imagePath, placeholder, overline }: MediaCartProps) => {
  const src = imagePath ? `https://image.tmdb.org/t/p/w500${imagePath}` : '/movie.jpg';

  return (
    <li className="flex justify-center   shadow-2xl rounded-4xl hover:scale-105 transition-transform duration-300  ">
      <Link href={href} className="w-full max-w-[220px] sm:max-w-[280px] lg:max-w-[320px]">
        <div className=" mt-3.5 mb-2.5 relative w-full aspect-[2/3] overflow-hidden  shadow-2xl rounded-4xl  shadow-gray-700">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover "
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>

        <div className="mt-2 text-center mb-2.5">
          {overline ? <p className="text-xs text-slate-500">{overline}</p> : null}
          <p className="truncate text-2xl font-semibold">{title}</p>
        </div>
      </Link>
    </li>
  );
};
export default MediaCart;
