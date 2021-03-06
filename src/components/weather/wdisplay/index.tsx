import styles from "./wdisplay.module.css"
import * as Models from "../models"
import * as DateUtils from "../utils/date_utils"
import * as IconUtils from '../utils/icon_utils'

type Props = {
	current: Models.Current;
	location: Models.Location;
}

export default function WDisplay({ current, location }: Props) {
  return (
		<>
			<section className={styles.wdisplay}>
				<h1
					className={styles.region}
				>
					{`${location.name}, ${location.region}`}
				</h1>
				<h2 className={styles.country}>{location.country}</h2>
				<img
					className={styles.image}
					src={IconUtils.getIcon(current.condition.code, Boolean(current.is_day))}
				/>
				<h3 className={styles.dt}>{ DateUtils.toLocale(location.localtime) }</h3>
				<h3 className={styles.dt}>{ DateUtils.getCurrentTime(location.localtime) }</h3>
			</section>
		</>
  );
}
