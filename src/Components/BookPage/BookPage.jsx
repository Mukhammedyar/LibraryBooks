import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../dataBase';

export default function BookPage() {
  const param = useParams()
  console.log(param.id);
  const [item, setItem] = useState([])

  const book=data.filter(f => f.id == param.id)
  const ddd = book[0].books.filter(b => b.bookid == param.id)
  
  console.log(ddd[0]);
  
 

  return (
    <div className='flex px-24 my-10 h-[100vh] basis-[50%] font-sans gap-10'>
      <div className="left ">
        <img src={ddd[0].src} alt="" className='w-[250px] h-[350px] bg-white object-cover shadow-lg rounded-lg border-[1px] border-orange-400 p-1'/>
      </div>
      <div className="right basis-[50%]">
        <p className="text-4xl font-bold">{ddd[0].name}</p>
        <p className="text-md text-gray-600">{ddd[0].date} года</p>
        <p className="text-md text-gray-600">Автор: {ddd[0].avtor}</p>
        <p className="text-md">Набор: {ddd[0].tom} том</p>
        <p className="text-3xl mt-5 mb-2">Сюжет</p>
        <p className='h-[300px] overflow-y-scroll'>{ddd[0].syujet}</p>
      </div>
    </div>
  )
}


// sm1: row - start - 2 col - start - 1
// sm2: row-start-1 col-start-1

// md1 row - start - 1 col - start - 1
// md2: row-start-1 col-start-2

