import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='App'>
        <div className='container'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App