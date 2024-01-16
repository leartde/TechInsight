import React, { useEffect, useState } from 'react'
import fetchUsers from '../../Services.jsx/FetchUsers';
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from  'chart.js/auto' 

const UsersBarChart = () => {
    const [users,setUsers] = useState({
        labels: [],
        datasets: [{
          label: "Registrations",
          data: [],
        }]
      });

    useEffect(()=>{
        const fetchData = async()=>{
            const data = await fetchUsers();
            const registrations = data.reduce((acc, user) => {
                const registrationTime = new Date(user.registrationTime);
                const monthYear = `${registrationTime.getFullYear()}-${(registrationTime.getMonth() + 1).toString().padStart(2, '0')}`;
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
        
              const dataPoints = labels.map(label => registrations[label] || 0);
        
              setUsers({
                labels,
                datasets: [{
                  label: "Registrations",
                  data: dataPoints,
                }]
              });
            };
        



        fetchData();
        
    },[]);
  return (
    <Bar data={users} options={{}} />
  )
}

export default UsersBarChart