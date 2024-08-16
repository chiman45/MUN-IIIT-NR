import React, { useEffect, useRef, useState } from "react";
import Diplomacy from "./Diplomacy/Diplomacy";
import About from "./About/About";
import FAQs from "./FAQs/FAQs";
import ContactUs from "./ContactUs/ContactUs";
import PastEvents from "./Past_Events/Past_Events.jsx";
import Past_Sponsors from "./Past_Sponsors/Past_Sponsors.jsx";
import Navbar from "../../Navbar/Navbar.jsx";
import Home from "./Home/Home.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NeatGradient } from "@firecms/neat";
import './HomePage.css'
import Load from "../../Load_Page/Load.jsx";

AOS.init({ once: true }); // Initialize AOS

export default function App() {
    const [bgColor, setBgColor] = useState("my-canvas-class"); // Default class name
    const canvasRef = useRef(null);
    const gradientRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        gradientRef.current = new NeatGradient({
            ref: canvasRef.current,
            colors: [
              {
                  color: "#3E0064",
                  enabled: true
              },
              {
                  color: "#230137",
                  enabled: true
              },
              {
                  color: "#430164",
                  enabled: true
              },
              {
                  color: "#29013F",
                  enabled: true
              },
              {
                  color: "#5C028C",
                  enabled: true
              }
          ],
          speed: 8,
          horizontalPressure: 2,
          verticalPressure: 5,
          waveFrequencyX: 2,
          waveFrequencyY: 4,
          waveAmplitude: 3,
          shadows: 7,
          highlights: 10,
          colorBrightness: 1,
          colorSaturation: 1,
          wireframe: false,
          colorBlending: 7,
          backgroundColor: "#9500E6",
          backgroundAlpha: 1,
          resolution: 1
        });

        return () => {
            gradientRef.current?.destroy(); // Cleanup
        };
    }, [canvasRef.current]);

    const [loading,setLoading] = React.useState(true);
    React.useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },6000)
    },[loading])

    return (
        <div style={{ position: "relative", height: "100vh" }}>
            {/* <canvas
                className={bgColor}
                style={{
                    position: "fixed", // Keep the canvas fixed
                    top: 0,
                    left: 0,
                    height: "100vh", // Full height of the viewport
                    width: "100vw", // Full width of the viewport
                    zIndex: -1, // Behind other content
                }}
                ref={canvasRef}
            /> */}
            {loading && <Load/>}
            {loading===false && <div className="main" style={{ position: "relative", minHeight: "100vh" }}>
                <Navbar />
                <Home />       
                <Diplomacy />
                <About />
                <PastEvents />
                <Past_Sponsors />
                <FAQs />
                <ContactUs />
            </div>}
        </div>
    );
}
