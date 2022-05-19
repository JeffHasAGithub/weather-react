import { useState } from "react";
import { VStack } from "@chakra-ui/react";
import { WeatherSearch } from "./components/WeatherSearch";
import { WeatherHeading } from "./components/WeatherHeading";
import { WeatherDisplay } from "./components/WeatherDisplay";
import { Weather } from "./models";
import "./css/App.css";

function App() {
  const [weather, setWeather] = useState<Weather | null>(null);

  return (
    <>
    <main>
      <VStack spacing={24} mx={4} py={24}>
        <WeatherSearch setWeather={setWeather} />
        { weather && (
            <VStack spacing={12} width="100%">
              <WeatherHeading weather={weather} />
              <WeatherDisplay weather={weather} />
            </VStack>
          )
        }
      </VStack>
    </main>
    </>
  );
}

export default App;
