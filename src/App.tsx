import { useState, useEffect, useRef } from "react";
import { VStack } from "@chakra-ui/react";
import { WeatherSearch } from "./components/WeatherSearch";
import { WeatherHeading } from "./components/WeatherHeading";
import { WeatherDisplay } from "./components/WeatherDisplay";
import { Weather } from "./models";
import "./css/App.css";

function App() {
  const [weather, setWeather] = useState<Weather | null>(null);

  const root = document.getElementById("root")!;
  useUpdateEffect(() => {
    root.style.height = '100%';
  }, [weather]);

  return (
    <>
    <VStack spacing={24} mx={4} py={24} minHeight="100vh">
      <WeatherSearch setWeather={setWeather} />
      { weather && (
          <VStack spacing={12} width="100%">
            <WeatherHeading weather={weather} />
            <WeatherDisplay weather={weather} />
          </VStack>
        )
      }
    </VStack>
    </>
  );
}

const useUpdateEffect: typeof useEffect = (effect, deps) =>{
  const count = useRef(0);

  useEffect(() => {
    if (count.current > 1)
      effect();
    else
      count.current++;
  }, deps);
}

export default App;
