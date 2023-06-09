import React from 'react'
import Skeleton from '@/Components/Skeleton'
import Pokemon from '@/Components/Pokemon'

export default function Home() {
  return (
   <div className="bg-blue-500 w-full h-screen">
    <Skeleton />
    <Pokemon />
   </div>
  )
}
