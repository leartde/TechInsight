import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import fetchUserClicks from '../../Services.jsx/FetchUserClicks';
import fetchBlogs from '../../Services.jsx/FetchBlogs';

const BlogsBarChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Blogs views',
        data: [],
        backgroundColor: 'rgba(75,192,192,0.2)', 
        borderColor: 'rgba(75,192,192,1)', 
        borderWidth: 1,
      },
      {
        label: 'Blogs created',
        data: [],
        backgroundColor: 'rgba(255,99,132,0.2)', 
        borderColor: 'rgba(255,99,132,1)', 
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      const clickData = await fetchUserClicks();
      const blogData = await fetchBlogs();

      const clicksByMonthYear = clickData.reduce((acc, click) => {
        const clickedAt = new Date(click.clickedAt);
        const monthYear = `${clickedAt.getFullYear()}-${(clickedAt.getMonth() + 1).toString().padStart(2, '0')}`;
        acc[monthYear] = (acc[monthYear] || 0) + 1;
        return acc;
      }, {});

      const blogsByMonthYear = blogData.reduce((acc, blog) => {
        const createdAt = new Date(blog.createdAt);
        const monthYear = `${createdAt.getFullYear()}-${(createdAt.getMonth() + 1).toString().padStart(2, '0')}`;
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

      const clickDataPoints = labels.map((label) => clicksByMonthYear[label] || 0);
      const blogDataPoints = labels.map((label) => blogsByMonthYear[label] || 0);

      setChartData({
        labels,
        datasets: [
          {
            label: 'Blogs views',
            data: clickDataPoints,
            backgroundColor: 'rgba(75,192,192,0.2)', 
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
          },
          {
            label: 'Blogs created',
            data: blogDataPoints,
            backgroundColor: 'rgba(255,99,132,0.2)', 
            borderColor: 'rgba(255,99,132,1)', 
            borderWidth: 1,
          },
        ],
      });
    };

    fetchData();
  }, []); 

  return (
    <div>
      <Bar data={chartData} options={{}} />
    </div>
  );
};

export default BlogsBarChart;
