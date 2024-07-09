import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";
import ExpandableText from "./ExpandableText";
import GenreNameList from "./GenreNameList";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const imageUrl = baseUrl + "/" + movie.poster_path;
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={imageUrl} maxHeight="450px" />
      <CardBody>
        <Heading fontSize="2xl">{movie.title}</Heading>
        <GenreNameList genres={movie.genre_ids} />
        <Text marginY="10px" fontWeight="bold">
          Release Date: {movie.release_date}
        </Text>
        <Text marginY="10px" fontWeight="bold">
          Rating: {movie.vote_average.toFixed(1)}
        </Text>
        <Text>
          <ExpandableText children={movie.overview} maxChar={100} />
        </Text>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
