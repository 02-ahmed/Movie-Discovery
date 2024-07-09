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

const useMovies = (selectedGenre: Genre | null) =>
  useData<Movie>(
    "discover/movie",
    {
      params: {
        with_genres: selectedGenre?.id,
      },
    },
    [selectedGenre?.id]
  );

export default useMovies;
