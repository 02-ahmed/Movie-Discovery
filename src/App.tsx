import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MovieGrid from "./components/MovieGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres.ts";
import { useState } from "react";
import GenreSelector from "./components/GenreSelector.tsx";
import SortSelector from "./components/SortSelector.tsx";
import MovieHeading from "./components/MovieHeading.tsx";
import Footer from "./components/Footer.tsx";

export interface MovieQuery {
  genre: Genre | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({} as MovieQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav"
               "main"
               "footer"`,
        lg: `
            "nav nav"
            "aside main"
            "footer footer"
        `,
      }}
      templateColumns={{
        base: "1fr",
        lg: "160px 1fr",
      }}
    >
      <GridItem pl="2" area={"nav"}>
        <NavBar
        onSearch={(searchText) =>
            setMovieQuery({ ...movieQuery, searchText })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={"aside"}>
          <GenreList
            selectedGenre={movieQuery.genre}
            onSelectGenre={(genre) => setMovieQuery({ ...movieQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <Box paddingLeft={2}>
          <MovieHeading movieQuery={movieQuery} />
          <Flex paddingLeft={2} marginBottom={5}>
            <Show below="lg">
              <GenreSelector
                onSelectGenre={(genre) =>
                  setMovieQuery({ ...movieQuery, genre })
                }
                selectedGenre={movieQuery.genre}
              />
            </Show>
            <Box marginLeft={5}>
              <SortSelector
                sortOrder={movieQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setMovieQuery({ ...movieQuery, sortOrder })
                }
              />
            </Box>
          </Flex>
        </Box>

        <MovieGrid movieQuery={movieQuery} />
      </GridItem>
      <GridItem pl="2" area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
