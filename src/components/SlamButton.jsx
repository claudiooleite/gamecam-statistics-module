import { useState } from "react";
import "../styles/slambutton.css";

// Add endpoint when provided
const SlamButton = ({ apiEndpoint = null }) => {
    const [isSaving, setIsSaving] = useState(false);
    const [highlightsFrames, setHighlightsFrames] = useState({});

    // const handleSave = async () => {
    //     setIsSaving(true);
    //     const currentDate = new Date();
    //     const timestamp = currentDate.toISOString();

    //     try {
    //         // Send data to the server
    //         const response = await fetch(apiEndpoint, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({ timestamp }),
    //         });

    //         if (!response.ok) {
    //             throw new Error("Failed to save highlight");
    //         }

    //         // Update the local state after successful save
    //         setHighlightsFrames((prev) => ({
    //             ...prev,
    //             [timestamp]: currentDate,
    //         }));
    //     } catch (error) {
    //         console.error("Error saving highlight:", error);
    //         alert("Failed to save highlight. Please try again.");
    //     } finally {
    //         setIsSaving(false);
    //     }
    // };


    const handleSave = () => {
        setIsSaving(true);

        const currentDate = new Date();
        const timestamp = currentDate.toISOString();

        // Simulate saving locally
        setHighlightsFrames((prev) => ({
            ...prev,
            [timestamp]: currentDate,
        }));

        // Simulate a delay to mimic saving behavior
        setTimeout(() => setIsSaving(false), 500);
    };


    const renderedHighlights = Object.entries(highlightsFrames).map(([key, value]) => {
        const dateObj = new Date(value);
        const formattedDate = dateObj.toISOString().split("T")[0]; // Extract date in YYYY-MM-DD format
        const formattedTime = dateObj.toTimeString().slice(0, 5); // Extract time in HH:MM format

        return (
            <div key={key} className="highlight-item">
                <h3>Valhall</h3>
                <p>
                    <span className="highlight-date">{formattedDate}</span>{' '}
                    <span className="highlight-time">{formattedTime}</span>
                </p>
            </div>
        );
    });
    return (
        <>
            <button
                className="slam-button"
                onClick={handleSave}
                disabled={isSaving} // Disable the button while saving
            >
                {isSaving ? "SAVING..." : "SAVE"}
            </button>
            <h2 className="text-save-highlight">Save a 30s highlight</h2>
            <div className="gradient-line"></div>

            {renderedHighlights}


        </>
    );
}

export default SlamButton;
