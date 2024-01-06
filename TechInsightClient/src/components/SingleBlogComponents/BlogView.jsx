import React from 'react'
import { FaUser } from 'react-icons/fa'

const BlogView = ({blog}) => {
  return (
    <div className="rounded-sm overflow-hidden bg-white shadow-sm">
    <div className="">
        <img src={blog.imageURL} className="w-full h-96 object-cover"/>
    </div>
    <div className="p-4 pb-5">
        <h2 className="block text-2xl font-semibold text-gray-700 font-roboto">
            {blog.title}
        </h2>
        <div className="mt-2 flex space-x-4">
            <div className="flex text-gray-400 text-md items-center">
                <span className="mr-2 text-xs">
                    <FaUser/>
                </span>
                {blog.author}
            </div>
            <div className="flex text-gray-400 text-sm items-center">
                <span className="mr-2 text-xs">
                    <i className="far fa-clock"></i>
                </span>
                {new Date(blog.createdAt).toLocaleString()}
            </div>
        </div>

        <p className="text-gray-500 text-base mt-5">
           {blog.content}
        </p>

        

        

    </div>
</div>
  )
}

export default BlogView