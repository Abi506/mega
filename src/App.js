import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/japanese/japanese'
import Section from './components/indian/indian'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/indian' element={<Section/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
