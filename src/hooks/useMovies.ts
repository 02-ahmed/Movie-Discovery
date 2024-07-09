import { MovieQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Movie {
  id: number;
  genre_ids: number[];
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const useMovies = (movieQuery: MovieQuery) =>
  useData<Movie>(
    "discover/movie",
    {
      params: {
        with_genres: movieQuery.genre?.id,
      },
    },
    [movieQuery]
  );

export default useMovies;
