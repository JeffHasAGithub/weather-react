import { useState, Dispatch, SetStateAction } from "react";
import { Container, IconButton, useToast } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { jurl } from "../utils/jurl"
import { Weather } from "../models";

const HOST = import.meta.env.VITE_WAPI_HOST;
const PORT = import.meta.env.VITE_WAPI_PORT;
const EPNT = import.meta.env.VITE_WAPI_EPNT;
const BASE_URL = jurl.buildURL("http", HOST, PORT, EPNT);

interface Props {
  setWeather: Dispatch<SetStateAction<Weather | null>>;
}

export function WeatherSearch({ setWeather }: Props) {
	const [location, setLocation] = useState("");

  const toast = useToast();
  const fetchWeather = async () => {
		const loc = jurl.escapeSpaces(location)
		const params = jurl.buildParams({ key: "q", val: loc })

    try {
      const resp = await fetch(BASE_URL + params);
      const json = await resp.json();
      const parsed = JSON.parse(JSON.stringify(json));

			if (parsed.location.name === "")
				throw "Not a valid API response";

      const w: Weather = {
        location: parsed.location,
        current: parsed.current,
        forecast: parsed.forecast,
      };
      setWeather(w);
    } catch (err) {
      console.log(err);
      toast({
        position: "bottom-left",
        title: `Oops! We couldn't find the requested weather data!`,
        status: "error",
        variant: "left-accent",
        isClosable: true,
      });
    }
  };

  return (
    <Container>
      <InputGroup 
        color="black"
        background="white"
        borderRadius="lg"
        boxShadow="md"
      >
				<Input mr="1" placeholder="Ex: Dallas, TX" onChange={(ev) => setLocation(ev.target.value)}/>
        <InputRightElement>
          <IconButton
            icon={<SearchIcon />}
            colorScheme="blue"
            aria-label="Search weather"
            onClick={fetchWeather}
          ></IconButton>
        </InputRightElement>
      </InputGroup>
    </Container>
  );
}
