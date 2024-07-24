import React from"react"
import PastEventIMG from "../../../images/past_events.png"
import "./Past_Events.css"
export default function PastEvents(){
    return(
        <div className="PastEvents">
            <div className="PastEventscontainer">
            <h1>Past Events</h1>
<div className="image1">
            <img src={PastEventIMG}  className="img1" />
            <button className="button">Know more</button>
            </div>
            </div>
        </div>
    )
}