import React from "react"
import './CommitteeContainer.css'

export default function CommitteeContainer(props){
    return(
        <div className="committee-container">
            <div className="committee-img"></div>
            <div className="committee-name">{props.name}</div>
        </div>
    )
}