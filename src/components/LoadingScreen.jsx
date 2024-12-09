import "../styles/loadingscreen.css";
import image from '../assets/gamecam_logo_white.png'

function LoadingScreen() {
    return (
        <div className="loader-main">
            <img src={image} className="image-logo" alt="logo" />
            <div className="loader"></div>
        </div>
    );
}

export default LoadingScreen