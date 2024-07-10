import {
  Badge,
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";
import ExpandableText from "./ExpandableText";
import GenreNameList from "./GenreNameList";

import noImg from "../assets/null.jpg";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const imageUrl = baseUrl + "/" + movie.poster_path;

  const img = movie.poster_path === null ? `${noImg}` : `${imageUrl}`;

  return (
    <Card>
      <Image src={img} maxHeight="450px" />
      <CardBody>
        <HStack justifyContent="space-between">
          <Heading fontSize="2xl">{movie.title}</Heading>
          <Badge
            paddingX={5}
            borderRadius="5px"
            colorScheme={movie.vote_average > 7 ? "green" : "orange"}
          >
            <Text marginY="10px" fontWeight="bold">
              {movie.vote_average.toFixed(1)}
            </Text>
          </Badge>
        </HStack>

        <GenreNameList genres={movie.genre_ids} />
        <Text marginY="10px" fontWeight="bold">
          Release Date: {movie.release_date}
        </Text>

        <Box>
          <ExpandableText children={movie.overview} maxChar={100} />
        </Box>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
