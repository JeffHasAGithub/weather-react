import { HStack, VStack, Flex, Spacer, Square, Image } from '@chakra-ui/react'
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
                  <p>{jdate.getWeekday(fday.date)}</p>
                  <p>{jdate.toLocale(fday.date)}</p>
                </VStack>
              </Square>
              <Spacer />
              <Image src={fday.day.condition.icon} />
              <Spacer />
              <Square>
                <p>{`${fday.day.maxtemp_f} / ${fday.day.mintemp_f}`}</p>
              </Square>
            </Flex>
          </HStack>
        ))
      }
    </VStack>
  )
}
