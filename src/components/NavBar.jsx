import '../styles/nav.css'

import { FiMenu } from "react-icons/fi";

const NavBar = () => {
    return (

        <div className="nav-div">
            <h1 className="logo">GameCam</h1>
            <FiMenu className="icon-large" />
        </div>

    )
}

export default NavBar