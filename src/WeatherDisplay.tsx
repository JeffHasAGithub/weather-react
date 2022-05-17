import { Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react'

interface Props {
  width: string;
}

export function WeatherDisplay({ width }: Props) {
  return (
    <Tabs width={ width }>
      <TabList>
        <Tab>Current</Tab>
        <Tab>Forecast</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>One</p>
        </TabPanel>
        <TabPanel>
          <p>Two</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
