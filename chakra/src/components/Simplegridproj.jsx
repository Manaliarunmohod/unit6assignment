
import { SimpleGrid,Center,Text } from '@chakra-ui/react'


export const Simplegridproj=()=>{
    return (
        <SimpleGrid templateColumns={{lg:'1fr 2fr 1fr',sm:"1fr"}} >
  <Center bg='blue.500' h={{sm:"150px",lg:"400px"}}>
    <Text>Nav</Text>
  </Center>
  <Center  bg='yellow.500' h={{sm:"350px",lg:"400px"}}>
    <Text>Content</Text>
  </Center>
  <Center  bg='red.500' h={{sm:"150px",lg:"400px"}}>
    <Text>Widget</Text>
  </Center>
  
</SimpleGrid>
    )
}