import React from 'react'
import './home.css'
import HomeCard from './HomeCard'
import charactersImg from '../../assets/rickandmortycharacterss.jpg'
import planetsImg from '../../assets/rickandmortyplanets.jpg'
import textcharImg from '../../assets/Personajes-text.png'
import textplanImg from '../../assets/Planetas-text.png'

export default function home() {

    const homeCardData = [ 
      {
        href: "/personajes",
        img: charactersImg,
        textImg: textcharImg
      },
      {
        href: "/planetas",
        img: planetsImg,
        textImg: textplanImg
      }
    ]

  return (
    <div className='homeMainContainer'>
      {homeCardData.map((d, i) => {
        return (
          <HomeCard 
          href={d.href}
          img={d.img}
          textImg={d.textImg}
          key={d.href+i}
          />
        )
      })}
    </div>
  )
}
