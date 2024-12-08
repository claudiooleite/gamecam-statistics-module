import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register only necessary components
ChartJS.register(BarElement, CategoryScale, LinearScale);

const RunningDistanceChart = ({ players }) => {
    // Chart data: Player running distances
    const chartData = {
        labels: players.map(() => ''), // Empty labels to clean names
        datasets: [
            {
                data: players.map((player) => player.stats.runningDistance),
                backgroundColor: 'rgba(0, 166, 231, 1)',
                barThickness: 16, // Fixed bar height
            },
        ],
    };

    const options = {
        indexAxis: 'y', // Horizontal bars
        responsive: true,
        scales: {
            x: {
                display: false, // Hide x-axis
            },
            y: {
                display: false, // Hide y-axis
            },
        },
        plugins: {
            legend: { display: false }, // Remove legend
            tooltip: { enabled: false }, // Disable tooltips
            datalabels: { display: false }, // Disable any data labels
        },
        maintainAspectRatio: false, // Allow container to control height/width
    };

    return (
        <div style={{ position: 'relative', width: '216px', maxWidth: '600px' }}>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default RunningDistanceChart;
