import styles from "./weather.module.css"

import React from "react"

import WSearch from "./wsearch"
import WDisplay from "./wdisplay"
import WCurrent from "./wcurrent"
import WForecast from "./wforecast"

import * as Models from "./models"

export default function Weather() {
  const [weather, setWeather] = React.useState<Models.Weather | null>(null);

	return (
		<main className={styles.weather}>
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
		</main>
	);
}
