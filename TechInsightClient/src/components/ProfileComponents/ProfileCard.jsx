import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const ProfileCard = ({user}) => {
  return (
    <div className="bg-white p-4 shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] w-full max-w-xs rounded-2xl font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="flex flex-col items-center">
        <img src={user.profilePicUrl} className="w-24 h-w-24 rounded-full" alt="User image" />
        <div className="mt-4 text-center">
          <p className="text-lg text-[#333] font-extrabold">{user.username}</p>
          <p className="text-sm text-gray-500 mt-2">{user.bio}</p>
        </div>
      </div>
      <div className="mt-6 flex justify-between">
        <div className="bg-gray-100 hover:bg-gray-200 w-10 h-10 p-2 flex items-center justify-center rounded-full cursor-pointer mx-1">
          <FaFacebook size={16} color='#000000' />
        </div>
        <div className="bg-gray-100 hover:bg-gray-200 w-10 h-10 p-2 flex items-center justify-center rounded-full cursor-pointer mx-1">
          <FaLinkedin size={16} color='#000000' />
        </div>
        <div className="bg-gray-100 hover:bg-gray-200 w-10 h-10 p-2 flex items-center justify-center rounded-full cursor-pointer mx-1">
          <FaInstagram size={16} color='#000000' />
        </div>
        <div className="bg-gray-100 hover:bg-gray-200 w-10 h-10 p-2 flex items-center justify-center rounded-full cursor-pointer mx-1">
          <FaGithub size={16} color='#000000' />
        </div>
      </div>
      <div className="flex mt-4 md:mt-6 justify-center">
        <Link to={`/profile/${user.id}`} className="inline-flex items-center justify-center py-2 text-sm font-medium text-center text-white border border-transparent rounded-full px-4 bg-[#009bd6] hover:bg-opacity-90">View Profile</Link>
      </div>
    </div>
  )
}

export default ProfileCard