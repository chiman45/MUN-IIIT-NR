import React from "react"
import './CommitteeContainer.css'

export default function CommitteeContainer(props){
    return(
        <div className="committee-container">
            <div className="committee-img"><img src={props.img} alt="" /></div>
            <div className="committee-name">{props.name}</div>
        </div>
    )
}