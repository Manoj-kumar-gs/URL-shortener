"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <div className="flex justify-around items-center">
      <div className="flex flex-col gap-4 items-center justify-center w-[50vw]">
        <h1 className="text-3xl font-bold">Welcome to Minilink</h1>
        <p className="mt-2 mx-15 text-lg text-center">
          Minilink helps you turn long, messy links into short and easy ones you can share anywhere. Just paste your link, and get a short version instantly — no sign up, no login, just quick and easy URL shortening.
        </p>
        <ul className='flex gap-8'>
        <Link className='font-extrabold bg-green-300 rounded-lg px-2 py-1 hover:scale-105 transition-transform duration-300 ease-in-out' href="/shortener"><li>Try Now</li></Link>
        <Link className='font-extrabold bg-green-300 rounded-lg px-2 py-1 hover:scale-105 transition-transform duration-300 ease-in-out' href="/about"><li>Read More</li></Link>
      </ul>
      </div>
      <div className="flex justify-center items-center w-[50vw]">
        <Link href="/shortener">
          <Image
            src="/URL_Shortener.webp"
            alt="Hero Image"
            width={550}
            height={500}
            className="rounded-lg shadow-green-400 shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </Link>
      </div>
    </div>
  );
}
