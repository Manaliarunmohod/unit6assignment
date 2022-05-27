
import { Flex,Center,Text } from '@chakra-ui/react'

export const Flexprojthird=()=>{
    return (
        <>
        <Flex color='white' gap="5">
  <Center w='150px' bg='yellow.500' h="100px">
    <Text>Box 1</Text>
  </Center>
  <Center w='150px' bg='yellow.500' h="100px">
    <Text>Box 1</Text>
  </Center>
</Flex>
<Flex>
<Center w='320px' bg='red.500' marginTop="2" marginBottom="2"  h="100px">
    <Text>Box 1</Text>
  </Center>
</Flex>
<Flex gap={3}>
<Center w='100px' bg='blue.500' h="100px">
    <Text>Box 1</Text>
  </Center>
  <Center w='100px' bg='blue.500' h="100px">
    <Text>Box 1</Text>
  </Center>
  <Center w='100px' bg='blue.500' h="100px">
    <Text>Box 1</Text>
  </Center>
</Flex>
</>
    )
}