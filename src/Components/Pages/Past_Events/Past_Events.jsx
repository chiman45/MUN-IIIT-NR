import React from"react"
import PastEventIMG from "../../../images/past_events.png"
import "./Past_Events.css"
export default function PastEvents(){
    return(
        <div className="PastEvents">
            <div className="PastEventscontainer">
            <h1 data-aos="fade-up"  data-aos-duration="3000">Past Events</h1>
<div className="image1">
            <img src={PastEventIMG} className="img1" data-aos="fade-up"  data-aos-duration="3000"/ >
            <button className="button" data-aos="fade-up"  data-aos-delay="600" data-aos-duration="3000">Know more</button>
                </div>
            
            </div>
            
        </div>
    )
}