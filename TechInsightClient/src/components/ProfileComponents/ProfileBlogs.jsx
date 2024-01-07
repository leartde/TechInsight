import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ProfileBlogs = ({blogs}) => {



  return (

    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
    {
        blogs.map((blog)=>(
            <div key={blog.id} className="rounded-sm bg-white p-3 pb-5 shadow-sm">
        <Link to={`/blogs/${blog.id}`} className="block rounded-md overflow-hidden">
            <img src={blog.imageURL}
                className="  w-full h-40 object-cover  hover:scale-110 transition duration-500"/>
        </Link>
        <div className="mt-3">
            <a href="#">
                <h2
                    className="block text-base font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
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
        ))
    }
  
      
</div>
  )
}

export default ProfileBlogs