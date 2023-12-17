import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../dataBase';

export default function BookPage() {
  const param = useParams()
  console.log(param.id);
  const [item, setItem] = useState([])

  const book = data.filter(f => f.id == param.id)
  const ddd = book[0].books.filter(b => b.bookid == param.id)
  
  console.log(ddd[0]);
  
 

  return (
    <div className='flex px-24 my-10 h-[100vh]  font-sans gap-3 md:gap-10'>
      <div className="left basis-[50%] flex justify-center">
        <img src={ddd[0].src} alt="" className='w-[250px] md:w-[450px] h-[350px] md:h-[500px] bg-white object-cover shadow-lg rounded-lg border-[1px] border-orange-400 p-1'/>
      </div>
      <div className="right basis-[50%]">
        <p className="text-2xl md:text-4xl font-bold">{ddd[0].name}</p>
        <p className="text-sm md:text-md text-gray-600">{ddd[0].date} года</p>
        <p className="text-sm md:text-md text-gray-600">Автор: {ddd[0].avtor}</p>
        <p className="text-sm md:text-md">Набор: {ddd[0].tom} том</p>
        <p className="text-lg md:text-3xl mt-5 mb-2">Сюжет</p>
        <p className='h-[300px] text-sm md:text-lg overflow-y-scroll'>{ddd[0].syujet}</p>
      </div>
    </div>
  )
}


