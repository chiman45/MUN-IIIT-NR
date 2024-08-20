import React from "react"
import TeamHome from "./TeamHome/TeamHome"
import TeamMain from "./TeamMain/TeamMain"
import ContactUs from "../../ContactUs/ContactUs"

export default function TeamPage(){
    return(
        <div className="team-page">
            <TeamMain/>
            <ContactUs/>
        </div>
    )
}