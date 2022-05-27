import { Flex,Center,Text } from '@chakra-ui/react'


export const Flexproject=()=>{
    return(
        <Flex color='white' direction={{lg:"row",sm:"column"}}>
  <Center w={{sm:"250px",lg:"200px"}} bg='blue.500' h={{sm:"150px",lg:"400px"}}>
    <Text>Nav</Text>
  </Center>
  <Center w={{sm:"250px",lg:"350px"}} bg='yellow.500' h={{sm:"350px",lg:"400px"}}>
    <Text>Content</Text>
  </Center>
  <Center w={{sm:"250px",lg:"200px"}} bg='red.500' h={{sm:"150px",lg:"400px"}}>
    <Text>Widget</Text>
  </Center>
</Flex>
    )
}
