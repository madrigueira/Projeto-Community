import React from 'react'
import "./index.scss"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { HeaderMain } from './components/HeaderMain'
import { Create } from './pages/Create'

export const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage/>}></Route>
          <Route path="/create" element={<Create/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}
