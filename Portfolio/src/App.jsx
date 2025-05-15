import { useState } from 'react'
import{ BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'

function App() {

  return (
    <>

    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
      
    </>
  )
}

export default App
