import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { FaUser } from 'react-icons/fa';
import CategoriesCard from '../components/SingleBlogComponents/CategoriesCard';
import OtherBlogsByUserCard from '../components/SingleBlogComponents/OtherBlogsByUserCard';
import BlogView from '../components/SingleBlogComponents/BlogView';
import RelatedBlogsCard from '../components/SingleBlogComponents/RelatedBlogsCard';
import CommentSection from '../components/SingleBlogComponents/CommentSection';
import PopularPostsCard from '../components/SingleBlogComponents/PopularPostsCard';
import TagsCard from '../components/SingleBlogComponents/TagsCard';

const SingleBlog = () => {
    const blog = useLoaderData();
    // console.log('data', blog);
  return (

<div className="font-poppins text-gray-600 mt-16" >
{/*  main  */}
<main className="pt-12 bg-gray-100 pb-12">
    <div className="container mx-auto px-4 flex flex-wrap lg:flex-nowrap">
        {/*  left sidebar  */}
        <div className="w-3/12 hidden xl:block">
            {/*  categories  */}
          <CategoriesCard/>

            {/*  other by same user posts  */}
           <OtherBlogsByUserCard userId={blog.userId} currentPostId={blog.iId}/>
        </div>

        {/*  Main content  */}
        <div className="xl:w-6/12 lg:w-9/12 w-full  xl:ml-6 lg:mr-6">

            {/*  post view  */}
           <BlogView blog={blog}/>

            {/*  title  */}
            <div className="flex bg-white px-3 py-2 justify-between items-center rounded-sm mt-8">
                <h5 className="text-base uppercase font-semibold font-roboto">Related blogs</h5>
                <Link to={`/blogs?category=${blog.category}`}
                    className="text-white py-1 px-3 rounded-sm uppercase text-sm bg-blue-500 border border-blue-500 hover:text-blue-500 hover:bg-transparent transition">
                    see more
                </Link>
            </div>

            {/*  similer post  */}
           <RelatedBlogsCard blog={blog}/>

            {/*  comment  */}
            <CommentSection/>
            

        </div>

        {/*  right sidebar  */}
        <div className="lg:w-3/12 w-full mt-8 lg:mt-0">
            {/*  Social plugin  */}
            {/* <div className="w-full bg-white shadow-sm rounded-sm p-4 ">
                <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Social Plugin</h3>
                <div className="flex gap-2">
                    <a href="#"
                        className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#"
                        className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#"
                        className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#"
                        className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                        <i className="fab fa-pinterest-p"></i>
                    </a>
                    <a href="#"
                        className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div> */}

            {/*  Popular posts  */}
            <PopularPostsCard/>

            {/*  tag 
             categories  */}
            <TagsCard/>
        </div>

    </div>
</main>

</div>
    



  )
};

export default SingleBlog