import "./universe.css"
import logo6 from '../images/lost-in-space-3d-cute-girl-in-astronaut-costume-transparent-background-free-png 1.png'
import logo7 from '../images/space-walk-graphs.png'
import logo8 from '../images/exercising.png'
import logo9 from '../images/timebar.png'
import logo10 from '../images/video-icon.png'

const TopBody=()=>(
    <>
    <div className="top-body">
        <div className="top-container">
            <h1 className="unveiling-heading">Unveiling the Wonders of the Universe</h1>
        </div>
        <div className="overlap-container">
            <img className="lost-in-space" src={logo6} alt="lost-in-space" />
            <img className="space-walk-graphs" src={logo7} alt="space-walk-graphs" />
            <img src={logo8} className="exercising" alt="exercising" />
            <img src={logo9} alt="timebar" className="timebar" />
        </div>
        <div className="bottom-container">
            <p>At odissey, our mission is to inspire, educate, and ignite your passion for the cosmos. We are your premier destination for all things related to space exploration, astronomy, and the mysteries of the universe. Whether you're a seasoned astronomer or a curious novice, join us on a journey to the furthest reaches of the cosmos. </p>
            <div className="buttons-container">
            <button className="signin-button get-started">Get Started</button>
            <button className="watch-the-video-button">
                Watch the Video
                <img src={logo10} alt="video-icon" className="video-icon" />
            </button>
            </div>
        </div>
    </div>
    
    </>
) 

export default TopBody