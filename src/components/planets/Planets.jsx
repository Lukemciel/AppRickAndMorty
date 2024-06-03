import React from 'react'
import PlanetCard from './PlanetCard'
import './planets.css'
import { useState, useEffect } from 'react'

export default function Planets() {
  let [locations, setLocations] = useState([])
  let [count, setCount] = useState(1)
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then(response => response.json())
      .then(data => setLocations(data))
  }, [])

  const next = async () => {
    if (locations.info.next) {
      await fetch(locations.info.next)
        .then(response => response.json())
        .then(data => setLocations(data), setCount(count+1))
    }
  }

  const prev = async () => {
    if (locations.info.prev) {
      await fetch(locations.info.prev)
        .then(response => response.json())
        .then(data => setLocations(data), setCount(count-1))
    }
  }

  console.log(locations);
  return (
    <div className='planetMainContainer'>
      <nav className='prev-next-buttons'>
        <button onClick={prev}><i className="fa-solid fa-arrow-left"></i></button>
        <span>{count}</span>
        <button onClick={next}><i className="fa-solid fa-arrow-right"></i></button>
      </nav>
      {locations.results && locations.results.map((l, i) => {
        return (
          <PlanetCard
            name={l.name}
            dimension={l.dimension}
            type={l.type}
            residents={l.residents.length}
            key={l.name + i}
          />
        )
      })}
      <nav className='prev-next-buttons'>
        <button onClick={prev}><i className="fa-solid fa-arrow-left"></i></button>
        <span>1</span>
        <button onClick={next}><i className="fa-solid fa-arrow-right"></i></button>
      </nav>
    </div>
  )
}
