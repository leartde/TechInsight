import React from 'react';
import { Link } from 'react-router-dom';
import DefaultUser from '../../assets/defaultUser.jpg';

const ProfileCard = ({ user }) => {
  return (
    <div className="w-2/3 max-w-sm  bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 mx-auto">
      <div className="flex flex-col items-center  space-y-4 pb-4 pt-6 text-center">
        <div className='w-24 h-24 border-gray-200 '> <img className="w-full h-full mb-2 rounded-full " src={user.profilePicUrl?user.profilePicUrl:DefaultUser} alt={`${user.username}'s profile`} /></div>
        <div>
          <h5 className="text-xl font-bold text-[#009bd6]">{user.username}</h5>
          <p className="text-sm text-gray-600">{user.bio}</p>
        </div>
        <div className="flex mt-4 md:mt-6">
          <Link
            to={`/profile/${user.id}`}
            className="inline-flex items-center justify-center py-2 px-4 text-sm font-medium text-white bg-[#009bd6] rounded-full hover:bg-opacity-90"
          >
            View Profile
          </Link>
        </div>
        <div className="text-sm text-gray-600">
          <p>{user.postCount} blogs</p>
          <p>Joined at {new Date(user.registrationTime).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
