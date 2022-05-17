import { Forecast, Location } from '../models';

interface Props {
  forecast: Forecast;
  location: Location;
}

export function WeatherForecast({ forecast, location }: Props) {
  return <h1>{forecast.forecastday[0].date}</h1>
}
