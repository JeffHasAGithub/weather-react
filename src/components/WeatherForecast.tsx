import { HStack, VStack, Flex, Spacer, Square, Text,  Image } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureHigh, faTemperatureLow } from '@fortawesome/free-solid-svg-icons';
import { Forecast, ForecastDay, Location } from '../models';
import jdate from '../utils/jdate';

interface Props {
  forecast: Forecast;
  location: Location;
  tempScale: TempScale;
}

type TempScale = `F` | `C`;

export function WeatherForecast({ forecast, location, tempScale }: Props) {
  return (
    <VStack>
      { forecast.forecastday
        .map((fday, index) => (
          <HStack
            key={index}
            w='100%'
            bg='gray.200'
            borderRadius='lg'
            p={4}
          >
            <Flex w='100%'>
              <Square pl={2}>
                <VStack>
                  <Text>{jdate.getWeekday(fday.date)}</Text>
                  <Text>{jdate.toLocale(fday.date)}</Text>
                </VStack>
              </Square>
              <Spacer />
              <Image src={fday.day.condition.icon} />
              <Spacer />
              <Square pr={2}>
                <VStack width="4rem" align='flex-end'>
                  { (tempScale === 'F')
                      ? <>
                        <Text color='red.500'>{fday.day.maxtemp_f} <FontAwesomeIcon icon={faTemperatureHigh} /></Text>
                        <Text color='blue.500'>{fday.day.mintemp_f} <FontAwesomeIcon icon={faTemperatureLow} /></Text>
                        </>
                      : <>
                        <Text color='red.500'>{fday.day.maxtemp_c} <FontAwesomeIcon icon={faTemperatureHigh} /></Text>
                        <Text color='blue.500'>{fday.day.mintemp_c} <FontAwesomeIcon icon={faTemperatureLow} /></Text>
                        </>
                  }
                </VStack>
              </Square>
            </Flex>
          </HStack>
        ))
      }
    </VStack>
  )
}
