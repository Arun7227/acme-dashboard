import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export const optionsdoughnut = {
  responsive: true,
  maintainAspectRatio:true,
  animation:true,
  percentageInnerCutout:20,
//  circumference:400,
radius:80,
// cutoutPercentage: 40,
layout:{
  padding:0
}, 
  plugins: {
      legend: {
        display:false,
          position: 'bottom',
          labels: {
            usePointStyle: true,
          },
      },
   
  },
};


export const datadoughnut = {
    labels: ['France 4260 sales', 'Italy 4260 sales', 'Japan 4260 sales', 'Canada 4260 sales'],
    datasets: [
      {
        label: '# of Votes',
        data: [25, 25, 25, 25],
        backgroundColor: [
          '#80E2FF',
          '#F49FA8',
          '#FFDF94',
          '#A3A0FB',
        
        ],
        borderColor: [
          '#80E2FF',
          '#F49FA8',
          '#FFDF94',
          '#A3A0FB',
       
        ],
        borderWidth: 1,
        offset:2,
        padding:90,
        cutout:'60%'
      },
    ],
  };