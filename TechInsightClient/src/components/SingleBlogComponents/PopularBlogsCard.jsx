import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

    const PopularBlogsCard = () => {
        const [popularBlogs, setPopularBlogs] = useState([]);

        useEffect(() => {
            const fetchPopularBlogs = async () => {
                try {
                    let url = 'https://localhost:7265/api/posts/popularPosts';
                    const response = await fetch(url);
        
                    if (response.ok) {
                        const data = await response.json();
                        setPopularBlogs(data.slice(0,4) );
                    } else {
                        console.log('Error fetching popular blogs. Status:', response.status);
                        const errorData = await response.text();
                        console.log('Error data:', errorData);
                    }
                } catch (error) {
                    console.error("Error fetching popular blogs: ", error);
                }
            }
        
            fetchPopularBlogs();
        }, []);
    
    // console.log("Popular blogs", popularBlogs);
  return (
    <div className="w-full  bg-white shadow-sm rounded-sm p-4 ">
                <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Popular Blogs</h3>
                <div className="space-y-4">
                {
                    popularBlogs.map((blog)=>(
                        <Link to={`/blogs/${blog.id}`} key={blog.id} className="flex">
                        <div className="flex-shrink-0">
                            <img src={blog.imageURL} className="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover"/>
                        </div>
                        <div className="flex-grow pl-3">
                            <h5
                                className="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                {blog.title}
                            </h5>
                            <div className="flex text-gray-400 text-sm items-center">
                                <span className="mr-1 text-xs"><i className="far fa-clock"></i></span>
                                {new Date(blog.createdAt).toLocaleString()}
                            </div>
                        </div>
                    </Link>
                    ))
                }
                   
                   
                </div>
            </div>
  )
}

export default PopularBlogsCard