import React from 'react'
import Navbar from './component/Navbar'
import Carousal from './component/Carousal'
import Chat from './component/Chat'

const App = () => {
  return (
    <div>
      <Chat/>
      <Navbar/>
      <Carousal/>
    </div>
  )
}

export default App
