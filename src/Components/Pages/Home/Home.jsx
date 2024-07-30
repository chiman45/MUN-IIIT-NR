import React from "react";
import './Home.css';
import Logo from "../../../Assets/Parallax/MUN.gif";
import Earth from "../../../Assets/Parallax/Earth.png";
import { Zoom } from "react-awesome-reveal";
import AOS from 'aos';
import 'aos/dist/aos.css';
import $ from 'jquery';

// Initialize AOS
AOS.init({ once: true });

export default function Home() {
    React.useEffect(() => {
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
        };

        $(window).on('scroll', handleScroll);
        handleScroll(); // Initial call to set up the parallax

        return () => {
            $(window).off('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="home">
            <div className="home-text">
                <h6>WELCOME TO</h6>
                <h2>MODEL UNITED NATIONS</h2>
                <h6>IIIT NAYA RAIPUR, CHATTISHGARH</h6>
            </div>
            <div className="buildings"></div>
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
                <img src={Earth} alt="Earth" />
            </div>
        </div>
    );
}
