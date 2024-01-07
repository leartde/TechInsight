import React, { useState, useEffect } from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import BlogCard2 from '../components/BlogCard2';
import {useLoaderData, useLocation} from 'react-router-dom';
import ProfileBlogs from '../components/ProfileComponents/ProfileBlogs';


const Profile = () => {
    const [posts, setPosts] = useState([]);
    const state = history.state.usr;
    console.log(state);

    const user = useLoaderData();
    console.log('user data ', user)

   

    useEffect(() => {
        

        fetch(`https://localhost:7265/api/posts`) 
            .then(response => response.json())
            .then(data => {
                const userPosts = data.filter(post => post.userId === user.id);
                setPosts(userPosts);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    const currentPage = 1;
    const selectedCategory = null;
    const pageSize = 10;

    return (
        <div className="flex justify-center items-center flex-col mt-28">
            <div className="bg-white p-8 shadow-md rounded-lg text-center w-1/2">
                {user && (
                    <>
                        <img src={user.profilePicUrl} alt="Profile" className="w-48 h-48 mx-auto rounded-full mb-4"/>
                        <h1 className="text-2xl font-bold mb-2">{user.username}</h1>
                        <p className="text-gray-600">{user.email}</p>
                        <p className="text-gray-600 mt-4">{user.bio}</p>
                        <div className="mt-4 flex justify-center space-x-4">
                            <a href="https://www.facebook.com" className="hover:text-[#009bd6]"> <FaFacebook/> </a>
                            <a href="https://www.linkedin.com" className="hover:text-[#009bd6]"> <FaLinkedin/> </a>
                            <a href="https://x.com/" className="hover:text-[#009bd6]"> <FaTwitter/> </a>
                            <a href="https://github.com/" className="hover:text-[#009bd6]"> <FaGithub/> </a>
                        </div>
                    </>
                )}
            </div>
            <hr className="my-5 w-full" />
            {/* Display posts */}
        <div className='shadow-lg'>
            {/* <h2 className='text-xl font-bold text-blue-500 text-center'>Checkout my blogs</h2> */}
            <div className='max-w-4xl'>
                <ProfileBlogs blogs={posts}/>
            </div>
        </div>
        </div>
    );
}

export default Profile;