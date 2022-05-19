import { Heading, Image, Square } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Current, Location } from "../models";

interface Props {
  current: Current;
  location: Location;
}

export function WeatherCurrent({ current, location }: Props) {
  return (
    <Flex>
      <Square>
        <Heading>{current.condition.text}</Heading>
        <Image src={current.condition.icon} alt="weather icon" />
      </Square>
      <Spacer />
      <Square>
        <Heading>{current.wind_mph}</Heading>
      </Square>
    </Flex>
  );
}
