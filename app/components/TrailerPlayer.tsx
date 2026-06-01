'use client';
import { useState } from 'react';

type TrailerPlayerProps = {
  video: {
    id: string;
    key: string;
    name: string;
  };
};

const TrailerPlayer = ({ video }: TrailerPlayerProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-800 mx-auto">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white">
            {' '}
          </div>
        </div>
      )}
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${video.key}`}
        title={video.name}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={handleLoad}
      />
    </div>
  );
};

export default TrailerPlayer;
