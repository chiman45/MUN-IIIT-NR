import React from 'react'
import "./AboutGallery.css"


const AboutGallery = (props) => {
  return (
    <div className="About-Gal">
        <div className="main-content">
            <div className="content-box">
                <div className="sub-head">{props.head1}</div>
                <div className="sub-sub-head">ABOUT</div>
                <div className="about-munc">
                {props.text}
            </div>
            </div>
        </div>
    </div>
  )
}

export default AboutGallery