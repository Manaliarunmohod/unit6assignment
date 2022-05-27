

import {Grid,GridItem,Center,Text} from '@chakra-ui/react'


export const Gridproj=()=>{
    return (
        <Grid templateColumns='1fr 2fr 1fr'>
  <GridItem w='100%' h='120' bg='blue.500' >
  <Center >
    <Text>Nav</Text>
  </Center>
  </GridItem>
  <GridItem w='100%' h='120' bg='yellow.500' >
  <Center >
    <Text>Content</Text>
  </Center> 
  </GridItem>
  <GridItem w='100%' h='120' bg='red.500' >
  <Center >
    <Text>Content</Text>
  </Center>
  </GridItem>
  
</Grid>
    )
}