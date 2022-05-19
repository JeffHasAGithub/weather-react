import { useState, useEffect } from "react";
import { Container, VStack, Heading, Spacer } from "@chakra-ui/react";
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
        <WeatherSearch setWeather={setWeather} />
        <Spacer />
        <WeatherDisplay 
          width="100%"
          weather={weather}
        />
        <Spacer />
      </VStack>
    </main>
  )
}

export default App;
