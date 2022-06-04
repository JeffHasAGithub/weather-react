import styles from "./wlocation.module.css"

import * as Models from "../../../models"

type Props = {
  weather: Models.Weather | null;
};

export default function WLocation({ weather }: Props) {
  return ( weather &&
		<>
			<section className={styles.wlocation}>
				<h1
					className={styles.region}
				>
					{`${weather.location.name}, ${weather.location.region}`}
				</h1>
				<h2 className={styles.country}>{weather.location.country}</h2>
			</section>
    </>
  );
}
