import React from 'react'
import pushkin from '../../assets/pushkin.jpg'
import './header.css'

export default function Header() {
  return (
      <header className='w-full header h-[70vh] md:h-[90vh] text-white'>
        <div className='grid h-full pt-7 md:pt-0 transition-all transition-2 b-header px-10 md:px-24 gap-1 md:gap-10 justify-center'>
          <div className="left-side grid row-start-1 col-start-1 md:w-[450px] md:row-start-1 md:col-start-1 md:items-center justify-center">
            <img src={pushkin} alt="" className='w-[320px] md:w-[380px] md:h-[380px] rounded-full h-[320px] object-cover mx-auto md:mx-0'/>
          </div>
          <div className="grid row-start-2 texts col-start-1 md:col-start-2 md:row-start-1 content-center md:self-center text-center md:text-start">
              <p className="text-4xl md:text-5xl font-sans font-bold my-3">А.С.Пушкин</p>
              <p className='text-md md:text-3xl flex flex-col'>
                <span>Вот здесь лежит большой студент; </span>
                <span>Его судьба неумолима.</span>
                <span>Несите прочь медикамент:</span>
                <span>Олезнь любви неизлечима!</span>
              </p>
          </div>
        </div>
      </header>
  )
}

// sm1: row - start - 2 col - start - 1
// sm2: row-start-1 col-start-1

// md1 row - start - 1 col - start - 1
// md2: row-start-1 col-start-2
