import { HStack, VStack, Flex, Spacer, Square, Text,  Image } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureHigh, faTemperatureLow } from '@fortawesome/free-solid-svg-icons';
import { Forecast, ForecastDay, Location } from '../models';
import jdate from '../utils/jdate';

interface MainProps {
  forecast: Forecast;
  location: Location;
}

export function WeatherForecast({ forecast, location }: MainProps) {
  return (
    <VStack>
      { forecast.forecastday
        .map((fday, index) => (
          <HStack
            w='100%'
            bg='gray.200'
            borderRadius='lg'
            p={4}
          >
            <Flex w='100%'>
              <Square>
                <VStack>
                  <Text>{jdate.getWeekday(fday.date)}</Text>
                  <Text>{jdate.toLocale(fday.date)}</Text>
                </VStack>
              </Square>
              <Spacer />
              <Image src={fday.day.condition.icon} />
              <Spacer />
              <Square>
                <VStack>
                  <Text color='red.500'>{fday.day.maxtemp_f} <FontAwesomeIcon icon={faTemperatureHigh} /></Text>
                  <Text color='blue.500'>{fday.day.mintemp_f} <FontAwesomeIcon icon={faTemperatureLow} /></Text>
                </VStack>
              </Square>
            </Flex>
          </HStack>
        ))
      }
    </VStack>
  )
}
