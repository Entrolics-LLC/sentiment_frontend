import React from 'react'
import "./App.css"
import Headerbottom from './Component/Bottomheader'
import Headertop from './Component/Headertop'
import Middlesection from './Component/Middle section'
import Sidebar from './Component/Sidebar'

const App = () => {
  return (
    <>
      <Headertop />
      <Headerbottom />
      <Sidebar />
      <Middlesection/>


    </>
  )
}

export default App