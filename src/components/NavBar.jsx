import '../styles/nav.css'
import logo from '../assets/gamecam_logo_white.png'

import { FiMenu } from "react-icons/fi";

const NavBar = () => {
    return (

        <div className="nav-div">
            <img src={logo} className='logo'/>
            <FiMenu className="icon-large" />
        </div>

    )
}

export default NavBar