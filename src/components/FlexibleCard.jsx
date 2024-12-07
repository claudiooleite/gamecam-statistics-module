import "../styles/flexiblecard.css";

const FlexibleCard = ({ title, children }) => {
    return (
        <div className="flexible-card">
            <h3 className="flexible-card-title">{title}</h3>
            <div className="flexible-card-content">{children}</div>
        </div>
    );
};

export default FlexibleCard;
