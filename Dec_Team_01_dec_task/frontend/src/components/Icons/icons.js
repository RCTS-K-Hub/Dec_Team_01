import "./icons.css"
import logo1 from '../images/2560px-NASA_Worm_logo_(black) 1.png'
import logo2 from '../images/Astroscale_Main_Logo_RGB 1.png'
import logo3 from '../images/Boeing-Logo-1960-present 1.png'
import logo4 from '../images/SpaceX-Logo 1.png'

const IconsContainer = ()=>(
    <div className="icons-container">
        <img src={logo1} alt="logo" />
        <img src={logo2} alt="logo" />
        <img src={logo3} alt="logo" />
        <img src={logo4} alt="logo" />
    </div>
)

export default IconsContainer