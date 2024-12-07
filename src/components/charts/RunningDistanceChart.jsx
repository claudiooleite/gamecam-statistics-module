import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register necessary components and plugins
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, ChartDataLabels);

const RunningDistanceChart = ({ players }) => {
    const labels = players.map((player) => player.name);

    // Chart data with player colors
    const chartData = {
        labels,
        datasets: [
            {
                data: players.map((player) => player.stats.runningDistance),
                backgroundColor: 'rgba(0, 166, 231, 1)',
            },
        ],
    };

    const options = {
        indexAxis: 'y', // Makes the bars horizontal
        responsive: true,
        plugins: {
            legend: { display: false },
            datalabels: {
                anchor: 'end', // Anchors the label to the end of the bar
                align: 'end',  // Aligns the text to the end (right) of the chart
                formatter: (value) => `${value}m`, // Show distance with km
                color: 'rgba(255, 255, 255, 1)', // Text color
                font: {
                    weight: 'bold',
                },
                offset: 10, // Moves the label outside the bar to the right
            },
        },
        scales: {
            x: {
                // Configuration for the x-axis (horizontal axis)
                beginAtZero: true,
                ticks: {
                    display: false, // Hide the ticks (0, 5, etc.) on the x-axis
                },
            },
            y: {
                // Configuration for the y-axis (vertical axis)
                ticks: {
                    color: (context) => {
                        // Apply player-specific color to y-axis labels
                        return players[context.index].color;
                    },
                },
            },
        },
    };

    return (
        <div style={{ position: 'relative', width: '100%', maxWidth: '600px' }}>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default RunningDistanceChart;
