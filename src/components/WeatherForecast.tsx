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
                <p>{jdate.getWeekday(fday.date)}</p>
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
