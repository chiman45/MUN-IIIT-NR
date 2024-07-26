import React from 'react'
import Marquee from "react-fast-marquee";

import img1 from "../Assets/sponsors/1.png";
import img2 from "../Assets/sponsors/2.png";
import img3 from "../Assets/sponsors/3.png";
import img4 from "../Assets/sponsors/4.png";
import img5 from "../Assets/sponsors/5.png";
import img6 from "../Assets/sponsors/6.png";
import img7 from "../Assets/sponsors/7.png";
import img8 from "../Assets/sponsors/8.png";
import img9 from "../Assets/sponsors/9.png";
import img10 from "../Assets/sponsors/10.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({once: true}); 

const Carousel1 = () => {
  return (
    <div className="relay" data-aos="zoom-in" data-aos-delay="800">
    <div>
   <Marquee speed={100} delay={0} direction={"left"} autoFill={true}>
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
   </Marquee>
   </div>
   </div>
  )
}

export default Carousel1