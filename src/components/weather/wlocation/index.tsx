import styles from "./wlocation.module.css"

import * as Models from "../../../models"

type Props = {
  weather: Models.Weather | null;
};

export default function WLocation({ weather }: Props) {
  return (
		<>
			<section className={styles.wlocation}>
				<h1 className={styles["city-state"]}>Dallas, TX</h1>
				<h2 className={styles.region}>United States of America</h2>
			</section>
    </>
  );
}
