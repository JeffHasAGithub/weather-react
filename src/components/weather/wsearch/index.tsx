import styles from "./wsearch.module.css"

import React from "react"

import * as UrlUtils from "../utils/url_utils"
import * as Models from "../../../models"

const HOST = import.meta.env.VITE_WAPI_HOST;
const PORT = import.meta.env.VITE_WAPI_PORT;
const EPNT = import.meta.env.VITE_WAPI_EPNT;
const BASE_URL = UrlUtils.buildURL("http", HOST, PORT, EPNT);

type Props = {
  setWeather: React.Dispatch<React.SetStateAction<Models.Weather | null>>;
}

export default function WSearch({ setWeather }: Props) {
	const [location, setLocation] = React.useState("");

  const fetchWeather = async () => {
		const loc = UrlUtils.escapeSpaces(location)
		const params = UrlUtils.buildParams({ key: "q", val: loc })

    try {
      const resp = await fetch(BASE_URL + params);
      const json = await resp.json();
      const parsed = JSON.parse(JSON.stringify(json));

			if (parsed.location.name === "")
				throw "Not a valid API response";

      const w: Models.Weather = {
        location: parsed.location,
        current: parsed.current,
        forecast: parsed.forecast,
      };
      setWeather(w);
    } catch (err) {
      console.log(err);
    }
  };

  return (
		<>
			<section className={styles.wsearch}>
				<input
					className={styles.query}
					type="text"
					placeholder="Ex: Dallas, TX"
				/>
				<button
					className={styles.submit}
				>
					Search
				</button>
			</section>
		</>
  );
}
