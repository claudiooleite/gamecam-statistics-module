import "../../styles/ChartCard.css";

const ChartCard = ({ title, children }) => {
    return (
        <div className="chart-card">
            <h3 className="chart-card-title">{title}</h3>
            <div className="chart-card-content">
                {children}
            </div>
        </div>
    );
};

export default ChartCard;
