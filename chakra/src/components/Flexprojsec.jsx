


import { Flex,Center,Text } from '@chakra-ui/react'


export const Flexprojsec=()=>{
    return(
    <>
    <Flex color='white' direction={{lg:"row",sm:"column"}} flexWrap="wrap" gap={{sm:"2"}} flexDirection="row">
  <Center w={{sm:"250px",lg:"350px"}} bg='blue.500' h={{sm:"150px",lg:"400px"}}>
    <Text>Nav</Text>
  </Center>
  <Center w={{sm:"250px",lg:"200px"}} bg='yellow.500' h={{sm:"150px",lg:"600px"}}>
    <Text>Content</Text>
  </Center>
  </Flex>
  <Flex direction="row" >
  <Center w={{sm:"250px",lg:"350px"}} bg='yellow.500' h={{sm:"150px",lg:"200px"}} flexDirection="row" marginTop={{sm:"5px"}} >
    <Text>Content</Text>
  </Center>
  </Flex>
  </>
  
    )
}


