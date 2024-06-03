import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function CharacterDetail(props) {

    let [character, setCharacter] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
            .then(data => setCharacter(data))
    }, [])

    console.log(character);

    if(!character.name){
        return (
            <div>Loading...</div>
        )
    } else {
        return (
            <div className="charDetailContainer">
            <div className="imgCharDetail"> <img src={character.image} alt="charImg" /></div>
            <div className="infoCharacterContainer">
                <h1>{character.name}</h1>
                <ul>
                    <li>Status: <span>{character.status}</span></li>
                    <li>Specie: <span>{character.species}</span></li>
                    <li>Gender: <span>{character.gender}</span></li>
                    <li>Location: <span>{character.location.name}</span></li>
                    <li>Origin: <span>{character.origin.name}</span></li>
                </ul>
            </div>
        </div>
    )
}
}