import "./App.css"

import React from "react"

import WSearch from "./components/weather/wsearch"
import WDisplay from "./components/weather/wdisplay"
import WCurrent from "./components/weather/wcurrent"
import WForecast from "./components/weather/wforecast"

import * as Models from "./models"

export default function App() {
  const [weather, setWeather] = React.useState<Models.Weather | null>(null);

  return (
    <>
			<WSearch setWeather={setWeather} />
			{
				weather &&
					<>
						<WDisplay
							current={weather.current}
							location={weather.location}
						/> 
						<WCurrent
							current={weather.current}
							location={weather.location}
						/>
						<WForecast
							forecast={weather.forecast}
							location={weather.location}
						/>
					</>
			}
    </>
  );
}
