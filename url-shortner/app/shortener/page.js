"use client"
import Link from 'next/link';
import React, { useState } from 'react'


const page = () => {
  const [url, setUrl] = useState("");
  const [shortName, setShortName] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  // const router = new Router()

  const generateURL = async() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shortenURL": shortName
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    
    await fetch("/api/generate", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
    setShortenedUrl(`${process.env.NEXT_PUBLIC_HOST}${shortName}`)
    setUrl("")
    setShortName("")
  }



  return (
    <div className='flex flex-col items-center justify-center bg-green-700 space-y-4 rounded-lg shadow-green-200 shadow-lg p-4 w-[35vw] mx-auto mt-10 text-white'>
      <h1 className='font-extrabold text-2xl'>MiniLink - URL Shortener</h1>
      <div className='flex flex-col space-y-2 my-4'>
        <input onChange={(e) => { setUrl(e.target.value) }} value={url} type="text" placeholder="Enter your URL here" className='py-1 px-2 border border-gray-300 rounded-md w-[20vw]' />
        <input onChange={(e) => { setShortName(e.target.value) }} value={shortName} type="text" placeholder="Enter your URL shortener name here" className='py-1 px-2 border border-gray-300 rounded-md w-[20vw]' />
        <button className='text-black font-extrabold bg-green-300 rounded-lg px-2 py-1 my-4 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer' onClick={()=>generateURL()}>Generate</button>
      </div>
      <div className='flex flex-col gap-4'>
        <p className='font-bold text-lg'>Your Links</p>
        {shortenedUrl &&<Link target='_blank' href={`${shortenedUrl}`}><div>{shortenedUrl}</div></Link>}
      </div>
    </div>
  )
}

export default page
