import PaperSearch from "./components/searchCars/PaperSearch";
import NavBar from "./components/navBar/NavBar";
import CarForms from "./components/CarForm/CarForms";
import CarCards from "./components/cards/CarCards";
import Footer from "./components/footer/Footer";
import HomePage from "./components/pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./components/pages/SignUpPage";
// import './App.css'

function App() {
  return (
    <div 
    style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar />

      <BrowserRouter>
        <Routes>

           <Route path= "/" element={<HomePage/>}/>

           <Route path= "/SignUp" element={<SignUpPage/>}/>

           {/* <Route path= "/cars" element={<CarsPage/>}/>

           <Route path= "/contact" element={<ContactPage/>}/>

           <Route path= "/dashboard" element={<DashboardPage/>}/>

           

           <Route path= "/SignIn" element={<SignInPage/>}/>

           <Route path= "/privacyPolicy" element={<PrivacyPolicyPage/>}/>

           <Route path= "/imprint" element={<ImprintPage/>}/> */}

        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
