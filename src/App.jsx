import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from "./Components/Main-page/MainPage"
import 'boxicons'
import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import BookPage from './Components/BookPage/BookPage'
function App() {
  const [tracks, setTracks] = useState([])


  return (
    <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/bookpage/:id' element={<BookPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
