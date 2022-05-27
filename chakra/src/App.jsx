import { ChakraProvider } from '@chakra-ui/react'
import { Gridprojsec } from './components/Gridprojsec';
import { Gridprojthird } from './components/Gridprojthird';
import { Gridproj } from './components/Gridproj';
import { Simplegridprojsec } from './components/Simplegridprojsec';
import { Simplegridthirdproj } from './components/Simplegridthirdproj';
import { Simplegridproj } from './components/Simplegridproj';
import { Flexproject } from './components/Flexproject';
import {Flexprojsec}  from "./components/Flexprojsec"
import { Flexprojthird } from './components/Flexprojthird';
function App() {
  return (
    <ChakraProvider>
      <Flexproject/>
   <p>------</p>
      <Flexprojsec/>
      <p>------</p>
      <Flexprojthird/>
      <p>------</p>
      <Simplegridproj/>
      <p>------</p>
      <Simplegridprojsec/>
      <p>------</p>
      <Simplegridthirdproj/>
      <p>------</p>
      <Gridproj/>
      <p>------</p>
      <Gridprojsec/>
      <p>------</p>
      <Gridprojthird/>
      <p>------</p>
    </ChakraProvider>
  );
}

export default App;