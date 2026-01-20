import PaperSearch from "./components/searchCars/PaperSearch";
import NavBar from "./components/navBar/NavBar";
import CarForms from "./components/CarForm/CarForms";
import CarCards from "./components/cards/CarCards";
import Footer from "./components/footer/Footer";
import HomePage from "./components/pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewCarPage from "./components/pages/NewCarPage";
import ChatBotPage from "./components/pages/ChatBotPage";
import AuthPage from "./components/pages/AuthPage";
import ProfilePage from "./components/pages/ProfilePage";
import CarDetailPage from "./components/pages/CarDetailPage";
import FavoritesPage from "./components/pages/FavoritesPage";
import KontaktPage from "./components/pages/KontaktPage";
import ImpressumPage from "./components/pages/ImpressumPage";
import DatenschutzPage from "./components/pages/DatenschutzPage";
import { AuthProvider } from "./context/AuthContext";


// import './App.css'

function App() {
  return (
    <>

      <BrowserRouter>
        <AuthProvider>

        <NavBar />

          <Routes>


             <Route path= "/" element={<HomePage/>}/>

            <Route path= "/NewCar" element={<NewCarPage/>}/>

            <Route path= "/ChatBot" element={<ChatBotPage/>}/>

            <Route path= "/Cars" element={<CarCards/>}/>

            <Route path="/car/:id" element={<CarDetailPage />} />

            <Route path="/favorites" element={<FavoritesPage />} />

            <Route path="/auth" element={<AuthPage />} />

            <Route path="/profile" element={<ProfilePage />} />

            <Route path="/kontakt" element={<KontaktPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/datenschutz" element={<DatenschutzPage />} />

          </Routes>
        </AuthProvider>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
