import React from 'react';
import { Link } from 'react-router-dom';
import addClick
 from '../../Services.jsx/AddClick';
const ProfileBlogs = ({ blogs, currentPage, postsPerPage, currentUser }) => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const currentPosts = blogs.slice(startIndex, startIndex + postsPerPage);

  

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
      {currentPosts.map(blog => (
        <div key={blog.id} className="rounded-sm bg-white p-3 pb-5 shadow-sm">
          <Link onClick={()=>addClick(blog.id,currentUser.id)} to={`/blogs/${blog.id}`} className="block rounded-md overflow-hidden">
            <img src={blog.imageURL} className="w-full h-40 object-cover hover:scale-110 transition duration-500" />
          </Link>
          <div className="mt-3">
            <a href="#">
              <h2 className="block text-base font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                {blog.title}
              </h2>
            </a>
            <div className="mt-2 flex space-x-3">
              <div className="flex text-gray-400 text-xs items-center">
                <span className="mr-1 text-xs">
                  <i className="far fa-user"></i>
                </span>
                {blog.author}
              </div>
              <div className="flex text-gray-400 text-xs items-center">
                <span className="mr-1 text-xs">
                  <i className="far fa-clock"></i>
                </span>
                {new Date(blog.createdAt).toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProfileBlogs;
