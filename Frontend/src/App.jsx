import { BrowserRouter, Route, Routes} from 'react-router-dom'

import React from 'react'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={<Dashboard/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
