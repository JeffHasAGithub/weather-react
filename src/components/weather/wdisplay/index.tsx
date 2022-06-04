import styles from "./wdisplay.module.css"
import * as Models from "../../../models"

type Props = {
  weather: Models.Weather | null;
}

export default function WDisplay() {
  return (
		<>
			<section className={styles.wdisplay}>
				<img
					className={styles.image}
					src="images/1530392_weather_sun_sunny_temperature_icon.svg"
				/>
				<h3 className={styles.dt}>June 4th, 2022</h3>
				<h3 className={styles.dt}>6:00 PM</h3>
			</section>
		</>
  );
}
