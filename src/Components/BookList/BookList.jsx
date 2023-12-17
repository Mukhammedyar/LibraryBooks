import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../../dataBase'
import './bookList.css'

export default function BookList() {
  return (
    <div className='my-10 px-10 md:px-20 font-sans'>
          <div className="book-list flex flex-wrap gap-5 items-center justify-center">
            {data.map(d => 
                <Link 
                    key={d.id}
                    className='min-h-[200px] w-[350px] flex flex-col bg-orange-800 text-white items-center justify-center gap-3 p-3 py-5 transition-5 transition-all md:hover:-translate-y-5 rounded-lg'
                >
                <div className="w-[150px] flex flex-col items-center ">
                  <img src={d.src} alt="" className='w-[100px] md:w-[150px] h-[100px] md:h-[150px] rounded-full object-cover transition-all transition-2 hover:scale-105 ' />
                  <p className='text-2xl'>{d.name}</p>  
                </div>
                <div className='flex flex-wrap books items-center'> <span className='px-2'> Книги: </span>
                  {d.books.map(b => 
                    <Link to={`/bookpage/${b.bookid}`} className='bg-orange-500 hover:bg-orange-400 p-1 px-2 m-1 rounded-lg'>{b.name}</Link>
                    )}
                </div>
                </Link>     
            )
            }
          </div>    
    </div>
  )
}
