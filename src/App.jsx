import PaperSearch from './components/searchCars/PaperSearch'
import NavBar from './components/navBar/NavBar'
import CarForms from './components/CarForm/CarForms'
import CarCards from './components/cards/CarCards'
import Footer from './components/footer/Footer'
// import './App.css'

function App() {

  return (
    
    //<BrowserRouter>
      //<Routes>
      <>
        <NavBar/>
        
        <PaperSearch/>
      
        <CarForms/>


        <CarCards/>

        <Footer/>
        </>
      //</Routes>
    //</BrowserRouter>  
    
  )
}

export default App
