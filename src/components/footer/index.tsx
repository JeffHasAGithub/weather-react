import styles from "./footer.module.css"

export default function Footer() {
	return (
		<>
			<footer>
				<div className={styles.footer}>
					<h2>Developed by <a
							className={styles.link}
							href="https://jeffmadethiswebsite.com">
								Jeff Moore
						</a>
					</h2>
					<h2>Source code available on <a
							className={styles.link}
							href="https://github.com/JeffHasAGithub">
							Github
						</a>
					</h2>
				</div>
			</footer>
		</>
	)
}
