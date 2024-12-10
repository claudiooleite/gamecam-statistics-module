import { useState } from "react";

import SlamButton from "./SlamButton"
import '../styles/highlights.css'

import { FaChevronUp } from "react-icons/fa";

function Highlights() {
    const [showHighlights, setShowHighlights] = useState(true)

    const toogleShowHighlights = () => setShowHighlights(prev => !prev)

    return (
        <div className='highlights-card'>
            <div className="highlights-icon-div">
                <h3 className="title-highlights">Highlights</h3>
                <p onClick={toogleShowHighlights}>
                    <FaChevronUp style={{ fontSize: '20px' }} />
                </p>
            </div>

            {showHighlights && <SlamButton />}

        </div>
    )
}

export default Highlights;