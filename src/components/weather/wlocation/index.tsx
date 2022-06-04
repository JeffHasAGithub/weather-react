import styles from "./wlocation.module.css"

import * as Models from "../../../models"

type Props = {
  location: Models.Location;
};

export default function WLocation({ location }: Props) {
  return (
		<>
			<section className={styles.wlocation}>
				<h1
					className={styles.region}
				>
					{`${location.name}, ${location.region}`}
				</h1>
				<h2 className={styles.country}>{location.country}</h2>
			</section>
    </>
  );
}
