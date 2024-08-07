import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Vans from './Pages/Vans'
import VansDetail from './Pages/VansDetail'
import Dashboard from './Pages/Host/Dashboard'
import Income from './Pages/Host/Income'
import Reviews  from './Pages/Host/Reviews/'
import Layout from './Components/Layout'
import HostLayout from './Components/HostLayout'


import "./server"

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path ="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} />
      <Route path="vans/:id" element={<VansDetail />} />

      <Route path= "host" element={<HostLayout />}>      
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      <Route path="reviews" element={<Reviews />} />
      </Route>
      
    </Route> 
    </Routes> 
  </BrowserRouter>
  )
}

export default App
