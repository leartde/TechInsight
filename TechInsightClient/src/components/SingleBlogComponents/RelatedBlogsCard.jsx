import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const RelatedBlogsCard = ({blog, blogId}) => {
    const [relatedBlogs, setRelatedBlogs]= useState([]);
    useEffect(() => {
    const fetchRelatedBlogs = async () => {
        try {
            const url = `https://localhost:7265/api/posts/category/${blog.category}`;
            const relatedBlogsResponse = await fetch(url);
            const data = await relatedBlogsResponse.json();
            
            // Assuming blogId is available in the surrounding scope
            setRelatedBlogs(data.filter(otherBlog => otherBlog.id !== blogId).slice(0, 5));
        } catch (error) {
            console.log('Error fetching related blogs ', error);
        }
    };

    fetchRelatedBlogs();
}, [blog.category, blogId]);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
    {
        relatedBlogs.map((relatedBlog)=>(
            <div key={relatedBlog.id} className="rounded-sm bg-white p-3 pb-5 shadow-sm">
        <Link to={`/blogs/${relatedBlog.id}`} className="block rounded-md overflow-hidden">
            <img src={relatedBlog.imageURL}
                className="  w-full h-40 object-cover  hover:scale-110 transition duration-500"/>
        </Link>
        <div className="mt-3">
            <a href="#">
                <h2
                    className="block text-base font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                    {relatedBlog.title}
                </h2>
            </a>
            <div className="mt-2 flex space-x-3">
                <div className="flex text-gray-400 text-xs items-center">
                    <span className="mr-1 text-xs">
                        <i className="far fa-user"></i>
                    </span>
                    {relatedBlog.author}
                </div>
                <div className="flex text-gray-400 text-xs items-center">
                    <span className="mr-1 text-xs">
                        <i className="far fa-clock"></i>
                    </span>
                    {new Date(relatedBlog.createdAt).toLocaleString()}
                </div>
            </div>
        </div>
    </div>
        ))
    }
  
      
</div>
  )
}

export default RelatedBlogsCard