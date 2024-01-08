import {Component} from "react"
import "./index.css"

class Navbar extends Component{
    render(){
        return(
            <div className="navbar">
                <div className="logo-container">
                    <img src="odyssey.png" alt="logo" />
                </div>
                <div className="desktop-links-container">
                    <p>Stay Connected</p>
                    <p>Education</p>
                    <p>Community</p>
                    <p>About Us</p>
                    <button className="signin-button">Sign In</button>
                </div>
                <div className="mobile-links-container">
                    <img src="widgets.png" alt="widget" />
                </div>
            </div>
        )
    }
}

export default Navbar