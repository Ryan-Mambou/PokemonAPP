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
    <div>
        <div className='flex flex-row bg-green-300 shadow-lg border-r-4 w-[20rem] h-[6rem] gap-4 items-center p-2'>
            <div className='rounded-full w-[4.5rem] h-[4.5rem]'>
                <Image src={pikachu} alt='profileImg' priority="false" className='rounded-full object-cover' />
                </div>
            <div><span>name</span></div>
        </div>

    </div>
  )
}

export default Pokemon