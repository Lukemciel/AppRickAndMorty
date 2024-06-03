import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeCard(props) {
  return (
    <div className='homeCard'>
        <Link to={props.href}>
        <img className='cardImg' src={props.img} alt="img" />
        <img className='textImg' src={props.textImg} alt="text" />
        </Link>
    </div>
  )
}
