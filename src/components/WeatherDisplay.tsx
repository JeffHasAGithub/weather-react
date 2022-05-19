import { useState } from "react";
import { Container, Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import { Button, Square, Spacer, Divider } from "@chakra-ui/react";
import { WeatherCurrent } from "./WeatherCurrent";
import { WeatherForecast } from "./WeatherForecast";
import { Weather } from "../models";

interface Props {
  weather: Weather | null;
}

type TempScale = `F` | `C`;

export function WeatherDisplay({ weather }: Props) {
  const [tempScale, setTempScale] = useState<TempScale>("F");

  return (
    <Container
      bgColor="rgb(255, 255, 255, .4)"
      maxW="container.md"
      border="1px"
      borderColor="gray.300"
      borderRadius="lg"
      boxShadow="md"
      p={4}
    >
      <Tabs variant="solid-rounded">
        <TabList>
          <Tab mx={1}>Current</Tab>
          <Tab mx={1}>Forecast</Tab>
          <Spacer />
          <Square>
            <Button
              colorScheme="white"
              bgColor="green.500"
              onClick={() => {
                if (tempScale === "F") setTempScale("C");
                else setTempScale("F");
              }}
            >
              {`\u00b0${tempScale}`}
            </Button>
          </Square>
        </TabList>
        <Divider mt={4} />
        { weather && (
          <TabPanels>
            <TabPanel>
              <WeatherCurrent
                current={weather.current}
                location={weather.location}
              />
            </TabPanel>
            <TabPanel color="black">
              <WeatherForecast
                forecast={weather.forecast}
                location={weather.location}
                tempScale={tempScale}
              />
            </TabPanel>
          </TabPanels>
        )}
      </Tabs>
    </Container>
  );
}
