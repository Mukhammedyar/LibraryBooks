import React from 'react'
import pushkin from '../../assets/pushkin.jpg'
import './header.css'

export default function Header() {
  return (
      <header className='header grid px-10 md:px-24 h-[70vh] md:h-[90vh] bg-white gap-10'>
          <div className="left-side grid row-start-1 col-start-1 md:w-[350px] md:row-start-1 md:col-start-1 md:items-center content-center">
              <img src={pushkin} alt="" className='w-[200px] md:w-[400px] md:h-[400px] rounded-full h-[250px] object-cover mx-auto md:mx-0'/>
          </div>
          <div className="grid row-start-2 col-start-1 md:col-start-2 md:row-start-1 content-center self-center text-center md:text-start">
              <p className="text-4xl font-serif">А.С.Пушкин</p>
              <p className='text-sm md:text-2xl flex flex-col'>
                <span>Вот здесь лежит большой студент; </span>
                <span>Его судьба неумолима.</span>
                <span>Несите прочь медикамент:</span>
                <span>Олезнь любви неизлечима!</span>
              </p>
          </div>
      </header>
  )
}

// sm1: row - start - 2 col - start - 1
// sm2: row-start-1 col-start-1

// md1 row - start - 1 col - start - 1
// md2: row-start-1 col-start-2
