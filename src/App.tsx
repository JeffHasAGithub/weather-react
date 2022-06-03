import "./App.css"

import React from "react"
import { VStack } from "@chakra-ui/react";

import WSearch from "./components/weather/wsearch"
import WLocation from "./components/weather/wlocation"
import WDisplay from "./components/weather/wdisplay"

import * as Models from "./models"

export default function App() {
  const [weather, setWeather] = React.useState<Models.Weather | null>(null);

  const root = document.getElementById("root")!;
  useUpdateEffect(() => {
    root.style.height = '100%';
  }, [weather]);

  return (
    <>
    <VStack spacing={24} mx={4} py={24} minHeight="100vh">
      <WSearch setWeather={setWeather} />
      { weather && (
          <VStack spacing={12} width="100%">
            <WLocation weather={weather} />
            <WDisplay weather={weather} />
          </VStack>
        )
      }
    </VStack>
    </>
  );
}

const useUpdateEffect: typeof React.useEffect = (effect, deps) =>{
  const count = React.useRef(0);

  React.useEffect(() => {
    if (count.current > 1)
      effect();
    else
      count.current++;
  }, deps);
}
