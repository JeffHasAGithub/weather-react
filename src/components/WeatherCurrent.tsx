import { Current } from '../models';

interface Props {
  current: Current;
}

export function WeatherCurrent({ current }: Props) {
  return <h1>{current.wind_dir}</h1>;
}
