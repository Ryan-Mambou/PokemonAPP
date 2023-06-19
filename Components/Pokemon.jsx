import React from 'react'
import Image from 'next/image'
import pikachu from '../public/pikachu.png'
  

function Pokemon() {
  return (
    <div>
        <div className='flex flex-row cursor-pointer bg-green-300 shadow-lg border-r-4 w-[20rem] h-[6rem] gap-4 items-center p-2 rounded'>
            <div className='rounded-full w-[4.5rem] h-[4.5rem]'>
                <Image src={pikachu} alt='profileImg' priority="false" className='rounded-full object-cover' />
                </div>
            <div><span>name</span></div>
        </div>

    </div>
  )
}

export default Pokemon