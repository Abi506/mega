import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/japanese/japanese'
import Section from './components/indian/indian'
import DriveKorean from './components/driveKorean/driveKorean'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/indian' element={<Section/>}/>
      <Route exact path='/korean' element={<DriveKorean/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
