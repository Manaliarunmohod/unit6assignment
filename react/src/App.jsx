
import { Navbar } from './components/Navbar'
import { EmployeeList
 } from './components/EmployeeList';
 import { EmployeeDetails } from './components/Employeedetail';

import './App.css';
import {Routes,Route} from "react-router-dom"

//import {EmployeeList} from"./components/EmployeeList"

// import {EmployeeDetails} from "./components/EmployeesDetails"
function App() {
 

  return (
    <div className="App">
     <Navbar/>
     <Routes>

<Route path="/employees" element={<EmployeeList/>}></Route>

<Route path="/employee/:id" element={<EmployeeDetails/>}></Route>
     </Routes>
    </div>
  )
}

export default App
