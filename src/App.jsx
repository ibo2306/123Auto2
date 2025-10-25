import { useState } from 'react'
import PaperSearch from './components/searchCars/PaperSearch'
import NavBar from './components/navBar/NavBar'
import CarForms from './components/CarForm/CarForms'
// import './App.css'

function App() {

  return (
    <>
      <NavBar/>
      
      <PaperSearch/>
      <CarForms/>
      
    </>
  )
}

export default App
