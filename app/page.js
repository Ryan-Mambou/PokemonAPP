"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Skeleton from '@/Components/Skeleton'
import Pokemon from '@/Components/Pokemon'
import pokemonLogo from '../public/pokemonLogo.png'
import { useQuery } from '@tanstack/react-query'
//import { getPokemons } from '@/Services/pokemonService'

async function getPokemons(){
  const res = await fetch('https://pokeapi.co/api/v2/ability')
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  let filtered = await data.results.map((pokemon, index) => {
    let paddedIndex = ('00' + (index + 1)).slice(-3)
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedIndex}.png`
    return {
      ...pokemon,
      imageUrl: image
    }
  }) 
  // console.log('filtered', filtered)
  return filtered
}


export default async function Page() {

 const {status, data : pokemons, error} = useQuery({
  queryKey: 'pokemons', 
  queryFn: getPokemons,
 })
 //const pokemons = await getPokemons();
 //const isLoading = false

  console.log('pokemons', pokemons)
  //console.log('data', data)
  console.log(status)
  
  return (
    <div className="">
  <Image src={pokemonLogo} alt="pokemon-logo" width={150} height={150} className='object-cover m-auto pt-4 mb-2' />
  <div className='w-full md:w-10/12 m-auto flex mt-5 mb-5 flex-col md:grid md:grid-cols-2 md:grid-row-1 md:items-center gap-4 items-center'>
  {status === 'loading' && <Skeleton number={10}/>} 
  {status === 'success' && pokemons && pokemons.map((pokemon, index) => 
    (
      <Pokemon key={index} name={pokemon.name} image={pokemon.imageUrl}/>
    )
    )}
  </div>
  </div>
  )
}

 

