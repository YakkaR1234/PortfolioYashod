import { useState } from 'react'
import{ BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Mainlayout from './layout/Mainlayout'
import Aboutlayout from './layout/Aboutlayout'
import Productlayout from './layout/Productlayout'
import ContactLayout from './layout/ContactLayout'

function App() {

  return (
    <>

    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainlayout/>}/>
        <Route path='/about' element={<Aboutlayout/>}/>
        <Route path='/project' element={<Productlayout/>}/>
        <Route path='/contact' element={<ContactLayout/>}/>
      </Routes>
      </BrowserRouter>
    </div>
      
    </>
  )
}

export default App
