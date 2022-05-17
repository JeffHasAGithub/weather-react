import { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar";
import { WeatherDisplay } from "./WeatherDisplay";
import { Container, VStack } from "@chakra-ui/react";
import { Weather } from "./models";

function App() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loaded, setLoaded] = useState(false);

  return (
    <VStack spacing={24}>
      <Container>
        <SearchBar setWeather={setWeather} />
      </Container>
      <Container maxW="container.md">
        <WeatherDisplay width={"100%"} weather={weather} />
      </Container>
    </VStack>
  );
}

export default App;
