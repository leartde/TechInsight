import React, { useState } from 'react'
import { FaDesktop, FaFontAwesome, FaGear, } from 'react-icons/fa6';
import { Link } from 'react-router-dom';



const BlogCard2 = ({blogs, currentPage, selectedCategory, pageSize}) => {
    const filteredBlogs = blogs.filter((blogs)=> !selectedCategory || blogs.category === selectedCategory )
    .slice((currentPage - 1) * pageSize, currentPage * pageSize );

   
  return (
    
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
        {
            filteredBlogs.map((blog)=>(
                
                <div key={blog.id} className=" max-h-80 rounded-xl bg-white p-3 pb-5 shadow-sm">
        <Link to={`/blogs/${blog.id}`} className="block rounded-md overflow-hidden">
            <img src={blog.imageURL}
                className="  w-full h-40 object-cover hover:scale-110 transition duration-500"/>
        </Link>
        <div className="mt-3">
            
                
                <h2
                    className="block text-base font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                    {blog.title}
                </h2>
           
            <div className="mt-2 flex space-x-3">
            <Link to={`/profile/${blog.userId}`}>
                <div className="flex text-gray-600 text-md items-center">
                    
                    <span className="mr-1 text-xs">
                    <img src={blog.userImage} className='h-8 w-8 rounded-full' />
                    </span>
                    {blog.author}
                   
                </div>
                </Link>
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

export default BlogCard2