import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const TotalErrorsChart = ({ players }) => {
    const labels = players.map((player) => player.name);

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Net Errors',
                data: players.map((player) => player.stats.netErrors),
                backgroundColor: 'rgba(0, 166, 231, 1)', // Red for net errors
            },
            {
                label: 'Wall Errors',
                data: players.map((player) => player.stats.wallErrors),
                backgroundColor: 'rgba(0, 166, 231, 0.3)', // Blue for wall errors
            },
        ],
    };

    const options = {
        indexAxis: 'y', // Horizontal bars
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom', // Place the legend below the chart
                labels: {
                    color: 'rgba(255, 255, 255, 1)', // Set the color for the legend text
                    font: {
                        weight: 'bold', // Optionally make the legend text bold
                    },
                },
            },
            datalabels: {
                display: (context) => context.datasetIndex === 1, // Only show labels for the last dataset
                formatter: (value, context) => {
                    // Calculate total errors for each bar
                    const total =
                        context.chart.data.datasets.reduce(
                            (sum, dataset) => sum + dataset.data[context.dataIndex],
                            0
                        );
                    return total; // Show total errors
                },
                anchor: 'end', // Anchors the label to the end of the bar
                align: 'end',  // Aligns the text to the end (right) of the chart
                color: 'rgba(255, 255, 255, 1)', // Text color
                font: {
                    weight: 'bold',
                },
                offset: 10, // Moves the label outside the bar to the right
            },
            tooltip: {
                enabled: true, // Enable tooltips
            },
        },
        scales: {
            x: {
                stacked: true, // Stack the bars horizontally
                beginAtZero: true,
                ticks: {
                    display: false, // Show x-axis ticks
                },
            },
            y: {
                stacked: true, // Stack the bars vertically
                ticks: {
                    color: (context) => players[context.index].color, // Use player-specific colors for labels
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

export default TotalErrorsChart;
