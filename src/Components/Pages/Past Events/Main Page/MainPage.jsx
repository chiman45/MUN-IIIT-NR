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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            </div>
        </div>
    </div>
  )
}

export default MainPage