import React from 'react'

export default function PlanetCard(props) {
    return (
        <div className='cardPlanetContainer'>
            <h1>{props.name}</h1>
        <ul>   
            <li>Dimension: {props.dimesion}</li>
            <li>Type: {props.type}</li>
            <li>Residents: {props.residents}</li>
        </ul>
        </div>

    )
}
