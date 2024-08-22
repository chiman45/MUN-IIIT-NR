import React from "react"
import TeamHome from "./TeamHome/TeamHome"
import TeamMain from "./TeamMain/TeamMain"
import ContactUs from "../../ContactUs/ContactUs"
import Navbar2 from "../../../Components/Navbar2/Navbar2"
import './TeamPage.css'

export default function TeamPage(){
    return(
        <div className="team-page">
              <Navbar2/>
            <TeamMain/>
            <ContactUs/>
        </div>
    )
}