
import {Grid,GridItem} from '@chakra-ui/react'

export const Gridprojsec=()=>{
    return (
        <Grid
  h='200px'
  templateRows='repeat(3, 1fr)'
  templateColumns='repeat(3, 1fr)'
  gap={4}
>
  <GridItem rowSpan={2} colSpan={2} bg='purple' />
  <GridItem colSpan={1} rowSpan={3} bg='red' />
  <GridItem colSpan={2} bg='lightblue' />
</Grid>
    )
}