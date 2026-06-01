import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // images: {
  //   domains: ["image.tmdb.org"], // <-- додаємо домен TMDB
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/t/p/**', // дозволяє всі зображення за цим шляхом
      },
    ],
  },
};

export default nextConfig;
