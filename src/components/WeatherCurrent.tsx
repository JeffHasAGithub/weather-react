import { Heading, Image, VStack } from "@chakra-ui/react";
import { Flex, Square, Text, Spacer } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHalf } from "@fortawesome/free-solid-svg-icons";
import { Current, Location } from "../models";

interface Props {
  current: Current;
  location: Location;
  tempScale: TempScale;
}

type TempScale = `F` | `C`;

export function WeatherCurrent({ current, location, tempScale }: Props) {
  return (
    <Flex flexWrap="wrap">
      <VStack
        h="100%"
        w="50%"
        bg="gray.200"
        borderRadius="lg"
        spacing={8}
        p={4}
      >
        <Heading>{current.condition.text}</Heading>
        <Image src={current.condition.icon} alt="weather icon" />
        { tempScale === "F"
          ? <VStack>
              <Text fontSize="2xl">{`${current.temp_f} `}<FontAwesomeIcon icon={faTemperatureHalf} /></Text>
              <Text fontSize="xl">{`Feels like: ${current.feelslike_f} `}<FontAwesomeIcon icon={faTemperatureHalf} /></Text>
            </VStack>
          : <VStack>
              <Text fontSize="2xl">{current.temp_c}{" "}<FontAwesomeIcon icon={faTemperatureHalf} /></Text>
              <Text fontSize="xl">{`Feels like: ${current.feelslike_c} `}<FontAwesomeIcon icon={faTemperatureHalf} /></Text>
            </VStack>
        }
      </VStack>
      <Spacer />
      <VStack>
        <Heading>{current.wind_mph}</Heading>
      </VStack>
    </Flex>
  );
}
