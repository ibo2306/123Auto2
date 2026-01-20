import React from 'react'
import PaperSearch from '../searchCars/PaperSearch'
import CarForms from '../CarForm/CarForms'
import CarCards from '../cards/CarCards'

export default function HomePage() {
  return (
    <div>
        <PaperSearch/>

        <CarForms />
    </div>
  )
}
