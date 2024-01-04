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
                
                
                
                  <Link to={`/blogs/${blog.id}`} key={blog.id}>
                    <div className='flex flex-col rounded-2xl p-5 shadow-lg  cursor-pointer ' >
                        {/* image */}
                        <div>
                            <img src={blog.imageURL} alt="blog image" className='w-full object-cover' />
                        </div>


                         {/* body */}
                        <div className='flex flex-col gap-2 p-4'>
                            <span className={` px-4 py-2  text-sm rounded-2xl self-start ml-1 ${blog.category}	`}>   {blog.category}</span>
                            <h3 className='text-xl font-medium px-1 w-full'> {blog.title}  </h3>
                        </div>

                           {/* footer */}
                        <div className='flex flex-row w-full px-4'>
                            <div className='self-start '>
                                <img className='h-11 w-11 rounded-full' src={blog.userImage} alt="user img" />
                            </div>
                            <div className='block pl-4'>
                                <h2 className='text-lg'> {blog.author}</h2>
                                <span className='text-sm text-gray-400'> {new Date(blog.createdAt).toLocaleString()} </span>
                            </div>

                        </div>





                    </div>
                  </Link>








              



            ))
        }
    </div>
  )
}

export default BlogCard2