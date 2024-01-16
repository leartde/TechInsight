    import React, { useEffect, useState } from 'react'
    import fetchTags from '../../Services.jsx/FetchTags';
    import { Pie } from 'react-chartjs-2';
    import { Chart as ChartJS } from 'chart.js/auto'

    const TagsChart = () => {
        const [tags, setTags] = useState([]);

        useEffect(() => {
        const fetchData = async () => {
        const data = await fetchTags();
        setTags(data.filter((tag) => tag.postCount > 1));
       
        };
        fetchData();
        }, []);

        const chartData = {
            labels: tags.map((tag) => tag.name),
            datasets: [
              {
                data: tags.map((tag) => tag.postCount),
                backgroundColor: [
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                ],
              },
            ],
          };

          const chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              position: 'bottom',
            },
          };

    return (
        <Pie data={chartData} options={chartOptions} />
    )
    }

    export default TagsChart