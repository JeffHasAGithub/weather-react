import { Dispatch, SetStateAction } from 'react';
import { Container, IconButton, useToast } from '@chakra-ui/react';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'
import { Weather } from '../models';

interface Props {
  setWeather: Dispatch<SetStateAction<Weather | null>>;
}

export function WeatherSearch({ setWeather }: Props) {
  const toast = useToast();
  const fetchWeather = async () => {
    try {
      const resp = await fetch(
        'http://localhost:9000/weather/forecast?q=dallas&days=5'
      );
      const json = await resp.json();
      const parsed = JSON.parse(JSON.stringify(json));
      const w: Weather = {
        location: parsed.location,
        current: parsed.current,
        forecast: parsed.forecast,
      };
      setWeather(w);
    } catch (err) {
      console.log(err);
      toast({
        position: 'bottom-left',
        title: `Oops! We couldn't find the requested weather data!`,
        status: 'error',
        variant: 'left-accent',
        isClosable: true,
      })
    }
  };

  return (
    <Container>
      <InputGroup
        background='white'
        borderRadius='lg'
        boxShadow='md'
      >
        <Input mr='1' placeholder='Ex: Dallas, TX' />
        <InputRightElement>
          <IconButton 
            icon={<SearchIcon />}
            colorScheme='blue' 
            aria-label='Search weather'
            onClick={fetchWeather}>
          </IconButton>
        </InputRightElement>
      </InputGroup>
    </Container>
  );
}
