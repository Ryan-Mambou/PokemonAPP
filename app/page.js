import React from 'react'
import Image from 'next/image'
import Skeleton from '@/Components/Skeleton'
import Pokemon from '@/Components/Pokemon'
import pokemonLogo from '../public/pokemonLogo.png'


export default async function Home() {
  const { results: pokemons} = await getPokemons();
  console.log(pokemons)
  return (
   <div className="bg-blue-500">
    <Image src={pokemonLogo} alt="pokemon-logo" width={150} height={150} className='object-cover m-auto mt-2 mb-2' />
    <div className='w-full md:w-10/12 m-auto flex mt-5 mb-5 flex-col md:grid md:grid-cols-2 md:items-center gap-4 bg-yellow-300 items-center'>
    <Skeleton />
    {pokemons?.map((pokemon, index) => {
      return (
        <Pokemon key={index} name={pokemon.name} image={pokemon.url}/>
      )
    })}
    </div>
   </div>
  )
}

export const getPokemons = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/ability', {
    cache: 'no-store'
  })
  const data = await res.json()
  return data
}
