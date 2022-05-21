import { useState } from 'react'

import './App.css'
import {Form} from "./Component/Form"
 import  {Food}  from './Component/Food'
function App() {
  

  return (
    <div className="App">
      <Food/>
     <Form/> 
    </div>
  )
}

export default App
