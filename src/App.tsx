import { useState, useEffect } from "react";
import { Container, VStack } from "@chakra-ui/react";
import { WeatherSearch } from "./components/WeatherSearch";
import { WeatherDisplay } from "./components/WeatherDisplay";
import { Weather } from "./models";

function App() {
  const [weather, setWeather] = useState<Weather | null>(null);

  return (
    <VStack spacing={24}>
      <Container>
        <WeatherSearch setWeather={setWeather} />
      </Container>
      <Container
        maxW="container.md"
        border="1px"
        borderColor="gray.300"
        borderRadius="lg"
        boxShadow="md"
        p={4}>
        <WeatherDisplay width="100%" weather={weather} />
      </Container>
    </VStack>
  );
}

export default App;
