import styles from "./weather.module.css"

import React from "react"

import WSearch from "./wsearch"
import WDisplay from "./wdisplay"
import WConditions from "./wconditions"

import * as Models from "./models"

export default function Weather() {
  const [weather, setWeather] = React.useState<Models.Weather | null>(null);

	return (
		<main className={styles.weather}>
			<WSearch setWeather={setWeather} />
			{
				weather &&
					<section className={styles.flex}>
						<WDisplay
							current={weather.current}
							location={weather.location}
						/> 
						<WConditions
							current={weather.current}
							forecast={weather.forecast}
						/>
					</section>
			}
		</main>
	);
}
