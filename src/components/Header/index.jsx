import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"
import profile from "../../assets/profile.jpg"

export const Header = () => {
  return (
    <div className='Header'>
      <img src={logo} className='logo' alt="Projeto Community" />
      <nav>
        <Link to="/">home</Link>
        <Link>episódios</Link>
        <Link to="/perfil">perfil</Link>
        <Link id='logar'>logar</Link>
      </nav>
      <Link className="profile">
        <img src={profile} />
      </Link>
    </div>
  )
}
