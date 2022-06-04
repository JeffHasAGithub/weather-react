import styles from "./wforecast.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTemperatureArrowUp, faTemperatureArrowDown } from "@fortawesome/free-solid-svg-icons"

import * as Models from "../../../models"
import * as DateUtils from "../utils/date_utils";

type Props = {
  forecast: Models.Forecast;
  location: Models.Location;
  tempScale: TempScale;
}

type TempScale = `F` | `C`;

export default function WForecast() {
	return (
		<>
			<section className={styles.wforecast}>
				<h4 className={styles.title}>
					Forecast
				</h4>
				<div className={styles.widgets}>
					<div className={styles.widget}>
						<div className={styles.dt}>
							<h5>Wed</h5>
							<h5>06/03/2022</h5>
						</div>
						<img src="images/1530381_weather_night_rain_storm_icon.svg" />
						<div className={styles.temps}>
							<p><strong>Hi:</strong> 80F</p>
							<p><strong>Lo:</strong> 60F</p>
						</div>
					</div>
					<div className={styles.widget}>
						<div className={styles.dt}>
							<h5>Thu</h5>
							<h5>06/04/2022</h5>
						</div>
						<img src="images/1530381_weather_night_rain_storm_icon.svg" />
						<div className={styles.temps}>
							<p><strong>Hi:</strong> 80F</p>
							<p><strong>Lo:</strong> 60F</p>
						</div>
					</div>
					<div className={styles.widget}>
						<div className={styles.dt}>
							<h5>Fri</h5>
							<h5>06/05/2022</h5>
						</div>
						<img src="images/1530381_weather_night_rain_storm_icon.svg" />
						<div className={styles.temps}>
							<p><strong>Hi:</strong> 80F</p>
							<p><strong>Lo:</strong> 60F</p>
						</div>
					</div>
				</div>
			</section>
		</>
  );
}
