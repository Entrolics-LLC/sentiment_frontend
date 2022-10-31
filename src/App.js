import React from 'react'
import "./App.css"
import Submission from './Screens/Submission'
import Login from './Screens/Login'
import Dashboard from './Screens/Dashboard'
import Responses from './Screens/Responses'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import Barchart from './Component/Dashboard/Barchart'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/submission' element={<Submission />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/responses' element={<Responses />} />
        </Routes>
      </BrowserRouter>
      {/* <Barchart/> */}
    </>
  )
}

export default App