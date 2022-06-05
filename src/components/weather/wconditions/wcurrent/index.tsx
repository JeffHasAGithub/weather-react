import styles from "./wcurrent.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faWind, faCloudRain } from "@fortawesome/free-solid-svg-icons"

import * as Models from "../../models"

type Props = {
  current: Models.Current;
}

export default function WCurrent({ current }: Props) {
  return (
		<>
			<div className={styles.wcurrent}>
				<h4 className={styles.title}>
					Current
				</h4>
				<div className={styles.widget}>
					<div className={styles.head}>
						<FontAwesomeIcon
							className={styles.icon}
							icon={faSun}
						/>
					</div>
					<div className={styles.tail}>
						<p>
							<strong>Temperature: </strong>
							{ `${current.temp_f}\u00b0F` }
						</p>
						<p>
							<strong>Feels like: </strong>
							{ `${current.feelslike_f}\u00b0F` }
						</p>
					</div>
				</div>
				<div className={styles.widget}>
					<div className={styles.head}>
						<FontAwesomeIcon
							className={styles.icon}
							icon={faWind}
						/>
					</div>
					<div className={styles.tail}>
						<p>
							<strong>Wind Direction: </strong>
							{ current.wind_dir }
						</p>
						<p>
							<strong>Speed: </strong>
							{ current.wind_mph } MPH
						</p>
					</div>
				</div>
				<div className={styles.widget}>
					<div className={styles.head}>
						<FontAwesomeIcon
							className={styles.icon}
							icon={faCloudRain}
						/>
					</div>
					<div className={styles.tail}>
						<p>
							<strong>Humidity: </strong>
							{ current.humidity }
						</p>
						<p>
							<strong>Cloud %: </strong>
							{ current.cloud }
						</p>
					</div>
				</div>
			</div>
		</>
  );
}
