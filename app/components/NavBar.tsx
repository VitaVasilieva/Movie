'use client';
import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/movie', label: 'Movies' },
  { href: '/tv', label: 'TV' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="  bg-white/80 backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          MovieApp
        </Link>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md border border-slate-200  bg-white px-3 py-2 text-xl font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only"> Toggle navigation </span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>

        <nav
          className={`${
            open ? 'block' : 'hidden'
          } absolute inset-x-0 top-full mt-1 rounded-b-lg bg-white/95 p-4 shadow-lg backdrop-blur md:static md:mt-0 md:flex md:items-center md:bg-transparent md:p-0 md:shadow-none`}
        >
          <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-xl font-medium text-slate-700 hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-600"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 md:pt-0">
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
