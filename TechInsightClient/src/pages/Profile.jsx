import React, { useState, useEffect } from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub, FaEdit } from 'react-icons/fa';
import BlogCard2 from '../components/BlogCard2';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import ProfileBlogs from '../components/ProfileComponents/ProfileBlogs';
import Cookies from 'universal-cookie';
import Pagination from '../components/Pagination';

const Profile = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const user = useLoaderData();
  const cookies = new Cookies();
  const token = cookies.get("token");

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

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


    return (
        <div className="flex justify-center items-center flex-col mt-28">
            <div className="bg-white p-8 shadow-md rounded-lg text-center w-1/2 relative">
                {user && (
                    <>
                        <img src={user.profilePicUrl} alt="Profile" className="w-48 h-48 mx-auto rounded-full mb-4"/>
                        {
                           token && token.id === user.id && (
                                <Link to={'/editProfile'} className="absolute right-0 top-0 mt-4 mr-4">
                                    <FaEdit className="text-gray-600 text-3xl cursor-pointer"/>
                                </Link>
                            )
                        }
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
            <div className='max-w-4xl'>
            <ProfileBlogs blogs={posts} currentPage={currentPage} postsPerPage={postsPerPage} />
            </div>
            <div>
            <Pagination
            onPageChange={paginate}
            currentPage={currentPage}
            blogs={posts}
            pageSize={postsPerPage}
             />
            </div>
        </div>
    );
}

export default Profile;