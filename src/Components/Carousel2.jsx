import React from 'react'
import Marquee from "react-fast-marquee";

import img10 from "../Assets/sponsors/10.png";
import img11 from "../Assets/sponsors/11.png";
import img12 from "../Assets/sponsors/12.png";
import img13 from "../Assets/sponsors/13.png";
import img14 from "../Assets/sponsors/14.png";
import img15 from "../Assets/sponsors/15.png";
import img16 from "../Assets/sponsors/16.png";
import img17 from "../Assets/sponsors/17.png";
import img18 from "../Assets/sponsors/18.png";
import img19 from "../Assets/sponsors/19.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({once: true}); 

const Carousel2 = () => {
  return (
    <div className="relay" data-aos="zoom-in" data-aos-delay="800">
    <div>
   <Marquee speed={90} delay={0} direction={"right"} autoFill={true}>
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
   </Marquee>
   </div>
   </div>
  )
}

export default Carousel2