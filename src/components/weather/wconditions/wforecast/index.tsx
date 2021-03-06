import styles from "./wforecast.module.css"

import * as Models from "../../models"
import * as DateUtils from "../../utils/date_utils";
import * as IconUtils from "../../utils/icon_utils";

type Props = {
  forecast: Models.Forecast;
}


export default function WForecast({ forecast }: Props) {
	return (
		<>
			<div className={styles.wforecast}>
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
								<img src={IconUtils.getIcon(fday.day.condition.code, true)} />
								<div className={styles.temps}>
									<p><strong>Hi:</strong> {`${ fday.day.maxtemp_f } \u00b0F`}</p>
									<p><strong>Lo:</strong> {`${ fday.day.mintemp_f } \u00b0F`}</p>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</>
  );
}
