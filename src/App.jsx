import React from 'react'

import './App.css'
import Boiler from './Component/Boiler'
import Kp from './Component/Kp'
import Border from './Component/Border'
import Bottom from './Component/Bottom';
import Nnside from './Component/Nnside'
import Menu from './Component/Menu'
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Edu from './Component/Edu'
import Contact from './Component/Contact'



function App() {
 
  return (
    
  <BrowserRouter>
  <Routes>

<Route path='/' element={<Boiler/>}></Route>
<Route path='/menu' element={<Menu/>}></Route>
<Route path='/education' element={<Edu/>}></Route>
<Route path='/cont' element={<Contact/>}></Route>

  </Routes>
  
  
  </BrowserRouter>
   
   
    
        
       
    
  )
}

export default App;
