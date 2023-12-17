import React, { useContext, useEffect, useState } from 'react'
import BookList from '../BookList/BookList'
import Header from '../Header/Header'


export default function MainPage() {


  return (
    <div className='flex flex-col items-center'>
      <Header />
      <BookList />
    </div>
  )
}
