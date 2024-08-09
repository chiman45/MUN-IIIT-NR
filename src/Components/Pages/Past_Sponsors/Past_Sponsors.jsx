import React from "react";
import Carousel1 from "../../Carousel1";
// import Carousel2 from "../../Carousel2";
import "./Past_Sponsors.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({once: true}); 
export default function Past_Sponsors(){
    return(
        <div className="sponsors">
        <div className="Past_Sponsors" data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="3500">
            <h1 className="pastsponsor">Past Sponsors</h1>
        </div>
        <div className="marquee">
          <Carousel1/>
          {/* <Carousel2/> */}
      </div>
     </div>
    )
}