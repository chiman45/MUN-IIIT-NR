import React from "react";
import './Home.css';
import Logo from "../../../../Assets/Parallax/MUN.gif";
import Earth from "../../../../Assets/Parallax/Earth.png";
import Flag_Left from "../../../../Assets/Parallax/Flag_left.png";
import Flag_Right from "../../../../Assets/Parallax/Flag_right.png";
import { Zoom } from "react-awesome-reveal";
import AOS from 'aos';
import 'aos/dist/aos.css';
import $ from 'jquery';

AOS.init({ once: true });

export default function Home() {
    React.useEffect(() => {
        setTimeout(()=>{
            const handleScroll = () => {
                const scrollTop = $(window).scrollTop();
    
                // Apply zoom-out effect to earth
                const earthScale = Math.max(1, 1 + scrollTop / 1500); // Adjust zoom factor
                $("#earth img").css({
                    transform: `scale(${earthScale})`,
                    transition: 'transform 0.3s ease-out'
                });
    
                // Apply parallax effect to buildings
                const buildingsOffset = scrollTop * 0.2; // Adjust the speed of movement
                $(".buildings").css({
                    transform: `translateY(${buildingsOffset}px)`,
                    transition: 'transform 0.3s ease-out'
                });
    
                // Apply parallax effect to MUN_gif (optional, for additional depth)
                const munGifOffset = scrollTop * 0.1; // Adjust the speed of movement
                $(".MUN_gif").css({
                    transform: `translateY(${munGifOffset}px)`,
                    transition: 'transform 0.3s ease-out'
                });
    
                // Apply parallax effect to flags
                const flagsOffset = scrollTop * 0.5; // Adjust the speed of movement
                $(".flag1").css({
                    transform: `translateX(-${flagsOffset}px)`,
                    transition: 'transform 0.3s ease-out'
                });
                $(".flag2").css({
                    transform: `translateX(${flagsOffset}px)`,
                    transition: 'transform 0.3s ease-out'
                });
            };
    
            $(window).on('scroll', handleScroll);
            handleScroll(); // Initial call to set up the parallax
    
            return () => {
                $(window).off('scroll', handleScroll);
            };
        },1750)
    }, []);

    return (
        <div className="home">
            <div className="home-text" data-aos="fade-up" data-aos-duration="2000"  data-aos-delay="800">
                <h6>WELCOME TO</h6>
                <h2>MODEL UNITED NATIONS</h2>
                <h6>IIIT NAYA RAIPUR, CHATTISHGARH</h6>
            </div>
            <div className="buildings" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="400"
     data-aos-offset="0"></div>
            <div className="MUN_gif" data-aos="fade-up">
                <Zoom 
                    duration={500} 
                    delay={500}
                    zoom={0.5} // Starts zoomed out
                >
                    <img src={Logo} alt="MUN Logo" />
                </Zoom>
            </div>
            <div className="earth" id="earth">
                <div className="earth-img">
                <img src={Earth} alt="Earth"  data-aos="fade-up" data-aos-duration="2000"  data-aos-delay="800"/>
                </div>
                <div className="flags">
                    <div className="flag1">
                        <img src={Flag_Left} alt="Flag Left" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-delay="1700"/>
                    </div>
                    <div className="flag2">
                        <img src={Flag_Right} alt="Flag Right" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-delay="1700"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
