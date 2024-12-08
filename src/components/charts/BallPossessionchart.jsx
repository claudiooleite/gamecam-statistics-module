import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const BallPossessionChart = ({ players }) => {
    const labels = players.map((player) => player.name);
    const data = players.map((player) => player.stats.ballPossession);

    const chartData = {
        labels,
        datasets: [
            {
                data,
                backgroundColor: players.map((player) => player.color),
                hoverOffset: 4,
                borderWidth: 0,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: 'bottom', // Position legends at the bottom
                labels: {
                    color: 'rgba(255, 255, 255, 1)', // Player names in white
                    font: {
                        weight: 'bold',
                    },
                },
            },
            datalabels: {
                color: 'rgba(255, 255, 255, 1)', // Numbers inside the chart in white
                font: {
                    weight: 'bold',
                },
                formatter: (value, context) => `${value}%`, // Display as percentages
            },
        },
        responsive: true,
    };

    return (
        <div style={{ position: 'relative', width: '250px', maxWidth: '600px', marginTop: '10px' }}>
            <Doughnut data={chartData} options={options} />
        </div>
    )
};

export default BallPossessionChart;
