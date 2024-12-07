import logo from '../assets/gamecam_logo_white.png'
import '../styles/footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <img src={logo} alt="GameCam Logo" className="footer-logo" />
            <p className="footer-tagline">Revolutionize Your Game with GameCam Technology</p>
            <ul className="footer-link-list">
                <li className="footer-link-item">Login</li>
                <li className="footer-link-item">Contact Us</li>
                <li className="footer-link-item">Visit GameCam.se</li>
            </ul>
            <p className="footer-copy-text">GameCam &copy; 2024</p>
        </div>
    )
}

export default Footer