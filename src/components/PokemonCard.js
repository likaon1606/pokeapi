import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

const PokemonCard = ({pokemonUrl}) => {

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
      axios.get(pokemonUrl)
        .then(res => setPokemon(res.data))
    }, [pokemonUrl])

// const changeColors = pokemon?.types[0].type?.name;
// console.log(changeColors)
  return (
    <div className='pokelist'>
      <div className='pokemon-card'>
        <Link to={`/pokedex/${pokemon.id}`}>
          <h5>Name: {pokemon.name}</h5>
          <img src={pokemon.sprites?.other.dream_world.front_default} alt=""/>
          
        </Link>
      </div>
    </div>
  )
}

export default PokemonCard