import { Container, Heading } from "@chakra-ui/react";
import * as Models from "../../../models";

type Props = {
  weather: Models.Weather | null;
};

export default function WLocation({ weather }: Props) {
  return ( weather && <>
      <Container textAlign='center'>
        <Heading size='2xl'>{ `${weather.location.name}, ${weather.location.region}` }</Heading>
        <Heading size='lg'>{ weather.location.country }</Heading>
      </Container> 
    </>
  )
}
