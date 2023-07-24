import React from 'react'
import Image from 'next/image'

export default function Pokemon({name, image}) {
  return (
    <div className='w-full md:w-10/12 m-auto flex mt-5 mb-5 flex-col md:grid md:grid-cols-2 md:grid-row-1 md:items-center gap-4 items-center'>
        <div className='flex flex-row cursor-pointer shadow-lg border-r-4 w-[20rem] h-[6rem] gap-4 items-center p-2 rounded'>
            <div className='rounded-full w-[4.5rem] h-[4.5rem]'>
                <Image src={image} alt='profileImg' width={200} height={200} priority="false" className='rounded-full object-cover' />
            </div>
        <div><span>{name}</span></div>
        </div>
    </div>
  )
}