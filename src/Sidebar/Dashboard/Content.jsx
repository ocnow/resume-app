import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
} from 'chart.js';

import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend
);

import { Bar } from 'react-chartjs-2';

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Resumes by Technology',
      position : 'bottom'
    },
  },
};

export const options1 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Resumes by Business Process',
      position : 'bottom'
    },
  },
};

const labels = ['Java', 'Python','ETL'];

export const data1 = {
  labels,
  datasets: [
    {
      label: 'Skillset',
      data: [10,20,30],
      backgroundColor: 'rgb(56 189 248)',
    }
  ],
};

export const data = {
  labels: ["TC1", "TC2", "TC3"],
  datasets: [
    {
      label: "# of Documents",
      data: [12, 19, 3],
      backgroundColor: [
        // 'rgba(255,99,132,0.2)',
        // 'rgba(54,162,235,0.2)',
        // 'rgba(255,206,86,0.2)',
        "rgba(255,0,0,0.6)",
        "rgba(0,0,255,0.6)",
        "rgba(0,255,0,0.6)",
      ],
      borderColor: [
        "rgba(255,99,132,1)",
        "rgba(54,162,235,1)",
        "rgba(255,206,86,1)",
      ],
      borderWidth: 1,
    },
  ],
};
export default function Content() {
  return (
    <div className="flex w-full h-full mt-20">
      
      <div className="w-1/2 h-1/2">
        <Pie data={data} options={options1}/>
        
      </div>
      <div className="w-1/2 mt-13">
        <Bar options={options} data={data1} className="h-1/2"/>
      </div>
    </div>
  );
}