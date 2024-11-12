// import './App.css';
import { NavLink, Route, Routes } from "react-router-dom";

import HeaderComponent from "./Header";
import Home from "./Home";
import AboutUs from "./AboutsUs";
import Projects from "./Projects";
import Faqs from "./Faqs";
import ContactUsComp from "./ContactComp";
import GetStarted from "./GetStarted";
import Login from "./Login";
// import ContactUs from "./NavButton";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
        <Route path="/Faqs" element={<Faqs />}></Route>
        <Route path="/ContactComp" element={<ContactUsComp />}></Route>
        <Route path="/GetStarted" element={<GetStarted />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
