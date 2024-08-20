import React from 'react'
import "./MainPage.css"
import { left } from '@popperjs/core'

const MainPage = () => {
  return (
    <div className="past-main">
        <div className="building">
        </div>
        <div className="main-content">
            <div className="head">
                <h5>SHOWCASING</h5>
                <h1>PAST EVENTS</h1>
            </div>
            <div className="content-box">
                <div className="sub-head">MUNC 3.0</div>
                <div className="sub-sub-head">ABOUT</div>
                <div className="about-munc">
                MUN 3.0 was a landmark national-level inter-MUN conference, bringing together over 270 delegates from across India. Featuring five dynamic committees—UNFCCC, UNHRC, AIPPM, Lok Sabha, and UNSC—the event fostered impactful discussions on pressing global and national issues. With meticulous planning and the unwavering dedication of the organizing team, MUN 3.0 set a new benchmark for excellence. The conference not only facilitated rigorous debates and insightful workshops but also created a lasting legacy for future MUN teams at IIIT Naya Raipur.            </div>
            </div>
        </div>
    </div>
  )
}

export default MainPage