import React from"react"
import PastEventIMG from "../../../../images/past_events.png"
import "./Past_Events.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Link } from 'react-router-dom';
AOS.init({once: true}); 
export default function PastEvents(){
    return(
        <div className="PastEvents">
            <div className="PastEventscontainer">
            <h1 data-aos="fade-up"  data-aos-duration="3000">Past Events</h1>
            <div className="image1">
            <img src={PastEventIMG} className="img1" data-aos="fade-up"  />
            <div className="overlay">
                <Link to="/past-events">
                <button className="button">Know more</button>
                </Link>
                </div>
            
                </div>
            </div>            
        </div>
    )
}