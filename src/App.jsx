import React from "react";
import './App.css'
import Header from "./components/header/Header";
import { Routes, Link, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Characters from "./components/characters/Characters"
import Planets from "./components/planets/Planets"
import CharacterDetail from './components/characters/CharacterDetail'

function App() {

  return (
    <div>
      < Header />
      <Routes>
      <Route path="/" exact="true" Component={Home}/>
      <Route path="/personajes" exact="true" Component={Characters}/>
      <Route path="/personajes/:id" exact="true" Component={CharacterDetail}/>
      <Route path="/planetas" exact="true" Component={Planets}/>
      </Routes>

    </div>
    
  )
}

export default App
