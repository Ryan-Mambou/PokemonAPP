'use client'
import Image from 'next/image'
import Skeleton from '@/components/Skeleton'
import Pokemon from '@/Components/Pokemon'
import pokemonLogo from '../public/pokemonLogo.png'
import { useQuery } from '@tanstack/react-query'

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

export default function Home() {

  const {status, data : pokemons, error} = useQuery({ queryKey: ['pokemons'], queryFn: getPokemons })
  console.log(pokemons)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h2>Welcome to Brazil!</h2>
     <div>
      {status === 'loading' && <Skeleton number={10} />}
      {status === 'success' && pokemons?.map((pokemon, index) => <Pokemon 
      image={pokemon.imageUrl} 
      name={pokemon.name} 
      key={index}/>)}
     </div>
    </main>
  )
}

 

