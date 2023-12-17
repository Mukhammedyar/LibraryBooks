import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex w-full bg-orange-800 items-center justify-start gap-24 text-white  px-10 md:px-24 h-[60px] font-sans sticky top-0'>
        <div className="logo">
            <h1 className='md:text-2xl text-md font-bold'>Телибаева Акмарал</h1>
        </div>
          <div className="nav-items flex items-center justify-between gap-10 text-md">
              <Link to={`/`} className="h-full text-light">Home</Link>
              <Link to={`/about`} className="h-full text-light">About</Link>
        </div>
    </div>
  )
}
