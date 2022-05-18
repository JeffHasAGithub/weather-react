import { useState, useEffect } from "react";
import { Container, VStack, Spacer } from "@chakra-ui/react";
import { WeatherSearch } from "./components/WeatherSearch";
import { WeatherDisplay } from "./components/WeatherDisplay";
import { Weather } from "./models";
import './css/App.css'

function App() {
  const [weather, setWeather] = useState<Weather | null>(null);

  return (
    <main>
      <VStack spacing={24} mx={4}>
        <Spacer />
        <Container>
          <WeatherSearch setWeather={setWeather} />
        </Container>
        <Container
          bgColor="rgb(255, 255, 255, .2)"
          maxW="container.md"
          border="1px"
          borderColor="gray.300"
          borderRadius="lg"
          boxShadow="md"
          p={4}>
          <WeatherDisplay 
            width="100%"
            color='black'
            weather={weather} />
        </Container>
        <Spacer />
      </VStack>
    </main>
  )
}

export default App;
