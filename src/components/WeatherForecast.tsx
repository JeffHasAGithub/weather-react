import { Forecast } from '../models';

interface Props {
  forecast: Forecast;
}

export function WeatherForecast({ forecast }: Props) {
  return <h1>{forecast.forecastday[0].date}</h1>
}
