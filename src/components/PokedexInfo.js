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
    <div>PokedexInfo
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
      <li>Types: {pokemon.types?.[0].type.name}</li>
      <li>Hp: {pokemon.stats?.[0].base_stat}</li>
      <li>Experience: {pokemon.base_experience}</li>
        <li>Hight: {pokemon.height}</li>
        <li>Weight: {pokemon.weight}</li>
      <Link to={'/pokedex/'} element={<Pokedex/>}>Return</Link>
    </div>
  )
}

export default PokedexInfo