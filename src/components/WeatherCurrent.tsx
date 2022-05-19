import { Heading, Image, VStack, HStack } from "@chakra-ui/react";
import { Flex, Square, Text, Spacer } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHalf, faWind, faSun, faCloud, faWater, faEye } from "@fortawesome/free-solid-svg-icons";
import { Current, Location } from "../models";
import { jdate } from "../utils/jdate"

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
        w={["100%", null, "49%"]}
        bg="gray.200"
        borderRadius="lg"
        spacing={8}
        p={4}
      >
        <VStack>
          <Heading>{current.condition.text}</Heading>
          <Text fontSize="lg">{jdate.toLocale(current.last_updated)}</Text>
        </VStack>
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
      <VStack 
        w={["100%", null, "49%"]} mt={[4, null, 0]}>
        <Flex
          h="100%"
          w="100%"
          bg="gray.200"
          borderRadius="lg"
          align="center"
          fontSize="lg"
          p={4}
        >
          <Text><FontAwesomeIcon icon={faWind} />{` ${current.wind_dir}`}</Text>
          <Spacer />
          <Text>{`${current.wind_mph} MPH`}</Text>
          <Spacer />
          <Text>{`${current.wind_kph} KPH`}</Text>
        </Flex>
        <Spacer />
        <Flex
          h="100%"
          w="100%"
          bg="gray.200"
          borderRadius="lg"
          align="center"
          fontSize="lg"
          p={4}
        >
          <FontAwesomeIcon icon={faEye} />
          <Spacer />
          <Text>{`${current.vis_miles} Miles`}</Text>
          <Spacer />
          <Text>{`${current.vis_km} Kilos`}</Text>
        </Flex>
        <Spacer />
        <Flex
          h="100%"
          w="100%"
          bg="gray.200"
          borderRadius="lg"
          align="center"
          fontSize="lg"
          p={4}
        >
          <Spacer />
          <Text><FontAwesomeIcon icon={faCloud} />{` ${current.cloud}%`}</Text>
          <Spacer />
          <Text><FontAwesomeIcon icon={faWater} />{` ${current.humidity}%`}</Text>
          <Spacer />
        </Flex>
      </VStack>
    </Flex>
  );
}
