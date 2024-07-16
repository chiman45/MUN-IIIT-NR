import React from "react"
import Home from "./Components/Pages/Home"
import Diplomacy from "./Components/Pages/Diplomacy/Diplomacy"
import About from "./Components/Pages/About/About"

//Import Components

export default function App(){
     return(
      <div className="main">
        <Diplomacy/>
        <About/>
      </div>
     )
}