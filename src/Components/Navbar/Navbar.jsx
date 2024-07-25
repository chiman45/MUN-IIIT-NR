import munlogo from "../../images/mun_logo.png"
import "./navbar.css"


export default function Navbar(){

    return (
        <>
        <ul className="Navbar_list">
            <li className="mun_logo"><img src={munlogo}></img></li>
            <li>
            <ul className="nested_list">
            <li className="navbar_items">ABOUT US</li>
            <li className="navbar_items">PAST EVENT</li>
            <li className="navbar_items">TEAM</li>
            <li className="navbar_items">FAQs</li>
            </ul>
            </li>
            <li className="contact_us">CONTACT US</li>
            
        </ul>
        </>
    )
}