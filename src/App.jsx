import { useState } from 'react'
import PaperSearch from './components/searchCars/PaperSearch'
import NavBar from './components/navBar/NavBar'
import CarForms from '.components/CarForm/CarForms'
// import './App.css'

function App() {

  return (
    <>
      <div className='navbar'><NavBar/></div>
      <div></div>
      <div><PaperSearch/></div>
      <div><CarForms/></div>
      <div></div>
    </>
  )
}

export default App
