import React, { useState, useEffect } from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import BlogCard2 from '../components/BlogCard2';

const Profile = () => {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState(null);

    const profilePicUrl = "https://via.placeholder.com/150";
    const username = "John Doe";
    const email = "john.doe@example.com";
    const bio = "Software developer with a passion for learning new technologies.";


    const login = () => {
        setUser({
            username,
            email,
            bio,
            profilePicUrl
        });
    };

    useEffect(() => {
        login();


        fetch('https://localhost:7265/api/posts') 
            .then(response => response.json())
            .then(data => {
                setPosts(data);
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
            <BlogCard2 blogs={posts} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />
        </div>
    );
}

export default Profile;