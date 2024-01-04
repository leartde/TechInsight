import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaUser} from 'react-icons/fa'

const BlogCard = ({blogs, currentPage, selectedCategory, pageSize}) => {
    const filteredBlogs = blogs.filter((blogs)=> !selectedCategory || blogs.category === selectedCategory )
    .slice((currentPage - 1) * pageSize, currentPage * pageSize )
    
    
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'> 
    {
        filteredBlogs.map((blog)=> (
            <Link to={`/blogs/${blog.id}`} key={blog.id} className='p-5 shadow-lg rounded cursor-pointer'>
                <div>
                    <img src={blog.imageURL} alt="Blog thumbnail" className='w-full' />
 
                </div>
                
                <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'> {blog.title}</h3>
                <p className='mb-2 text-gray-400'><FaUser className='inline-flex items-center m-2'/> {blog.author}</p>
                <p className='text-sm mb-2 text-gray-600'> Published: {new Date(blog.createdAt).toLocaleString()}</p>

            
     </Link>
            
 

        ))
    }
    </div>
  )
  
}

export default BlogCard