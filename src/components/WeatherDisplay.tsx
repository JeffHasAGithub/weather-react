import { useState } from 'react'
import { Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import { Button, Square, Spacer, Divider } from '@chakra-ui/react';
import { WeatherCurrent } from './WeatherCurrent';
import { WeatherForecast } from './WeatherForecast';
import { Weather } from '../models';

interface Props {
  width: string;
  weather: Weather | null;
}

type TempScale = `F` | `C`;

export function WeatherDisplay({ width, weather }: Props) {
  const [tempScale, setTempScale] = useState<TempScale>('F');

  return (
    <Tabs width={width} variant='solid-rounded'>
      <TabList>
        <Tab mx={1}>Current</Tab>
        <Tab mx={1}>Forecast</Tab>

        <Spacer />
        <Square>
          <Button colorScheme='white' bgColor='green.500' onClick={() => {
            if (tempScale === 'F')
              setTempScale('C');
            else
              setTempScale('F');
          }}>
            {`\u00b0${tempScale}`}
          </Button>
        </Square>
      </TabList>
      <Divider mt={4}/>
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
              tempScale={tempScale}
            />
          </TabPanel>
        </TabPanels>
      )}
    </Tabs>
  );
}
