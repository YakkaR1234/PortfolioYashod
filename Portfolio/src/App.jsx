import { useState } from 'react'
import{ BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Mainlayout from './layout/Mainlayout'

function App() {

  return (
    <>

    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainlayout/>}/>
      </Routes>
      </BrowserRouter>
    </div>
      
    </>
  )
}

export default App
