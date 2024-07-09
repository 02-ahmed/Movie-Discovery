import { HStack, List, ListItem, Text } from "@chakra-ui/react";

interface Props {
  genres: number[];
}

const GenreNameList = ({ genres }: Props) => {
  const nameMap: { [key: number]: string } = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };
  return (
    <>
      <List whiteSpace="nowrap" width="100%">
        <HStack whiteSpace="nowrap">
          {genres.map((genre: number) => (
            <ListItem key={genre} whiteSpace="nowrap">
              <Text color="gray.500" whiteSpace="normal">
                {nameMap[genre]}{" "}
              </Text>
            </ListItem>
          ))}
        </HStack>
      </List>
    </>
  );
};

export default GenreNameList;
