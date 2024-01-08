import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfileBlogs from '../ProfileComponents/ProfileBlogs';

const DiscoverUsersPage = () => {
  const [userProfiles, setUserProfiles] = useState([]);
  const [posts, setPosts] = useState([]); // State to store blog posts

  useEffect(() => {
    // Fetch user profiles
    fetch('https://localhost:7265/api/User/discover/user-profiles')
      .then((response) => response.json())
      .then((data) => {
        setUserProfiles(data);
      })
      .catch((error) => {
        console.error('Error fetching user profiles:', error);
      });

    // Fetch blog posts
    fetch('https://localhost:7265/api/posts') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error('Error fetching blog posts:', error);
      });
  }, []);

return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-2">Discover Users</h1>
        <div className="profile-cards-container w-full flex justify-center">
            <div className="max-w-6xl w-full space-y-4">
                <ProfileBlogs blogs={posts} />
            </div>
        </div>
    </div>
)
}
export default DiscoverUsersPage;
