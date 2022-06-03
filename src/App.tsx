import "./App.css"

import React from "react"
import WSearch from "./components/weather/wsearch"
import WLocation from "./components/weather/wlocation"
import WDisplay from "./components/weather/wdisplay"

import * as Models from "./models"

export default function App() {
  const [weather, setWeather] = React.useState<Models.Weather | null>(null);

  return (
    <>
			<WSearch setWeather={setWeather} />
    </>
  );
}
