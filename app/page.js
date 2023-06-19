import React from 'react'
import Skeleton from '@/Components/Skeleton'
import Pokemon from '@/Components/Pokemon'


export default async function Home() {
  const pokemons = await getPokemons();
  console.log(pokemons)
  return (
   <div className="bg-blue-500 w-full h-screen">
    <h1 className='text-center'>Pokemons!</h1>
    <div className='w-full md:w-10/12 m-auto flex flex-col gap-4 bg-yellow-300 items-center'>
    <Skeleton />
    <Pokemon />
    </div>
   </div>
  )
}

export const getPokemons = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/ability', {
    next: {revalidate: 10},
  })
  const data = await res.json()
  return data
}
