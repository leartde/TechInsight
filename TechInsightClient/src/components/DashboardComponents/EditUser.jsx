import axios from 'axios';
import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import DefaultUser from '../../assets/defaultUser.jpg';

const EditUser = () => {
    const user = useLoaderData();
    const navigate = useNavigate();
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [bio, setBio] = useState(user.bio);
    const [imagePreview, setImagePreview] = useState('');
    const [loading, setLoading] = useState(false);
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handleBioChange = (e) => {
        setBio(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
      
    
        try {
            const formData = new FormData();
            formData.append('id', user.id);
            formData.append('username', username);
            formData.append('email',email);
            formData.append('bio', bio);
          


            const response = await axios.put('https://localhost:7265/api/User/update', formData);
    
            if (response.status === 200) {
                console.log('User info updated successfully');
                navigate(`/profile/${user.id}`);
            } else {
                console.error('Error updating profile:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating profile:', error.message);
        }
        finally{
            setLoading(false)
        }
    };
    
   
  return (
    <div className='flex justify-center items-center flex-col mt-28'>
    <div className="bg-white p-8 shadow-md rounded-lg text-center w-1/2">
    {loading && <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center"> Loading </div>}
           
                <>
                    <img src={user.profilePicUrl?user.profilePicUrl:DefaultUser} alt="Profile" className="w-48 h-48 mx-auto rounded-full mb-4"/>
                  <div className='w-1/3 mx-auto space-y-4'>
                  <form encType="multipart/form-data" method="post" onSubmit={handleSubmit} className='mx-auto w- 1/2 flex flex-col space-y-4' action="">
               

                  <input placeholder='username' type='text' onChange={handleUsernameChange} value={username} className="border-2 border-gray-400 text-sm rounded-lg  block w-full p-2.5 bg-white placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400" />
                    <input placeholder='email' value={email} onChange={handleEmailChange} className="border-2 border-gray-400 text-sm rounded-lg  block w-full p-2.5 bg-white placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"  type="email" name="" id="" />
                    <textarea placeholder='bio' className='border-2 border-gray-400 text-sm rounded-lg  block w-full p-2.5 bg-white placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400' name="bio" value={bio} onChange={handleBioChange} id="" cols="30" rows="10"></textarea>
                  
                  <button 
          type='submit' 
          className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-[#009bd6] hover:bg-opacity-90"
        >
          Save
        </button>
        </form>
                  </div>
                  
                </>
            
        </div>
</div>
  )
}

export default EditUser