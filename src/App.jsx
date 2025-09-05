import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
    </div>
  )
}

export default App