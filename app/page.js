'use client'
import Image from 'next/image'
import Skeleton from '@/components/Skeleton'
import Pokemon from '@/Components/Pokemon'
import pokemonLogo from '../public/pokemonLogo.png'
import { useQuery, useInfiniteQuery } from '@tanstack/react-query'

async function getPokemons({ pageParam = 0 }){
  console.log(pageParam)
  const res = await fetch(`https://pokeapi.co/api/v2/ability?limit=20&offset=${pageParam}`)
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  let filtered = await data.results.map((pokemon, index) => {
    let paddedIndex = pageParam === 0 ? ('00' + (index + 1)).slice(-3) : ('00' + (index * pageParam + 1)).slice(-3)
    //let paddedIndex = ('00' + (index * pageParam + 1)).slice(-3)
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

  const {
    data : pokemons,
    error,
    pageParams,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons,
    getNextPageParam: (lastPage, allPages) => {
      console.log("allPages ", allPages)
      const nextPage =
        lastPage.length === 20 ? allPages.length * 20 : undefined;
        console.log("nextPage", nextPage)
      return nextPage;
    },
  })

 // const {status, data : pokemons, error} = useQuery({ queryKey: ['pokemons'], queryFn: getPokemons })
 
  console.log(pokemons)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Image src={pokemonLogo} alt='Pokemon logo' width={150} height={150} className='objet-cover'/>
     <h2 className='mt-4'>Welcome to Brazil!</h2>
     <div className='w-full md:w-10/12 m-auto flex mt-5 mb-5 flex-col md:grid md:grid-cols-3 md:grid-row-1 md:items-center gap-4 items-center'>
      {status === 'loading' && <Skeleton number={15} />}
      {status === 'success' && pokemons.pages?.map(page => 
      page.map((pokemon, index) => 
      <Pokemon 
      image={pokemon.imageUrl} 
      name={pokemon.name} 
      key={index}/>))}
     </div>
     <button className='rounded-full mt-3 border-2 border-blue-400 py-1 px-8 bg-yellow-300 cursor-pointer shadow-lg'
     onClick={() => fetchNextPage()}>
     {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
     </button>
    </main>
  )
}

 

