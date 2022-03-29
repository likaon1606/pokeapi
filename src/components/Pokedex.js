import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PokemonCard from './PokemonCard'

const Pokedex = () => {

  const userName = useSelector(state => state.userName)
  const navigate = useNavigate()

  const [ pokemons, setPokemons] = useState([])
  const [locations, setLocations] = useState([]);
  const [ pokemonName, setPokemonName ] = useState('')


  const [ page, setPage ] = useState(1)
  const itemsNumber = 16
  const lastIndex = page * itemsNumber
  const firstIndex = lastIndex - itemsNumber
  const pokemonsPage = pokemons?.slice(firstIndex, lastIndex)
  const totalPages = Math.ceil(pokemons?.length / itemsNumber)
  const numberPages = []
    for(let i = 1; i <= totalPages; i++){
      numberPages.push(i)
  }

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1300/")
    .then(res => setPokemons(res.data.results))
    
    axios.get("https://pokeapi.co/api/v2/type/")
      .then((res) => setLocations(res.data.results));//hasta aquí va bien
  }, [])
   

  const submit = (e) => {
    e.preventDefault();
    navigate(`/Pokedex/${pokemonName}`);//aqui va bien
  };
  const handleType = (e) => {
    // e.target.value es la url de la location
    console.log(e.target.value)
    axios.get(e.target.value)
    .then(res => setPokemons(res.data.pokemon))
  };
  

  return (
    <div className='pokedex'>
      
      <p className="welcome-message">Welcome pokemon master {userName}</p>

      <div className="select">
        <select onChange={handleType}>
          {
          locations.map(location =>(
            <option key={location.url} value={location.url}>
              {location.name}
            </option>      
          ))
        }
        </select>
      </div>

      <form className="input-container" onSubmit={submit}>
        <label htmlFor="pokemon-name">Search Name </label>
        <input
          type="text"
          placeholder="Write pokemon name"
          id="pokemon-name"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <button className='btn-go'>GO</button>
      </form>

      <div className='container-list'>
        {pokemonsPage.map(pokemon => (
          <PokemonCard 
          pokemonUrl={pokemon.pokemon?.url ? pokemon.pokemon?.url : pokemon.url} 
          key={pokemon.pokemon?.url ? pokemon.pokemon?.url : pokemon.url} 
          />
        ))}
      </div>

      <div className='buttons'>
          <button
            className='btn-previous'
            onClick={() => setPage(page - 1)}
            disabled={page <= 1}>
            Previous
          </button>
          
          <button
            className='btn-next'
            onClick={() => setPage(page + 1)}
            disabled={page >= totalPages}>
            Next
          </button>
        </div>

        <div className='pages'>
          {numberPages.map(page => 
            <button
              className='btn-pages'
              key={page} 
              onClick={()=> setPage(page + 1)}>
              {page}
            </button>)}
      </div>
    </div>
  )
}

export default Pokedex