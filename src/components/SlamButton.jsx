import { useState } from "react";
import "../styles/slambutton.css";

const SlamButton = ({ apiEndpoint = null, highlightsFrames, setHighlightsFrames }) => {
    const [isSaving, setIsSaving] = useState(false);
    const [sentMessages, setSentMessages] = useState([]); // State to store simulated backend messages

    const handleSave = () => {
        setIsSaving(true);

        const currentDate = new Date();
        const timestamp = currentDate.toISOString();

        // Simulate saving locally
        setHighlightsFrames((prev) => ({
            ...prev,
            [timestamp]: currentDate,
        }));

        // Simulate sending to backend
        setSentMessages((prev) => [
            ...prev,
            `Sending timestamp: ${timestamp} to ${apiEndpoint || "backend (mocked)"}`,
        ]);

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
                    <span className="highlight-date">{formattedDate}</span>{" "}
                    <span className="highlight-time">{formattedTime}</span>
                </p>
            </div>
        );
    });

    const renderedMessages = sentMessages.map((message, index) => (
        <div key={index} className="sent-message">
            <p>{message}</p>
        </div>
    ));

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

            <h3 className="sent-messages-title">Backend Messages</h3>
            <div className="sent-messages">{renderedMessages}</div>
        </>
    );
};

export default SlamButton;
