import React, { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2'
import fetchUserClicks from '../../Services.jsx/FetchUserClicks';
import {Chart as ChartJS} from  'chart.js/auto' 
const BlogsBarChart = () => {
    const [userClicks, setUserClicks] = useState({
        labels: [],
        datasets: [{
          label: "Clicks",
          data: [],
        }]
      });
    
      useEffect(() => {
        const fetchData = async () => {
          const data = await fetchUserClicks();
    
        
          const clicksByMonthYear = data.reduce((acc, click) => {
            const clickedAt = new Date(click.clickedAt);
            const monthYear = `${clickedAt.getFullYear()}-${(clickedAt.getMonth() + 1).toString().padStart(2, '0')}`;
            acc[monthYear] = (acc[monthYear] || 0) + 1;
            return acc;
          }, {});
    
       
          const labels = [];
          const startDate = new Date('2023-09-01');
          const endDate = new Date('2024-02-29');
          const currentDate = new Date(startDate);
    
          while (currentDate <= endDate) {
            const monthYear = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}`;
            labels.push(monthYear);
            currentDate.setMonth(currentDate.getMonth() + 1);
          }
    
          const dataPoints = labels.map(label => clicksByMonthYear[label] || 0);
    
          setUserClicks({
            labels,
            datasets: [{
              label: "Clicks",
              data: dataPoints,
            }]
          });
        };
    
        fetchData();
      }, []);
  return (
    <Bar data={userClicks} options={{}} />
  )
}

export default BlogsBarChart