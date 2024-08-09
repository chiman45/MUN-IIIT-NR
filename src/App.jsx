import React, { useEffect, useRef, useState } from "react";
import Diplomacy from "./Components/Pages/Diplomacy/Diplomacy";
import About from "./Components/Pages/About/About";
import FAQs from "./Components/Pages/FAQs/FAQs";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import PastEvents from "./Components/Pages/Past_Events/Past_Events.jsx";
import Past_Sponsors from "./Components/Pages/Past_Sponsors/Past_Sponsors.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Pages/Home/Home.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NeatGradient } from "@firecms/neat";

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

    return (
        <div style={{ position: "relative", height: "100vh" }}>
            <canvas
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
            />
            <div className="main" style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}>
                <Navbar />
                <Home />
                <Diplomacy />
                <About />
                <PastEvents />
                <Past_Sponsors />
                <FAQs />
                <ContactUs />
            </div>
        </div>
    );
}
