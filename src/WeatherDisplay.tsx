import { Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";

import { Weather } from "./models";

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
        { weather && (
          <TabPanels>
            <TabPanel>
              <p>{weather?.location.name}</p>
            </TabPanel>
            <TabPanel>
              <p>Two</p>
            </TabPanel>
          </TabPanels>
        )}
    </Tabs>
  );
}
