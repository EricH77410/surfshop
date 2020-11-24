import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import Wave from './Wave'
import './Header.css'

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="inner-header">
          <Logo />
          <h1 className="header__title">Surf Shop</h1>

          <div className="header__nav">
            <ul className="header__nav-links">
              <li>
                <Link to="/surfs">Surfs</Link>
              </li>
              <li>
                <Link to="/cours">Cours</Link>
              </li>
              <li>
                <Link to="/voyages">Découverte</Link>
              </li>
              <li>Contact</li>
            </ul>

            <div className="header__user">
              <p>Login</p>
              <p>Créer un compte</p>
            </div>
          </div>
        </div>

        {/* <!--Waves Container--> */}
        <div>
          <Wave />
        </div>
        {/* <!--Waves end--> */}
      </div>
      {/* <!--Header ends--> */}
    </>
  )
}

export default Header
