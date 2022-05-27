


import {Grid,GridItem} from '@chakra-ui/react'

export const Gridprojthird=()=>{
    return (
        <Grid
  h='200px'
  templateRows='repeat(3, 1fr)'
  templateColumns='repeat(3, 1fr)'
  gap={4}
>
  <GridItem rowSpan={1} colSpan={1} bg='yellow' />
  <GridItem colSpan={1} rowSpan={1} bg='yellow' />
  <GridItem colSpan={3} bg='red' />
  <GridItem  colSpan={1} bg='blue' />
  <GridItem colSpan={1} bg='blue' />
  <GridItem colSpan={1} bg='blue' />
</Grid>
    )
}