import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const optionslinechart = {
  responsive: true,
  maintainAspectRatio:true,
  animation:true,
  layout:{
    padding:2
  }, 
  plugins: {
    legend: {
        display:false,
        position:'bottom',
        labels:{
          pointStyleWidth:6,
          usePointStyle:true,
          pointStyle:'circle'
        }

    }
  },
  scales:{
    x:{
      border: {
        display: true
      },
      grid: {
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
        color: "#f0f0f7cc",
        lineWidth:1
      },
      ticks: {
        ticks:{
        Color:'black',
        
         }
    },
    },

    y: {

      stacked: false,

      title: {
        display: false,
      },
      min: 5,
      max: 25,
      ticks: {
        beginAtZero: true,
        stepSize: 5,
        callback:(val)=>'$'+val+'K'
      },
      grid: {
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
        color: "#f0f0f7cc",
        lineWidth:1


      },
    }
  
  }

};



export const datalinechart = {
      labels:['Jan','Feb','Mar','Apr','May','Jun'],
      datasets:[
        
        {
          label:'Total views',
          fill:true  ,
          data:[19,7,16,12,18,9],
          backgroundColor:'#b0eaff29',
          pointBackgroundColor:'white',
          borderColor:'#80E2FF',
          pointStyle: 'circle',
  
          tension:'0.4',
      
          borderWidth: 1,
          pointStyle: 'circle',
          pointRadius: 3,
  
        },
        {
        label:'Product sold',
        fill:true,
        data:[14,10,15,18,16,23],
        backgroundColor:'#6763e312',
        borderColor:'#B5B3FB',
        pointBackgroundColor:'white',
        pointStyle: 'circle',

        pointeBorderColor:"#B5B3FB",
        tension:'0.4',
     
        borderWidth: 1,
        pointStyle: 'circle',
        pointRadius: 3,

      }
    ]
}
