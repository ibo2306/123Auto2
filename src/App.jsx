import PaperSearch from "./components/searchCars/PaperSearch";
import NavBar from "./components/navBar/NavBar";
import CarForms from "./components/CarForm/CarForms";
import CarCards from "./components/cards/CarCards";
import Footer from "./components/footer/Footer";
import HomePage from "./components/pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./components/pages/SignUpPage";
import SignInPage from "./components/pages/SignInPage";
import NewCarPage from "./components/pages/NewCarPage";
import ChatBotPage from "./components/pages/ChatBotPage";
import AuthPage from "./components/pages/AuthPage";
import ProfilePage from "./components/pages/ProfilePage";


// import './App.css'

function App() {
  return (
    <>
      
      <BrowserRouter>

      <NavBar />

        <Routes>


           <Route path= "/" element={<HomePage/>}/>

           <Route path= "/SignUp" element={<SignUpPage/>}/>

          <Route path= "/SignIn" element={<SignInPage/>}/>

          <Route path= "/NewCar" element={<NewCarPage/>}/>

          <Route path= "/ChatBot" element={<ChatBotPage/>}/>

          <Route path= "/Cars" element={<CarCards/>}/>

          <Route path="/auth" element={<AuthPage />} />

          <Route path="/profile" element={<ProfilePage />} />


          
           {/* <Route path= "/cars" element={<CarsPage/>}/>

           <Route path= "/ChatBot" element={<ChatBotPage/>}/>

           <Route path= "/contact" element={<ContactPage/>}/>

           <Route path= "/dashboard" element={<DashboardPage/>}/>

           <Route path= "/privacyPolicy" element={<PrivacyPolicyPage/>}/>

           <Route path= "/imprint" element={<ImprintPage/>}/> */}

        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
