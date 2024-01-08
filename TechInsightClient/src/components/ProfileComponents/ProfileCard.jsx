import React from 'react'
import { Link } from 'react-router-dom'

const ProfileCard = ({user}) => {
  return (
    

<div class="w-2/3  max-w-sm bg-[#161A30] border-gray-200 rounded-lg shadow ">
   
    <div class="flex flex-col items-center pb-10 pt-6">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={user.profilePicUrl} alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.username}</h5>
        <span class="text-sm text-center text-gray-500 dark:text-gray-400">{user.bio}</span>
        <div class="flex mt-4 md:mt-6">
            <Link to={`/profile/${user.id}`} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Profile</Link>
           
        </div>
    </div>
</div>

  )
}

export default ProfileCard