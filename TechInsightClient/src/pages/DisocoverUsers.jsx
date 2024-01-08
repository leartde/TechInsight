import React, { useEffect, useState } from 'react'
import ProfileCard from '../components/ProfileComponents/ProfileCard';
import axios from 'axios';
import Cookies from 'universal-cookie';


const DisocoverUsers = () => {
  const [users, setUsers] = useState([]);
  const cookies = new Cookies();
  const token = cookies.get("token");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://localhost:7265/api/User/discover/user-profiles?currentUserId=${token.id}`);
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
          console.log('data ', data);
        } else {
          console.log('Error fetching users:', response.statusText);
        }
      } catch (error) {
        console.log('Error fetching users', error);
      }
    }
    fetchData();
  }, [])
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

export default DisocoverUsers