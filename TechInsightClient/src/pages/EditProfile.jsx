import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';


const EditProfile = () => {
    const cookies = new Cookies();
    const token = cookies.get("token");
    const navigate = useNavigate();
    const [username, setUsername] = useState(token.username);
    const [bio, setBio] = useState(token.bio);
    const [image, setImage] = useState({});
    const [imagePreview, setImagePreview] = useState();
    const [submitting, setSubmitting] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handleBioChange = (e) => {
        setBio(e.target.value);
    };

    const handleImageChange = (e) => {
        const selectedFile = e.target.files && e.target.files[0];

        const reader = new FileReader();
      
        reader.onloadend = () => {
      
          setImagePreview(reader.result);
        };
          if (selectedFile) {
              setImage(selectedFile);
              reader.readAsDataURL(selectedFile);
            }
    };
    const formData = new FormData();
    formData.append('id', token.id);
    formData.append('username', username);
    formData.append('bio', bio);
    formData.append('registrationTime', token.registrationTime);
    formData.append('image', image);

    console.log("Form data: ", JSON.stringify(formData));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
      
    
        try {
            const formData = new FormData();
            formData.append('id', token.id);
            formData.append('username', username);
            formData.append('email',token.email);
            formData.append('bio', bio);
            formData.append('image', image);


            const response = await axios.put('https://localhost:7265/api/User/update', formData);
    
            if (response.status === 200) {
                console.log('Profile updated successfully');
                navigate(`/profile/${token.id}`);
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
                {token && (
                    <>
                        <img src={imagePreview?imagePreview:token.profilePicUrl} alt="Profile" className="w-48 h-48 mx-auto rounded-full mb-4"/>
                      <div className='w-1/3 mx-auto space-y-4'>
                      <form encType="multipart/form-data" method="post" onSubmit={handleSubmit} className='mx-auto w- 1/2 flex flex-col space-y-4' action="">
                      <div className='border-2 border-gray-400 text-sm rounded-lg  block w-full p-2.5 bg-white placeholder-gray-400 text-black dark:focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400'>
                    <input type="file" onChange={handleImageChange}   name="image" id="image" placeholder='Enter your blog image'
              accept="image/*" />
                </div>
                   

                      <input placeholder='username' type='text' onChange={handleUsernameChange} value={username} className="border-2 border-gray-400 text-sm rounded-lg  block w-full p-2.5 bg-white placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400" />
                        {/* <p className="text-gray-600">{token.email}</p> */}
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
                )}
            </div>
    </div>
  )
}

export default EditProfile