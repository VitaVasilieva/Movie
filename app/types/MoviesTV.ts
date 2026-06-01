export type Movie = {
    id: number,
    title: string,
    overview: string,
    poster_path: string,
    backdrop_path: string,
    popularity: number,
    vote_average: number,
    release_date: string,
    media_type: "movie",
    runtime: number,
    videos?: Video[]
}

export type TV = {
    id: number,
    name: string,
    overview: string,
    poster_path: string,
    backdrop_path: string,
    popularity: number,
    vote_average: number,
    release_date: string,
    media_type: "tv",
    runtime: number,
    videos?: Video[]

}
export type MediaItem = Movie | TV;


export type MovieTVCredits = {
    cast: CreditItem[]
}

export type Video = {
    id: string;
    key: string; // YouTube video ID
    name: string; // назва трейлера
    site: string; // "YouTube"
    type: string; // "Trailer", "Teaser", "Clip"
};

export type CreditItem = {

    id: number;
    media_type: "movie" | "tv";
    title?: string;
    name?: string;
    poster_path: string | null;
    character: string;
    release_date?: string;
    first_air_date?: string;

};
export type Person = {
    id: number,
    name: string,
    known_for_department: string,
    popularity: number,
    profile_path: string,
    biography: string,
    birthday: string,
    place_of_birth: string
    known_for?: Array<{
        id: number,
        media_type: "movie" | "tv",
        title?: string,
        name?: string,
        poster_path: string
    }>
    cast: CreditItem[]
}

