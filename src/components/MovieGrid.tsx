import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCardContainer from "./MovieCardContainer";

const MovieGrid = () => {
  const { data, error, isLoading } = useMovies();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        padding="10px"
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 3,
        }}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <MovieCardContainer key={skeleton}>
              <MovieCardSkeleton />
            </MovieCardContainer>
          ))}
        {data.map((movie) => (
          <MovieCardContainer key={movie.id}>
            <MovieCard movie={movie} />
          </MovieCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
