import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MovieGrid from "./components/MovieGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres.ts";
import { useState } from "react";
import GenreSelector from "./components/GenreSelector.tsx";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
        lg: "150px 1fr",
      }}
    >
      <GridItem pl="2" area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={"aside"}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <Show below="lg">
          <GenreSelector
            onSelectGenre={(genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </Show>
        <MovieGrid selectedGenre={selectedGenre} />
      </GridItem>
      <GridItem pl="2" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
