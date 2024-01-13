import React from 'react'
import { FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import DeletePost from '../../Services.jsx/DeletePost'
import { ToastContainer } from 'react-toastify'

const BlogView = ({blog, user}) => {
    const navigate = useNavigate();
  return (
    <div className="rounded-sm overflow-hidden bg-white shadow-sm">
        <ToastContainer/>
    <div className="">
        <img src={blog.imageURL} className="w-full h-96 object-fill"/>
    </div>
    <div className="p-4 pb-5">
        <h2 className="block text-2xl font-semibold text-gray-700 font-roboto">
            {blog.title}
            
        </h2>
        <div className="mt-2 flex space-x-4">
            <div onClick={()=>navigate(`/profile/${user.id}`)} className="flex text-gray-400 text-md items-center cursor-pointer">
                <span className="mr-2 text-xs">
                    <FaUser/>
                </span>
                {blog.author}
            </div>
            <div  className="flex text-gray-400 text-sm items-center">
                <span className="mr-2 text-xs">
                    <i className="far fa-clock"></i>
                </span>
                {new Date(blog.createdAt).toLocaleString().replace(/(.*)\D\d+/, '$1')}
            </div>
        </div>

      <div className='flex flex-row mt-4 space-x-4'>
      {user && blog.userId == user.id && <Link to={`/editblog/${blog.id}`} className="text-white py-1  px-6 rounded-sm uppercase text-sm bg-blue-500 border border-blue-500 hover:text-blue-500 hover:bg-transparent transition"> Edit </Link>}
      {user && (blog.userId == user.id || user.userRole == 1) && <Link onClick={()=>{DeletePost(blog.id);
        navigate('/blogs')}} className="text-white py-1  px-4 rounded-sm uppercase text-sm bg-red-500 border border-red-500 hover:text-red-500 hover:bg-transparent transition"> Delete </Link>}
      </div>

        <p className="text-gray-500 text-base mt-5">
           {blog.content}
        </p>

        

        

    </div>
</div>
  )
}

export default BlogView