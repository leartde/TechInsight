import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import addClick from '../../Services.jsx/AddClick';

const ProfileBlogs = ({ blogs, currentPage, postsPerPage, currentUser }) => {
  const navigate = useNavigate();

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = blogs.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-12 max-md:max-w-lg mx-auto">
      {currentPosts.map((blog) => (
        <div onClick={() => {navigate(`/blogs/${blog.id}`);
        addClick(blog.id, currentUser.id);
        }} key={blog.id} className="relative group w-72 m-4 h-80">
          <div className="flex-shrink-0 w-full bg-white relative flex flex-col transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-md hover:transform hover:scale-105 h-full">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${blog.imageURL})` }}></div>
            <a href="#" className="absolute inset-0"></a>
            <div className="absolute inset-0 bg-cover bg-center transition-all duration-350 ease-in-out opacity-0 group-hover:opacity-100" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.65)), url(${blog.imageURL})` }}></div>
            <div className="p-4 transition-all duration-200 ease-in-out flex-grow">
              <div className="flex justify-between items-center pb-2 transition-all duration-200 ease-in-out">
                <a href="#" className={`px-2 py-1 text-xs rounded-xl text-center text-white uppercase  ${blog.category}`}>{blog.category}</a>
                <div className="text-sm">{new Date(blog.createdAt).toLocaleDateString().toUpperCase()}</div>
              </div>
              <h1 className="text-md pb-2 transition-all duration-350 ease-in-out">{blog.title}</h1>
              <div className="pb-2 transition-all duration-250 ease-in-out">By <Link className ='text-gray-600' to={`/profile/${blog.userId}`}>{blog.author}</Link></div>
              <div className="mt-4">
                <p className="text-gray-400 text-sm mt-2 hidden">{blog.content}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileBlogs;
