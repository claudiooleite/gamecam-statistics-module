import "../styles/flexiblecard.css";

const FlexibleCard = ({ title, children, className }) => {
    return (
        <div className={`flexible-card ${className}`}>
            <h3 className="flexible-card-title">{title}</h3>
            <div className="flexible-card-content">{children}</div>
        </div>
    );
};

export default FlexibleCard;
