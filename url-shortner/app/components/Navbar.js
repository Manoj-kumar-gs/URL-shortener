"use client"
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-green-700 h-[8vh] text-white py-2 px-6 flex justify-between items-center'>
      <Link href="/"><h1 className='text-3xl font-bold'>Minilink</h1></Link>
      <div className='flex justify-between items-center gap-4 w-[25vw]'> 
      <ul className='flex gap-8'>
        <Link className='font-bold hover:scale-105 transition-transform duration-300 ease-in-out' href="/"><li>Home</li></Link>
        <Link className='font-bold hover:scale-105 transition-transform duration-300 ease-in-out' href="/about"><li>About</li></Link>
      </ul>
      <ul className='flex gap-8 text-black'>
        <Link className='font-extrabold bg-green-300 rounded-lg px-2 py-1 hover:scale-105 transition-transform duration-300 ease-in-out' href="/shortener"><li>Try Now</li></Link>
        <Link className='font-extrabold bg-green-300 rounded-lg px-2 py-1 hover:scale-105 transition-transform duration-300 ease-in-out' target='_blank' href="/Github"><li>Github</li></Link>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
