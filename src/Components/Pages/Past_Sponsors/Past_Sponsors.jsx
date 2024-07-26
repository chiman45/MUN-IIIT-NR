import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../../../Assets/sponsors/1.png";
import img2 from "../../../Assets/sponsors/2.png";
import img3 from "../../../Assets/sponsors/3.png";
import img4 from "../../../Assets/sponsors/4.png";
import img5 from "../../../Assets/sponsors/5.png";
import img6 from "../../../Assets/sponsors/6.png";
import img7 from "../../../Assets/sponsors/7.png";
import img8 from "../../../Assets/sponsors/8.png";
import img9 from "../../../Assets/sponsors/9.png";
import img10 from "../../../Assets/sponsors/10.png";
import img11 from "../../../Assets/sponsors/11.png";
import img12 from "../../../Assets/sponsors/12.png";
import img13 from "../../../Assets/sponsors/13.png";
import img14 from "../../../Assets/sponsors/14.png";
import img15 from "../../../Assets/sponsors/15.png";
import img16 from "../../../Assets/sponsors/16.png";
import img17 from "../../../Assets/sponsors/17.png";
import img18 from "../../../Assets/sponsors/18.png";
import img19 from "../../../Assets/sponsors/19.png";
import "./Past_Sponsors.css"
export default function Past_Sponsors(){
    return(
        <div className="sponsors">
        <div className="Past_Sponsors">
            <h1 className="pastsponsor">Past Sponsors</h1>
        </div>
         <div>
         <Marquee speed={100} delay={0} direction={"left"}>
            <div className="image_wrapper_background">
           <div className="image_wrapper">
             <img src={img1} alt="" />
           </div>
           <div className="image_wrapper">
             <img src={img2} alt="" />
           </div>
           <div className="image_wrapper">
             <img src={img3} alt="" />
           </div>
           <div className="image_wrapper">
             <img src={img4} alt="" />
           </div>
           <div className="image_wrapper">
             <img src={img5} alt="" />
           </div>
           <div className="image_wrapper">
             <img src={img6} alt="" />
           </div>
           <div className="image_wrapper">
             <img src={img7} alt="" />
           </div>
           <div className="image_wrapper">
             <img src={img8} alt="" />
           </div>
           <div className="image_wrapper">
             <img src={img9} alt="" />
           </div>
           <div className="image_wrapper">
             <img src={img10} alt="" />
           </div>
           </div>
         </Marquee>
       </div>
       <div>
        <Marquee speed={90} delay={0} direction={"right"}>
        <div className="image_wrapper_background">
          <div className="image_wrapper">
             <img src={img11} alt="" />
           </div>
           <div className="image_wrapper">
             <img src={img12} alt="" />
           </div>
           <div className="image_wrapper">
             <img src={img13} alt="" />
           </div>
           <div className="image_wrapper">
             <img src={img14} alt="" />
           </div>
           <div className="image_wrapper">
             <img src={img15} alt="" />
           </div>
           <div className="image_wrapper">
             <img src={img16} alt="" />
           </div>
           <div className="image_wrapper">
             <img src={img17} alt="" />
           </div>
           <div className="image_wrapper">
             <img src={img18} alt="" />
           </div>
           <div className="image_wrapper">
             <img src={img19} alt="" />
           </div>
           <div className="image_wrapper">
             <img src={img10} alt="" />
           </div>
           </div>
        </Marquee>
      </div>
    
     </div>
    )
}