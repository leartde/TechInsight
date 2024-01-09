import React from 'react'
import { Link } from 'react-router-dom'

const ProfileCard = ({user}) => {
  return (
    

<div class="w-2/3  max-w-sm bg-white border-gray-200 rounded-lg shadow-md ">
   
    <div class="flex flex-col items-center pb-10 pt-6">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={user.profilePicUrl} alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-[#009bd6]">{user.username}</h5>
        <span class="text-sm text-center text-gray-800 dark:text-gray-400">{user.bio}</span>
        <div class="flex mt-4 md:mt-6">
            <Link to={`/profile/${user.id}`} className="inline-flex items-center justify-center py-2 text-sm font-medium text-center text-white border border-transparent rounded-full px-5 bg-[#009bd6] hover:bg-opacity-90">View Profile</Link>
        </div>
    </div>
</div>

  )
}

export default ProfileCard