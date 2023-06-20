'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Skeleton from '@/Components/Skeleton'
import Pokemon from '@/Components/Pokemon'
import pokemonLogo from '../public/pokemonLogo.png'

export default async function Home() {
  //const { results: pokemons} = await getPokemons();
  const [pokemons, setPokemons] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/ability')
    .then(res => res.json())
    .then(({results: data}) => {
      let pokemons = data.map((pokemon, index) => {
        let paddedIndex = ('00' + (index + 1)).slice(-3)
        const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedIndex}.png`
        return {
          ...pokemon,
          imageUrl: image
        }
      })
      setPokemons(pokemons)
      setIsLoading(false)
    })
  }, [])

  console.log(pokemons)
  return (
   <div className="bg-blue-500">
    <Image src={pokemonLogo} alt="pokemon-logo" width={150} height={150} className='object-cover m-auto pt-4 mb-2' />
    <div className='w-full md:w-10/12 m-auto flex mt-5 mb-5 flex-col md:grid md:grid-cols-2 md:items-center gap-4 bg-yellow-300 items-center'>
    {isLoading && <Skeleton number={10}/> }
      {pokemons && pokemons.map((pokemon, index) => 
      (
        <Pokemon key={index} name={pokemon.name} image={pokemon.imageUrl}/>
      )
      )}
    </div>
   </div>
  )
}

/** */
export const getPokemons = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/ability', {
    cache: 'no-store'
  })
  const data = await res.json()
  return data
}
