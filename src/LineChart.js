import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from "react-chartjs-2";
import './LineChart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
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
};

const data = {
  labels: [...Array(18).keys()].map((week) => 'Week ' + (week + 1)),
  datasets: [
    {
      label: 'Owen Schaefer',
      data: [6, 14, 18, 23, 29, 32, 36, 42, 44, 50, 58, 64, 70, 75, 81, 88, 90, 98],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Bobby Piccerillo',
      data: [8, 14, 18, 24, 30, 32, 34, 38, 44, 50, 56, 66, 70, 78, 82, 86, 92, 100],
      borderColor: 'rgb(99, 255, 132)',
      backgroundColor: 'rgba(99, 255, 132, 0.5)',
    },
    {
      label: 'Kyle Schaefer',
      data: [2, 8, 16, 20, 27, 37, 43, 51, 59, 63, 70, 74, 80, 90, 94, 100, 104, 110],
      borderColor: 'rgb(50, 50, 50)',
      backgroundColor: 'rgba(50, 50, 50, 0.5)',
    },
    {
      label: 'Philip Arrigo Sr.',
      data: [10, 18, 24, 26, 33, 41, 45, 49, 55, 57, 63, 70, 75, 81, 84, 90, 95, 101],
      borderColor: 'rgb(99, 132, 255)',
      backgroundColor: 'rgba(99, 132, 255, 0.5)',
    },
  ]
};

class LineChart extends React.Component {
  render() {
    return (
      <div className="LineChart">
        <Line data={data} options={options}/>
      </div>
    );
  }
}

export default LineChart;