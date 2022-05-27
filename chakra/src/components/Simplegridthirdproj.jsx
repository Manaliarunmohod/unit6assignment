
import { SimpleGrid,Box } from '@chakra-ui/react'

export const Simplegridthirdproj=()=>{
    return (
        <>
        <SimpleGrid columns={{lg:"2",sm:"1"}} spacing='5px'>
  <Box bg='yellow' height='250px' ></Box>
  <Box bg='yellow' height='250px'></Box>
       </SimpleGrid>
       <SimpleGrid marginTop={5}   columns={{lg:"1",sm:"1"}} spacing='5px'>
  <Box bg='red' height='250px' ></Box>
       </SimpleGrid>
       <SimpleGrid  marginTop={5}  columns={{lg:"3",sm:"1"}} spacing='5px'>
  <Box bg='blue' height='250px' ></Box>
  <Box bg='blue' height='250px'></Box>
  <Box bg='blue' height='250px'></Box>
       </SimpleGrid>
       </>
    )
}