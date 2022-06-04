import "./App.css"

import React from "react"
import WSearch from "./components/weather/wsearch"
import WLocation from "./components/weather/wlocation"
import WDisplay from "./components/weather/wdisplay"
import WCurrent from "./components/weather/wcurrent"
import WForecast from "./components/weather/wforecast"

import * as Models from "./models"

export default function App() {
  const [weather, setWeather] = React.useState<Models.Weather | null>(null);

  return (
    <>
			<WSearch setWeather={setWeather} />
			<WLocation weather={weather} />
			<WDisplay /> 
			<WCurrent />
			<WForecast />
    </>
  );
}
