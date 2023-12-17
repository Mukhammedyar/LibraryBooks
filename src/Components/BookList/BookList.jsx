import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../../dataBase'
import './bookList.css'

export default function BookList() {
  return (
    <div className='my-10 px-24 font-sans'>
          <div className="book-list flex flex-wrap gap-5 items-center justify-center">
            {data.map(d => 
                <div 
                    key={d.id}
                    className='min-h-[200px] w-[300px] flex flex-col bg-orange-800 text-white items-center justify-center gap-3 p-2'
                >
                <div className="w-[150px] flex flex-col items-center ">
                  <img src={d.src} alt="" className='w-[70px] md:w-[100px] h-[100px] md:h-[100px] rounded-full object-cover' />
                  <p>{d.name}</p>  
                </div>
                <div className='flex flex-wrap books'> <span className='px-2'> Книги: </span>
                  {d.books.map(b => 
                    <Link to={`/bookpage/${b.id}`} className='bg-orange-500 p-1 px-2 m-1 rounded-lg'>{b.name}</Link>
                    )}
                </div>
                </div>     
            )
            }
          </div>    
    </div>
  )
}
