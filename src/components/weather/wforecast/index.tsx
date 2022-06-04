import styles from "./wforecast.module.css"

import * as Models from "../../../models"
import * as DateUtils from "../utils/date_utils";

type Props = {
  forecast: Models.Forecast;
  location: Models.Location;
}


export default function WForecast({ forecast, location }: Props) {
	return (
		<>
			<section className={styles.wforecast}>
				<h4 className={styles.title}>
					Forecast
				</h4>
				<div className={styles.widgets}>
					{ forecast.forecastday.map((fday, i) => (
							<div key={i} className={styles.widget}>
								<div className={styles.dt}>
									<h5>{ DateUtils.getWeekday(fday.date) }</h5>
									<h5>{ DateUtils.toLocale(fday.date) }</h5>
								</div>
								<img src="images/1530381_weather_night_rain_storm_icon.svg" />
								<div className={styles.temps}>
									<p><strong>Hi:</strong> {`${ fday.day.maxtemp_f } \u00b0F`}</p>
									<p><strong>Lo:</strong> {`${ fday.day.mintemp_f } \u00b0F`}</p>
								</div>
							</div>
						))
					}
				</div>
			</section>
		</>
  );
}
