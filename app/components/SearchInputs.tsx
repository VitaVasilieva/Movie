'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

type SearchInputProps = {
  basePath: string;
  placeholder?: string;
  className?: string;
};

export default function SearchInputs({
  basePath,
  placeholder = 'Search…',
  className = '',
}: SearchInputProps) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = useCallback(() => {
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`${basePath}?query=${encodeURIComponent(trimmed)}`);
  }, [basePath, query, router]);

  return (
    <div className={`flex items-center gap-2 ${className}`.trim()}>
      <label className="sr-only" htmlFor="search-input">
        Search
      </label>
      <input
        id="search-input"
        className="flex-1 rounded-3xl border border-slate-300 px-3 py-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        placeholder={placeholder}
        type="search"
        autoComplete="off"
      />
      <button
        type="button"
        className="rounded-3xl bg-blue-950 px-4 py-2 text-white hover:bg-blue-700"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
