import Hero from "./components/Hero";
import { getRandomTrending } from "./lib/tmdb";

export default async function Home() {
  const randomItem = await getRandomTrending();


  return (
    <div>
    <Hero item= { randomItem } />
    {/* Далі можна додавати популярні фільми, серіали, список пошуку */ }
    </div>
  );
}
