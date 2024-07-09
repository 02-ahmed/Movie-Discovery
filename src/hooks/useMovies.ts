import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Movie {
  id: number;
  genre_ids: number[];
  title: string;
  overview: string;
  poster_path: string;
  release_data: string;
}

interface FetchMoviesResponse {
  results: Movie[];
  count: number;
}

const useGames = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchMoviesResponse>("/discover/movie", {
        signal: controller.signal,
      })
      .then((res) => setMovies(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { movies, error };
};

export default useGames;
