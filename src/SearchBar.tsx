import { Button } from '@chakra-ui/react'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'

export function SearchBar() {
  return (
    <InputGroup>
      <Input placeholder='Ex: Dallas, TX' />
      <InputRightElement width='4.5rem'>
        <Button colorScheme="blue">Submit</Button>
      </InputRightElement>
    </InputGroup>
  )
}
