import { useState } from 'react'
import { SearchBar }  from './SearchBar'
import { WeatherDisplay } from './WeatherDisplay'
import { Container, VStack } from '@chakra-ui/react'

function App() {
  return (
      <VStack spacing={24}>
        <Container>
          <SearchBar />
        </Container>
        <Container maxW="container.md">
          <WeatherDisplay width={"100%"} />
        </Container>
      </VStack>
  )
}

export default App;
