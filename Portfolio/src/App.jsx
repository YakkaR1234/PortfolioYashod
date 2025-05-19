import { useState } from 'react'
import{ BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Mainlayout from './layout/Mainlayout'
import Aboutlayout from './layout/Aboutlayout'
import Productlayout from './layout/Productlayout'

function App() {

  return (
    <>

    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainlayout/>}/>
        <Route path='/about' element={<Aboutlayout/>}/>
        <Route path='/project' element={<Productlayout/>}/>
      </Routes>
      </BrowserRouter>
    </div>
      
    </>
  )
}

export default App
