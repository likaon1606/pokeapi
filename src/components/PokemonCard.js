import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

const PokemonCard = ({pokemonUrl}) => {

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
      axios.get(pokemonUrl)
        .then(res => setPokemon(res.data))
    }, [pokemonUrl])
      
    //console.log(pokemonUrl)

  return (
    
    <ul>
      <Link to={`/pokedex/${pokemon.id}`}>
        <li>Name: {pokemon.name}</li>
        <li><img src={pokemon.sprites?.other.dream_world.front_default} alt="" /></li>
        
      </Link>
    </ul>
  )
}

export default PokemonCard