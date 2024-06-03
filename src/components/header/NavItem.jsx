import React from 'react'
import { Link } from 'react-router-dom'


export default function NavItem(props) {
  return (
    <Link to={props.href} className='linkNav'>
    <div className='navItem'>{props.text}</div>
    </Link>
  )
}
