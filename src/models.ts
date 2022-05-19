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
  temp_f: number;
  temp_c: number;
  feelslike_f: number;
  feelslike_c: number;
  wind_dir: string;
  wind_mph: string;
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
  icon: string;
}
