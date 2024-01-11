import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import addClick from '../../Services.jsx/AddClick';

const OtherBlogsByUserCard = ({userId, currentPostId, currentUser}) => {
  const [blogsBySameUser, setblogsBySameUser]= useState([]);
    useEffect(()=>{
       const fetchOtherBlogs = async () =>{
        try{
            const url = `https://localhost:7265/api/posts/user/${userId}`;
                const otherBlogsResponse = await fetch(url);
                const data = await otherBlogsResponse.json();
                setblogsBySameUser(data.filter(blog=>blog.id !== currentPostId ).slice(0, 4));

        }
        catch(error){
            console.log('error fetching related blogs ', error)
        }
       }
       fetchOtherBlogs();

    },[blogsBySameUser ])
    // console.log('blogsBySameUser ', blogsBySameUser)
  return (
    <div className="w-full mt-8 bg-white shadow-sm rounded-sm p-4 ">
    <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Other blogs by the same author</h3>
    <div className="space-y-4">
      {
        blogsBySameUser.map((blog)=>(
            <Link key={blog.id} onClick={()=>addClick(blog.id, currentUser.id)} to={`/blogs/${blog.id}`} className="flex group">
            <div className="flex-shrink-0">
                <img src={blog.imageURL} className="h-14 w-20 rounded object-cover"/>
            </div>
            <div className="flex-grow pl-3">
                <h5
                    className="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                    {blog.title}
                </h5>
                <div className="flex text-gray-400 text-sm items-center">
                    <span className="mr-1 text-xs"><i className="far fa-clock"></i></span>
                    June 11, 2021
                </div>
            </div>
        </Link>
        

        ))
      }
      
      
    </div>
</div>
  )
}

export default OtherBlogsByUserCard