import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='flex nav w-full z-10 items-center justify-start gap-24 text-white  px-10 md:px-24 h-[60px] font-sans sticky top-0'>
        <div className="logo">
            <h1 
              className='md:text-2xl text-md font-bold'>
              Телибаева Акмарал</h1>
        </div>
          <div className="nav-items flex items-center justify-between gap-10 text-md md:text-2xl ">
              <Link 
                to={`/`} 
                className="h-full text-light hover:text-orange-200 hover:border-b-orange-200 hover:border-b-2">
                Home</Link>
              <Link 
                to={`/about`} 
                className="h-full text-light hover:text-orange-200 hover:border-b-orange-200 hover:border-b-2">
                  About</Link>
        </div>

    </div>
  )
}
