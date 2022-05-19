import { Container, Heading } from "@chakra-ui/react";
import { Weather } from "../models";

type Props = {
  weather: Weather | null;
};

export function WeatherHeading({ weather }: Props) {
  return ( weather && <>
      <Container textAlign='center'>
        <Heading size='2xl'>{ `${weather.location.name}, ${weather.location.region}` }</Heading>
        <Heading size='lg'>{ weather.location.country }</Heading>
      </Container> 
    </>
  )
}
