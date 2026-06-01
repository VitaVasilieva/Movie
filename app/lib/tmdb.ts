import { MediaItem, Video } from "../types/MoviesTV"
const API_KEY = process.env.MOVIES_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"


export async function getPersonAll() {
    const res = await fetch(`${BASE_URL}/trending/person/day?api_key=${API_KEY}`, {
        next: { revalidate: 60 }
    })
    if (!res.ok) throw new Error("No trending")
    return res.json()

}

export async function getIdPersons(id: string) {
    const res = await fetch(`${BASE_URL}/person/${id}?api_key=${API_KEY}`, {
        next: { revalidate: 60 }
    })

    if (!res.ok) {
        console.log("Statys", res.status)
    }
    return res.json()
}
export async function getIdPersonsCredits(id: string) {
    const res = await fetch(`${BASE_URL}/person/${id}/combined_credits?api_key=${API_KEY}`, {
        next: { revalidate: 60 }
    })

    if (!res.ok) {
        console.log("Statys", res.status)
    }
    return res.json()
}

export async function getMovies() {
    const res = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`, {
        next: { revalidate: 60 }
    })
    if (!res.ok) throw new Error("No trending")
    return res.json()
}

export async function getIdMovies(id: string) {
    const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`, {
        next: { revalidate: 60 }
    })

    if (!res.ok) {
        console.log("Statys", res.status)
    }
    return res.json()
}

export async function getIdMovieCredits(id: string) {
    const res = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`, {
        next: { revalidate: 60 }
    })

    if (!res.ok) {
        console.log("Statys", res.status)
    }
    return res.json()
}
export async function getIdTVCredits(id: string) {
    const res = await fetch(`${BASE_URL}/tv/${id}/credits?api_key=${API_KEY}`, {
        next: { revalidate: 60 }
    })

    if (!res.ok) {
        console.log("Statys", res.status)
    }
    return res.json()
}
export async function getTV() {
    const res = await fetch(`${BASE_URL}/trending/tv/day?api_key=${API_KEY}`, {
        next: { revalidate: 60 }
    })
    if (!res.ok) throw new Error("No tv popular")
    return res.json()
}
export async function getIdTV(id: string) {
    const res = await fetch(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`, {
        next: { revalidate: 60 }
    })
    if (!res.ok) throw new Error("No tv popular")
    return res.json()
}

export async function getSearchMovie(query: string) {
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    if (!res.ok) throw new Error("No search fails")
    return res.json()
}
export async function getSearchTV(query: string) {
    const res = await fetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${query}`)
    if (!res.ok) throw new Error("No search fails")
    return res.json()
}



export async function getRandomTrending(): Promise<MediaItem> {
    const res = await fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`, {
        next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Failed to fetch trending");

    const data = await res.json();
    const results: MediaItem[] = data.results;
    const randomIndex = Math.floor(Math.random() * results.length);
    return results[randomIndex];
}

export async function getTrailersMovie(id: string) {
    const res = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`)
    if (!res.ok) throw new Error("No search fails")
    const data = await res.json()
    return data.results.filter((v: Video) => v.site === "YouTube" && v.type === "Trailer");
}

export async function getTrailersTV(id: string) {
    const res = await fetch(`${BASE_URL}/tv/${id}/videos?api_key=${API_KEY}`)
    if (!res.ok) throw new Error("No search fails")
    const data = await res.json()
    return data.results.filter((v: Video) => v.site === "YouTube" && v.type === "Trailer");
}