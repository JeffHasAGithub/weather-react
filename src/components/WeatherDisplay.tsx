import { Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import { WeatherCurrent } from './WeatherCurrent';
import { WeatherForecast } from './WeatherForecast';
import { Weather } from '../models';

interface Props {
  width: string;
  weather: Weather | null;
}

export function WeatherDisplay({ width, weather }: Props) {
  return (
    <Tabs width={width}>
      <TabList>
        <Tab>Current</Tab>
        <Tab>Forecast</Tab>
      </TabList>
      {weather && (
        <TabPanels>
          <TabPanel>
            <WeatherCurrent
              current={weather.current} 
              location={weather.location}
            />
          </TabPanel>
          <TabPanel color='black'>
            <WeatherForecast
              forecast={weather.forecast}
              location={weather.location}
            />
          </TabPanel>
        </TabPanels>
      )}
    </Tabs>
  );
}
