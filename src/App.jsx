import React from 'react'
import Navbar from './sections/Navbar'

const App = () => {
  return (
    <div className='relative w-screen min-h-screen overflow-x-auto'>
      <Navbar />
      <section id='home' className='min-h-screen bg-green-700'/>
      <section id='services' className='min-h-screen bg-blue-600'/>
    </div>
  )
}

export default App