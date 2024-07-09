import useData from "./useData";

export interface Movie {
  id: number;
  genre_ids: number[];
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const useGames = () => useData<Movie>("discover/movie");

export default useGames;
