import "./community.css"
import communityicon from '../images/physics.png'
import communityicon1 from '../images/clipboard.png'
import communityicon2 from '../images/chart-pie.png'
import communityicon3 from '../images/space_exploration.png'

const Community = ()=>(
    <div className="community-container">
        <div className="community-top-container">
            <h1>Join our vibrant community of space enthusiasts where you can</h1>
        </div>
        <div className="community-bottom-container">
            <div className="community-card">
                <div className="community-icon-container">
                <img className="community-icon" src={communityicon} alt="community-icon" />
                </div>
                <h1 className="community-name">Astronomy 101</h1>
                <p className="community-description">Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe.</p>
            </div>
            <div className="community-card">
                <div className="community-icon-container">
                <img className="community-icon" src={communityicon1} alt="community-icon" />
                </div>
                <h1 className="community-name">Latest Discoveries</h1>
                <p className="community-description">Stay up-to-date with the most recent breakthroughs and discoveries in the field of astrophysics and space exploration.</p>
            </div>
            <div className="community-card">
                <div className="community-icon-container">
                <img className="community-icon" src={communityicon3} alt="community-icon" />
                </div>
                <h1 className="community-name">Space Exploration</h1>
                <p className="community-description">Explore the latest missions, both past and present, from NASA, ESA, SpaceX, and other space agencies and organizations.</p>
            </div>
            <div className="community-card">
                <div className="community-icon-container">
                <img className="community-icon" src={communityicon2} alt="community-icon" />
                </div>
                <h1 className="community-name">Space Technology</h1>
                <p className="community-description">Delve into the cutting-edge technology powering space exploration, from spacecraft and telescopes to propulsion systems and space habitats.</p>
            </div>
        </div>
    </div>
)

export default Community