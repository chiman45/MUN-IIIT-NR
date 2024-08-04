import React from "react"
import Diplomacy from "./Components/Pages/Diplomacy/Diplomacy"
import About from "./Components/Pages/About/About"
import FAQs from "./Components/Pages/FAQs/FAQs"
import ContactUs from "./Components/Pages/ContactUs/ContactUs"
import PastEvents from "./Components/Pages/Past_Events/Past_Events.jsx"
import Past_Sponsors from "./Components/Pages/Past_Sponsors/Past_Sponsors.jsx"
import Navbar from "./Components/Navbar/Navbar.jsx"
import Home from "./Components/Pages/Home/Home.jsx"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({once:true});
//Import Components

export default function App() {
  particlesJS.load('particles-js', 'assets/particles.json');
  return (
    <div className="main">
      <Navbar />
      <Home/>
      <Diplomacy />
      <About />
      <PastEvents />
      <Past_Sponsors />
      <FAQs />
      <ContactUs />
    </div>
  )
}