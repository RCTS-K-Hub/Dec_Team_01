import "./index.css"

const TopBody=()=>(
    <>
    <div className="top-body">
        <div className="top-container">
            <h1 className="unveiling-heading">Unveiling the Wonders of the Universe</h1>
        </div>
        <div className="overlap-container">
            <img className="lost-in-space" src="lost-in-space-3d-cute-girl-in-astronaut-costume-transparent-background-free-png 1.png" alt="lost-in-space" />
            <img className="space-walk-graphs" src="space-walk-graphs.png" alt="space-walk-graphs" />
            <img src="exercising.png" className="exercising" alt="exercising" />
            <img src="timebar.png" alt="timebar" className="timebar" />
        </div>
        <div className="bottom-container">
            <p>At odissey, our mission is to inspire, educate, and ignite your passion for the cosmos. We are your premier destination for all things related to space exploration, astronomy, and the mysteries of the universe. Whether you're a seasoned astronomer or a curious novice, join us on a journey to the furthest reaches of the cosmos. </p>
            <div className="buttons-container">
            <button className="signin-button get-started">Get Started</button>
            <button className="watch-the-video-button">
                Watch the Video
                <img src="video-icon.png" alt="video-icon" className="video-icon" />
            </button>
            </div>
        </div>
    </div>
    
    </>
) 

export default TopBody