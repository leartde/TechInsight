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
                        <img src={token.profilepicUrl?token.profilepicUrl:'data:image/jpeg;base64,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'} alt="Profile" className="w-48 h-48 mx-auto rounded-full mb-4"/>
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