import styles from "./wconditions.module.css"

import WCurrent from "./wcurrent"
import WForecast from "./wforecast"

import * as Models from "../models"

type Props = {
	current: Models.Current;
	forecast: Models.Forecast;
}

export default function WConditions({ current, forecast }: Props) {
	return (
		<div className={styles.wconditions}>
			<WCurrent current={current} />
			<WForecast forecast={forecast} />
		</div>
	);
}
