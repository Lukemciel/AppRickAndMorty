import React from 'react'
import NavItem from './NavItem'
import './headerStyle.css'
import logo from '../../assets/rmLogo.png'

export default function Header() {
  return (
    <div>
    <div className='logoContain'>
    <img src={logo} alt="logo" className='imgLogo'/>
    </div>
    <nav className='navContainer'>
      <NavItem href="/" text="HOME"/>
      <NavItem href="/personajes" text="CHARACTERS"/>
      <NavItem href="/planetas" text="LOCATIONS"/>
    </nav>
    </div>
  )
}
