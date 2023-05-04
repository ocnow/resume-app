import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
  labels: ["Human Resources", "Onboarding", "Barclaycard"],
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
    <div className="flex w-full h-full">
      
      <div>
        <Pie data={data} />
        <div className="mt-3 flex justify-center">
          <label>Documents Stored by Business Process</label>
        </div>
      </div>
    </div>
  );
}