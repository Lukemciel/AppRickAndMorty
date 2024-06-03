import React from 'react'
import { useState, useEffect } from 'react'
import './characterCard.css'
import { Link } from 'react-router-dom'

export default function characters() {

  let [characters, setCharacters] = useState([])
  let [count, setCount] = useState(1)

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=1")
      .then(response => response.json())
      .then(data => setCharacters(data))
  }, [])

  const next = async () => {
    if (characters.info.next) {
      await fetch(characters.info.next)
        .then(response => response.json())
        .then(data => setCharacters(data), setCount(count+1))
    }
  }

  const prev = async () => {
    if (characters.info.prev) {
      await fetch(characters.info.prev)
        .then(response => response.json())
        .then(data => setCharacters(data), setCount(count-1))
    }
  }

  console.log(characters);

  return (
    <div className='characterMainContainer'>
      <nav className='prev-next-buttons'>
        <button onClick={prev}><i className="fa-solid fa-arrow-left"></i></button>
        <span>{count}</span>
        <button onClick={next}><i className="fa-solid fa-arrow-right"></i></button>
      </nav>
      {characters.results && characters.results.map((c, i) => (
        <Link to={"/personajes/"+c.id} className='linkCardChar'> 
        <div className='characterCardContainer'>
          <div className='imgCardContainer' key={c.id + i}>
            <img src={c.image} key={c.id + "image" + i} />
          </div>
          <h2 className='h2charCard'>{c.name}</h2>
          <p className='pcharCard'>Origen:</p>
          <h3 className='h3charCard'>{c.origin.name}</h3>
          <p className='pcharCard'>Raza:</p>
          <h3 className='h3charCard'>{c.species}</h3>
        </div>
        </Link>
      ))}
      <nav className='prev-next-buttons'>
        <button onClick={prev}><i className="fa-solid fa-arrow-left"></i></button>
        <span>1</span>
        <button onClick={next}><i className="fa-solid fa-arrow-right"></i></button>
      </nav>
    </div>
  )
}
