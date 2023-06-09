import React from 'react'
import Image from 'next/image'
import pikachu from '../public/pikachu.png'

export async function getStaticProps(){
    const data = await axios.get("https://pokeapi.co/api/v2/ability/");
    console.log('Why')
    console.log(data)

    return {
        props: {
            pokemons: data.data
        }
    }
  }
  

function Pokemon({pokemons}) {
    console.log('pokemons', pokemons)
  return (
    <div className='animate-pulse'>
        <div className='flex flex-row bg-green-300 shadow-lg border-r-4 w-[20rem] h-[6rem] gap-4 items-center p-2'>
            <div className='rounded-full w-[4.5rem] h-[4.5rem]'>
                <Image src={pikachu} alt='profileImg' priority="false" className='rounded-full object-cover'/>
                </div>
            <div><span>name</span></div>
        </div>

        <div role="status" class="max-w-sm animate-pulse">
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    <span class="sr-only">Loading...</span>
</div>

    </div>
  )
}

export default Pokemon