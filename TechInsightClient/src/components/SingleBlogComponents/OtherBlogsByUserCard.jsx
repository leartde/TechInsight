import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const OtherBlogsByUserCard = ({userId, currentPostId}) => {
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

    },[])
    console.log('blogsBySameUser ', blogsBySameUser)
  return (
    <div class="w-full mt-8 bg-white shadow-sm rounded-sm p-4 ">
    <h3 class="text-xl font-semibold text-gray-700 mb-3 font-roboto">Other blogs by the same author</h3>
    <div class="space-y-4">
      {
        blogsBySameUser.map((blog)=>(
            <Link key={blog.id} to={`/blogs/${blog.id}`} class="flex group">
            <div class="flex-shrink-0">
                <img src={blog.imageURL} class="h-14 w-20 rounded object-cover"/>
            </div>
            <div class="flex-grow pl-3">
                <h5
                    class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                    {blog.title}
                </h5>
                <div class="flex text-gray-400 text-sm items-center">
                    <span class="mr-1 text-xs"><i class="far fa-clock"></i></span>
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