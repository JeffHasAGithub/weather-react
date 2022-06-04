export interface Weather {
  location: Location;
  current: Current;
  forecast: Forecast;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime: string;
}

export interface Current {
  condition: Condition;
  last_updated: string;
  temp_f: number;
  temp_c: number;
  feelslike_f: number;
  feelslike_c: number;
  humidity: number;
  cloud: number;
  wind_dir: string;
  wind_mph: number;
  wind_kph: number;
  vis_miles: number;
  vis_km: number;
  uv: number;
  is_day: number;
}

export interface Forecast {
  forecastday: ForecastDay[];
}

export interface ForecastDay {
  date: string;
  day: {
    maxtemp_f: number;
    mintemp_f: number;
    maxtemp_c: number;
    mintemp_c: number;
    condition: Condition;
  };
}

export interface Condition {
  text: string;
	code: number;
}
