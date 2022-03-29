import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Pokedex from './Pokedex'

const PokedexInfo = () => {

  const {id} = useParams()
  const [ pokemon, setPokemon] = useState({})

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => setPokemon(res.data))
  }, [id])

  return (
    <div className='pokemon-info'>
      <div className='card-title'></div>
        <div className='card-element'>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
          <li><b>Types:</b> {pokemon.types?.[0].type.name}</li>
          <li><b>Hp:</b> {pokemon.stats?.[0].base_stat}</li>
          <li><b>Experience:</b> {pokemon.base_experience}</li>
          <li><b>Hight:</b> {pokemon.height}</li>
          <li><b>Weight:</b> {pokemon.weight}</li>
      </div>
      <div className='btn-return'>   
        <Link to={'/pokedex/'} element={<Pokedex/>}>
          <button className="return-link"><b>Go Back</b></button>
        </Link>
      </div>
    </div>
  )
}

export default PokedexInfo