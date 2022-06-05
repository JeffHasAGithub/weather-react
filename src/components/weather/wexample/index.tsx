import styles from "./wexample.module.css"

export default function WExample() {
	return (
		<div className={styles.wexample}>
			<p className={styles.lhead}>
				<strong>Try a search!</strong>
			</p>
			<ul className={styles.lbody}>
				<li>Tokyo, Japan</li>
				<li>Los Angeles, CA</li>
				<li>Sydney, New South Wales</li>
				<li>Rio De Janeiro, Brazil</li>
			</ul>
		</div>
	);
}
