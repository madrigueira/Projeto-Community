import React from 'react'
import "./index.scss"

export const HeaderMain = () => {
  return (
    <div className='HeaderMain'>
      <div className="circle">
        <h1>Projeto Community</h1>
      </div>
      <div className="container">
        <button>Eps assistidos: 0</button>
        <div className="profile-info">
          <img src="https://media.comicbook.com/wp-content/uploads/2013/12/winger-guarantee.png" alt="Profile Pic" />
          <h5>Matheus Negrini</h5>
        </div>
        <button>Logar</button>
      </div>
    </div>
  )
}
