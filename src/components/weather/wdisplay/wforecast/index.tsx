import { HStack, VStack, Flex, Spacer } from "@chakra-ui/react"
import { Square, Text, Image } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHigh, faTemperatureLow } from "@fortawesome/free-solid-svg-icons";

import * as Models from "../../../../models"
import * as DateUtils from "../../utils/date_utils";

type Props = {
  forecast: Models.Forecast;
  location: Models.Location;
  tempScale: TempScale;
}

type TempScale = `F` | `C`;

export default function WForecast({ forecast, location, tempScale }: Props) {
  return (
    <VStack>
      {forecast.forecastday.map((fday, index) => (
        <HStack key={index} w="100%" bg="gray.200" borderRadius="lg" p={4}>
          <Flex w="100%">
            <Square pl={2}>
              <VStack>
                <Text>{DateUtils.getWeekday(fday.date)}</Text>
                <Text>{DateUtils.toLocale(fday.date)}</Text>
              </VStack>
            </Square>
            <Spacer />
            <Image src={fday.day.condition.icon} />
            <Spacer />
            <Square pr={2}>
              <VStack width="4rem" align="flex-end">
                {tempScale === "F" ? (
                  <>
                    <Text color="red.500">
                      {fday.day.maxtemp_f}{" "}
                      <FontAwesomeIcon icon={faTemperatureHigh} />
                    </Text>
                    <Text color="blue.500">
                      {fday.day.mintemp_f}{" "}
                      <FontAwesomeIcon icon={faTemperatureLow} />
                    </Text>
                  </>
                ) : (
                  <>
                    <Text color="red.500">
                      {fday.day.maxtemp_c}{" "}
                      <FontAwesomeIcon icon={faTemperatureHigh} />
                    </Text>
                    <Text color="blue.500">
                      {fday.day.mintemp_c}{" "}
                      <FontAwesomeIcon icon={faTemperatureLow} />
                    </Text>
                  </>
                )}
              </VStack>
            </Square>
          </Flex>
        </HStack>
      ))}
    </VStack>
  );
}
