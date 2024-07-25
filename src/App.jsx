import React from "react"
import Home from "./Components/Pages/Home"
import Diplomacy from "./Components/Pages/Diplomacy/Diplomacy"
import About from "./Components/Pages/About/About"
import FAQs from "./Components/Pages/FAQs/FAQs"
import ContactUs from "./Components/Pages/ContactUs/ContactUs"
import PastEvents from "./Components/Pages/Past_Events/Past_Events.jsx"
import Navbar from "./Components/Navbar/Navbar.jsx"
//Import Components

export default function App() {
  return (
    <div className="main">
      
      <Diplomacy />
      <About />
      <PastEvents />
      <FAQs />
      <ContactUs />
      
    </div>
  )
}