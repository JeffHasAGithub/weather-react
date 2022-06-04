import styles from "./wcurrent.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faWind, faCloudRain } from "@fortawesome/free-solid-svg-icons"

import * as Models from "../../../models"
import * as DateUtils from "../utils/date_utils"

type Props = {
  current: Models.Current;
  location: Models.Location;
}

export default function WCurrent() {
  return (
		<>
			<section className={styles.wcurrent}>
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
							70F
						</p>
						<p>
							<strong>Feels like: </strong>
							60 F
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
							E
						</p>
						<p>
							<strong>Speed: </strong>
							6.9 MPH
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
							<strong>Precipitation: </strong>
							0.03 In
						</p>
						<p>
							<strong>Cloud %: </strong>
							100
						</p>
					</div>
				</div>
			</section>
		</>
  );
}
