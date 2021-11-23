import React from 'react';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ["red", "blue", "green", "purple", "orange", "yellow"],
    datasets: [{
        label: "Couleur",
        data: ["23", "21", "32", "12", "15", "9"],
        backgroundColor: ["red", "blue", "green", "purple", "orange", "yellow"]
    },
  ],
}

const options = {
    maintainAspectRatio: false,
}

const Middle = () => {
    return (
        <div className=" bg-white ml-2   shadow-sm w-8/12 border rounded-xl border-gray-100">

            <div className="border-b p-3 border-gray-100">
                <p className="font-semibold  ">HelioSphere Token</p>
            </div>
            <div>
                <Bar 
                data={data} 
                />
            </div>
        </div>
    )
}

export default Middle