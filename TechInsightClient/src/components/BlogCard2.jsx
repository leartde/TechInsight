
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaDesktop, FaFontAwesome, FaGear } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import addClick from '../Services.jsx/AddClick';


const BlogCard2 = ({ blogs, currentPage, selectedCategory, pageSize, user }) => {

  const filteredBlogs = blogs
    .filter((blog) => !selectedCategory || blog.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
      {filteredBlogs.map((blog) => (
        <div key={blog.id} className="max-w-sm rounded-xl max-h-80 bg-white p-3 pb-5 shadow-sm overflow-hidden">
          <Link
            to={`/blogs/${blog.id}`}
            onClick={() => addClick(blog.id, user.id)}
            className="block rounded-md overflow-hidden"
          >
            <img
              src={blog.imageURL}
              className="w-full h-40 object-cover hover:scale-110 transition duration-500"
              alt={blog.title}
            />
          </Link>
          <div className="mt-3">
            <h2 className="break-words block text-base font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
              {blog.title}
            </h2>
            <div className="mt-2 flex space-x-3">
              <Link to={`/profile/${blog.userId}`}>
                <div className="flex text-gray-600 text-md items-center">
                  <span className="mr-1 text-xs">
                    <img src={blog.userImage} className='h-8 w-8 rounded-full' alt={blog.author} />
                  </span>
                  {blog.author}
                </div>
              </Link>
              <div className="flex text-gray-400 text-xs items-center">
                {new Date(blog.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard2;
