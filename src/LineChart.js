import React from "react";
import { Line } from "react-chartjs-2";

const chartData = {
    labels: [...Array(18).keys()].map((week) => 'Week ' + week),
    datasets: [
        {
            label: 'Owen Schaefer',
            data: [0, 12, 15, 22, 28, 32, 35, 40],
        },
        {
            label: 'Bobby Piccerillo',
            data: [4, 10, 18, 25, 30, 33, 34, 38],
        }
    ]
};

class LineChart extends React.Component {
    render() {
        return (
            <div>
                <Line data={chartData} options={{
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: "2022 Pickem Season"
                        },
                        legend: {
                            position: 'top',
                        }
                    }
                }}
                />
            </div>
        );
    }
}

export default LineChart;