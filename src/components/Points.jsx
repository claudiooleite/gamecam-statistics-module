import { useState } from "react";

import '../styles/points.css'

import { FaChevronUp } from "react-icons/fa";

function Points() {
    const [showPoints, setShowPoints] = useState(true)
    const [team1Points, setTeam1Points] = useState(0);
    const [team2Points, setTeam2Points] = useState(0);

    // Toggle show Points component
    const handleShowPoints = () => {
        setShowPoints((prev) => !prev);
    };

    const handleAdd = (setPoints) => setPoints((prev) => prev + 1);

    const handleSubtract = (setPoints) =>
        setPoints((prev) => (prev > 0 ? prev - 1 : 0));

    return (
        <div className="points-card">
            <div className="points-div" >
                <h1 className="points-title">Points</h1>
                <p onClick={handleShowPoints}>
                    <FaChevronUp style={{ fontSize: '20px' }} />
                </p>

            </div>

            {showPoints && (
                <div className="pontuation-div">
                    {/* Team 1 Section */}
                    <div className="score">
                        {/* <h1>Team 1</h1> */}
                        <button className="score-btn" onClick={() => handleSubtract(setTeam1Points)}>-</button>
                        <h1>{team1Points}</h1>
                        <button className="score-btn" onClick={() => handleAdd(setTeam1Points)}>+</button>

                    </div>

                    {/* Team 2 Section */}
                    <div className="score">
                        {/* <h1>Team 2</h1> */}
                        <button className="score-btn" onClick={() => handleSubtract(setTeam2Points)}>-</button>
                        <h1>{team2Points}</h1>
                        <button className="score-btn" onClick={() => handleAdd(setTeam2Points)}>+</button>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Points;
