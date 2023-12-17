import React, { useContext, useEffect, useState } from 'react'
import BookList from '../BookList/BookList'
import Header from '../Header/Header'


export default function MainPage() {
  

  return (
    <div className=''>
      <Header/>
      <BookList />
    </div>
  )
}
