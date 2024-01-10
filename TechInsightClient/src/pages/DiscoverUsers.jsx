import React, { useEffect, useState } from 'react'
import ProfileCard from '../components/ProfileComponents/ProfileCard';
import axios from 'axios';
import Cookies from 'universal-cookie';
import fetchUsers from '../Services.jsx/FetchUsers';

const DiscoverUsers = () => {
  const [users, setUsers] = useState([]);
  const cookies = new Cookies();
  const token = cookies.get("token");


  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUsers();
      if (token && token.id) {
        const filteredData = data.filter((user) => user.id !== token.id);
        setUsers(filteredData);
        console.log('filteredData ', filteredData);
      } else {
        setUsers(data);
      };
    }
    fetchData();
  }, [users]);


  return (
    <div className='max-w-7xl mx-auto py-20'>

      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'> 
      {
          users.map((user)=>(
            <ProfileCard user={user} key={user.id} />
          ))
      }

        
        </div>

    </div>
  )
}

export default DiscoverUsers;