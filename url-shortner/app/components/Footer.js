"use client"
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-green-700 h-[8vh] text-white flex flex-col justify-center items-center text-[12px] gap-2'>
        <p>© url shortner - All rights reserved</p>
        <p className='flex justify-center items-center w-full gap-1.5'>
            Follow me on 
            <Link href="/linkedln" target="_blank" rel="noopener noreferrer">
              <img className='w-5 h-5' src="/linkedin.webp" alt="" />
            </Link> 
            <span className='font-bold flex justify-center items-start'>.</span> 
            <Link href="/github" target="_blank" rel="noopener noreferrer">
              <img className='w-5 h-5 rounded-full' src="/github.webp" alt="" />
            </Link>
        </p>
    </footer>
  )
}

export default Footer
