import React from 'react';

type MediaGridProps = {
  children: React.ReactNode;
  className?: string;
};

const MediaGrid = ({ children, className = '' }: MediaGridProps) => {
  return (
    <ul
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 bg-transparent${className}`.trim()}
    >
      {children}
    </ul>
  );
};
export default MediaGrid;
