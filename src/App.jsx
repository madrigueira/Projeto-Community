import React from 'react'
import "./index.scss"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Header} from "./components/Header"
import {Home} from "./pages/Home"
import {Perfil} from "./pages/Perfil"

export const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='perfil' element={<Perfil/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}
