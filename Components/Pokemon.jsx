import React, { useState } from 'react'
import Image from 'next/image'
  
function Pokemon({name, image}) {
// console.log(image)
  return (
    <div>
        <div className='flex flex-row cursor-pointer shadow-lg border-r-4 w-[20rem] h-[6rem] gap-4 items-center p-2 rounded'>
            <div className='rounded-full w-[4.5rem] h-[4.5rem]'>
                <Image src={image} alt='profileImg' width={200} height={200} priority="false" className='rounded-full object-cover' />
            </div>
        <div><span>{name}</span></div>
        </div>

    </div>
  )
}

export default Pokemon