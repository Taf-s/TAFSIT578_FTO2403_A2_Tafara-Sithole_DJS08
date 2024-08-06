import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Vans from './Pages/Vans'
import VansDetail from './Pages/VansDetail'
import Layout from './Components/Layout'

import "./server"

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/vans" element={<Vans />} />
      <Route path="/vans/:id" element={<VansDetail />} />
    </Route> 
    </Routes>
   
  </BrowserRouter>
  )
}

export default App
