import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import the plugin

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels);

const TotalErrorsChart = ({ players }) => {
    const labels = players.map((player) => player.name);

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Net Errors',
                data: players.map((player) => player.stats.netErrors),
                backgroundColor: "rgba(0, 166, 231, 1)", // Blue for net errors
                barThickness: 16,
            },
            {
                label: 'Wall Errors',
                data: players.map((player) => player.stats.wallErrors),
                backgroundColor: 'rgba(0, 166, 231, 0.3)', // Light blue for wall errors
                barThickness: 16,
            },
        ],
    };

    const options = {
        indexAxis: 'y', // Horizontal bars
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom', // Legend below the chart
                labels: {
                    usePointStyle: true, // Use dots in legend
                },
            },
            tooltip: { enabled: false }, // Disable tooltips
            datalabels: {
                display: true,
                anchor: 'start', // Position labels to the right of bars
                align: 'end',
                formatter: (value, context) => {
                    const totalErrors =
                        players[context.dataIndex].stats.netErrors +
                        players[context.dataIndex].stats.wallErrors;
                    return totalErrors;
                },
                color: '#fff', // Text color
                font: {
                    family: 'Space Grotesk',
                    size: 14,
                    weight: '400',
                },
            },
        },
        scales: {
            x: {
                stacked: true, // Stack bars horizontally
                beginAtZero: true,
                ticks: {
                    display: false, // Hide x-axis ticks
                },
                grid: { display: false }, // Hide grid lines
            },
            y: {
                stacked: true, // Stack bars vertically
                ticks: {
                    color: (context) => players[context.index]?.color || "#000", // Player-specific colors for labels
                    font: {
                        family: 'Space Grotesk', // Set font family
                        size: 14, // Set font size
                        weight: '400', // Set font weight
                    },
                },
                grid: { display: false }, // Hide grid lines
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
