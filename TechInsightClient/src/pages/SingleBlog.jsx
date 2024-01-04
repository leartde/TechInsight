import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { FaUser } from 'react-icons/fa';

const SingleBlog = () => {
    const blog = useLoaderData();
    // console.log('data', blog);

    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        const fetchCategories = async()=>{
            try{
                const url = `https://localhost:7265/api/categories`;
                const categoryResponse = await fetch(url);
                
                if (categoryResponse.ok) {
                    const data = await categoryResponse.json();
                    setCategories(data);
                    console.log(data);
                } else {
                    console.log('Error fetching categories:', categoryResponse.statusText);
                }


            }
            catch(error)
            {
                console.log("error fetching categories", error)
            }
        }
        fetchCategories();

    },[])
    // console.log("categories ", categories);
    
    const [relatedBlogs, setRelatedBlogs]= useState([]);
    useEffect(()=>{
       const fetchRelatedBlogs = async () =>{
        try{
            const url = `https://localhost:7265/api/posts/category/${blog.category}`;
                const relatedBlogsResponse = await fetch(url);
                const data = await relatedBlogsResponse.json();
                data;
                setRelatedBlogs(data.slice(0, 5))

        }
        catch(error){
            console.log('error fetching related blogs ', error)
        }
       }
       fetchRelatedBlogs();

    },[])
    // console.log('related blogs ', relatedBlogs);

    const [blogsBySameUser, setblogsBySameUser]= useState([]);
    useEffect(()=>{
       const fetchOtherBlogs = async () =>{
        try{
            const url = `https://localhost:7265/api/posts/user/${blog.userId}`;
                const otherBlogsResponse = await fetch(url);
                const data = await otherBlogsResponse.json();
                setblogsBySameUser(data.slice(0, 4));

        }
        catch(error){
            console.log('error fetching related blogs ', error)
        }
       }
       fetchOtherBlogs();

    },[])
    console.log('blogsBySameUser ', blogsBySameUser)

    
  return (

    

<div class="font-poppins text-gray-600 mt-16" >


{/* // <!-- main --> */}
<main class="pt-12 bg-gray-100 pb-12">
    <div class="container mx-auto px-4 flex flex-wrap lg:flex-nowrap">
        {/* <!-- left sidebar --> */}
        <div class="w-3/12 hidden xl:block">
            {/* <!-- categories --> */}
            <div class="w-full bg-white shadow-sm rounded-sm p-4 ">
                <h3 class="text-xl font-semibold text-gray-700 mb-3 font-roboto">Categories</h3>
                <div class="space-y-2">
                    {
                        categories.map((category)=>(
                            <Link to={`/blogs?category=${category.name}`} href="#" key={category.id}
                        class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                       
                        <span>{category.name}</span>
                        <p class="ml-auto font-normal">{category.nrPosts}</p>
                    </Link>
                        ))
                    }
                   
                </div>
            </div>

            {/* <!-- random posts --> */}
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
        </div>

        {/* <!-- Main content --> */}
        <div class="xl:w-6/12 lg:w-9/12 w-full  xl:ml-6 lg:mr-6">

            {/* <!-- post view --> */}
            <div class="rounded-sm overflow-hidden bg-white shadow-sm">
                <div class="">
                    <img src={blog.imageURL} class="w-full h-96 object-contain"/>
                </div>
                <div class="p-4 pb-5">
                    <h2 class="block text-2xl font-semibold text-gray-700 font-roboto">
                        {blog.title}
                    </h2>
                    <div class="mt-2 flex space-x-4">
                        <div class="flex text-gray-400 text-md items-center">
                            <span class="mr-2 text-xs">
                                <FaUser/>
                            </span>
                            {blog.author}
                        </div>
                        <div class="flex text-gray-400 text-sm items-center">
                            <span class="mr-2 text-xs">
                                <i class="far fa-clock"></i>
                            </span>
                            {new Date(blog.createdAt).toLocaleString()}
                        </div>
                    </div>

                    <p class="text-gray-500 text-base mt-5">
                       {blog.content}
                    </p>

                    

                    

                </div>
            </div>

            {/* <!-- title --> */}
            <div class="flex bg-white px-3 py-2 justify-between items-center rounded-sm mt-8">
                <h5 class="text-base uppercase font-semibold font-roboto">Related blogs</h5>
                <Link to={`/blogs?category=${blog.category}`}
                    class="text-white py-1 px-3 rounded-sm uppercase text-sm bg-blue-500 border border-blue-500 hover:text-blue-500 hover:bg-transparent transition">
                    see more
                </Link>
            </div>

            {/* <!-- similer post --> */}
            <div class="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
                {
                    relatedBlogs.map((relatedBlog)=>(
                        <div key={relatedBlog.id} class="rounded-sm bg-white p-3 pb-5 shadow-sm">
                    <a href="#" class="block rounded-md overflow-hidden">
                        <img src={relatedBlog.imageURL}
                            class="w-full h-40 object-cover transform hover:scale-110 transition duration-500"/>
                    </a>
                    <div class="mt-3">
                        <a href="#">
                            <h2
                                class="block text-base font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                                {relatedBlog.title}
                            </h2>
                        </a>
                        <div class="mt-2 flex space-x-3">
                            <div class="flex text-gray-400 text-xs items-center">
                                <span class="mr-1 text-xs">
                                    <i class="far fa-user"></i>
                                </span>
                                {relatedBlog.author}
                            </div>
                            <div class="flex text-gray-400 text-xs items-center">
                                <span class="mr-1 text-xs">
                                    <i class="far fa-clock"></i>
                                </span>
                                {new Date(relatedBlog.createdAt).toLocaleString()}
                            </div>
                        </div>
                    </div>
                </div>
                    ))
                }
              
                  
            </div>

            {/* <!-- comment --> */}
            <div class="p-4 bg-white rounded-sm shadow-sm mt-8">
                <h4 class="text-base uppercase  font-semibold mb-4 font-roboto">Post a comment</h4>
                <p class="text-sm text-gray-500 mb-4">12 comments</p>

                <div class="space-y-5">
                    <div class="flex items-start border-b  pb-5 border-gray-200">
                        <div class="w-12 h-12 flex-shrink-0">
                            <img src="src/images/avatar.png" class="w-full"/>
                        </div>
                        <div class="flex-grow pl-4">
                            <h4 class="text-base  font-roboto">Rasel Ahmed</h4>
                            <p class="text-xs text-gray-400">9 Aprile 2021 at 12:34 AM</p>
                            <p class="text-sm font-600 mt-2">Great article. Thanks</p>
                            <div class="flex gap-2 mt-2">
                                <button
                                    class="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Reply</button>
                                <button
                                    class="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Delete</button>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-start border-b  pb-5 border-gray-200">
                        <div class="w-12 h-12 flex-shrink-0">
                            <img src="src/images/avatar-2.png" class="w-full"/>
                        </div>
                        <div class="flex-grow pl-4">
                            <h4 class="text-base  font-roboto">John Doe</h4>
                            <p class="text-xs text-gray-400">9 Aprile 2021 at 12:34 AM</p>
                            <p class="text-sm font-600 mt-2">Great article. Thanks</p>
                            <div class="flex gap-2 mt-2">
                                <button
                                    class="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Reply</button>
                                <button
                                    class="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Delete</button>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="w-12 h-12 flex-shrink-0">
                            <img src="src/images/avatar.png" class="w-full"/>
                        </div>
                        <div class="flex-grow pl-4">
                            <h4 class="text-base  font-roboto">Rasel Ahmed</h4>
                            <p class="text-xs text-gray-400">9 Aprile 2021 at 12:34 AM</p>
                            <p class="text-sm font-600 mt-2">Great article. Thanks</p>
                            <div class="flex gap-2 mt-2">
                                <button
                                    class="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Reply</button>
                                <button
                                    class="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>

                <form action="#" class="mt-8">
                    <h5 class="text-base  mb-1">Comment:</h5>
                    <textarea type="text"
                        class="w-full border border-gray-200 py-3 px-5 text-sm  rounded-sm h-20 focus:outline-none focus:border-gray-400"
                        placeholder="type your comment"></textarea>
                    <div class="mt-2">
                        <butotn type="submit"
                        class="text-white py-1 px-3 rounded-sm uppercase text-sm bg-blue-500 border border-blue-500 hover:text-blue-500 hover:bg-transparent transition">
                        Submit
                    </butotn>
                    </div>
                </form>
            </div>

        </div>

        {/* <!-- right sidebar --> */}
        <div class="lg:w-3/12 w-full mt-8 lg:mt-0">
            {/* <!-- Social plugin --> */}
            <div class="w-full bg-white shadow-sm rounded-sm p-4 ">
                <h3 class="text-xl font-semibold text-gray-700 mb-3 font-roboto">Social Plugin</h3>
                <div class="flex gap-2">
                    <a href="#"
                        class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#"
                        class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#"
                        class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#"
                        class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                        <i class="fab fa-pinterest-p"></i>
                    </a>
                    <a href="#"
                        class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>

            {/* <!-- Popular posts --> */}
            <div class="w-full mt-8 bg-white shadow-sm rounded-sm p-4 ">
                <h3 class="text-xl font-semibold text-gray-700 mb-3 font-roboto">Popular Posts</h3>
                <div class="space-y-4">
                    <a href="#" class="flex group">
                        <div class="flex-shrink-0">
                            <img src="src/images/img-5.jpg" class="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover"/>
                        </div>
                        <div class="flex-grow pl-3">
                            <h5
                                class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                Team Bitbose geared up to attend Blockchain
                            </h5>
                            <div class="flex text-gray-400 text-sm items-center">
                                <span class="mr-1 text-xs"><i class="far fa-clock"></i></span>
                                June 11, 2021
                            </div>
                        </div>
                    </a>
                    <a href="#" class="flex group">
                        <div class="flex-shrink-0">
                            <img src="src/images/img-9.jpg" class="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover"/>
                        </div>
                        <div class="flex-grow pl-3">
                            <h5
                                class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                After a Caribbean Hurricane, the Battle
                            </h5>
                            <div class="flex text-gray-400 text-sm items-center">
                                <span class="mr-1 text-xs"><i class="far fa-clock"></i></span>
                                March 27, 2021
                            </div>
                        </div>
                    </a>
                    <a href="#" class="flex group">
                        <div class="flex-shrink-0">
                            <img src="src/images/img-8.jpg" class="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover"/>
                        </div>
                        <div class="flex-grow pl-3">
                            <h5
                                class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                California sheriff’s deputy shot during ‘ambush’
                            </h5>
                            <div class="flex text-gray-400 text-sm items-center">
                                <span class="mr-1 text-xs"><i class="far fa-clock"></i></span>
                                Aprile 17, 2021
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            {/* <!-- tag -->
            <!-- categories --> */}
            <div class="w-full bg-white shadow-sm rounded-sm p-4  mt-8">
                <h3 class="text-xl font-semibold text-gray-700 mb-3 font-roboto">Tags</h3>
                <div class="flex items-center flex-wrap gap-2">
                    <a href="#"
                        class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Beauti</a>
                    <a href="#"
                        class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Sports</a>
                    <a href="#"
                        class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Business</a>
                    <a href="#"
                        class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Politics</a>
                    <a href="#"
                        class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Computer</a>
                    <a href="#"
                        class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Coding</a>
                    <a href="#"
                        class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Web
                        Design</a>
                    <a href="#"
                        class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Web
                        App</a>
                </div>
            </div>
        </div>

    </div>
</main>

{/* <!-- mobile menu --> */}
<div class="fixed w-full h-full bg-black bg-opacity-25 left-0 top-0 z-10 opacity-0 invisible transition-all duration-500 lg:hidden"
    id="sidebar_wrapper">
    <div class="fixed top-0 w-72 h-full bg-white shadow-md z-10 flex flex-col transition-all duration-500 -left-80"
        id="sidebar">

        {/* <!-- searchbar --> */}
        <div class="relative mx-3 mt-3 shadow-sm">
            <span class="absolute left-3 top-2 text-sm text-gray-500">
                <i class="fas fa-search"></i>
            </span>
            <input type="text"
                class="block w-full shadow-sm border-none rounded-3xl  pl-11 pr-2 py-2 focus:outline-none bg-gray-50 text-sm text-gray-700 placeholder-gray-500"
                placeholder="Search"    />
        </div>

        {/* <!-- navlink --> */}
        <h3 class="text-xl font-semibold text-gray-700 mb-1 font-roboto pl-3 pt-3">Menu</h3>
        <div class="">
            <a href="#"
                class="flex px-4 py-1 uppercase items-center font-semibold text-sm  transition hover:text-blue-500">
                <span class="w-6">
                    <i class="fas fa-home"></i>
                </span>
                Home
            </a>
            <a href="#"
                class="flex px-4 py-1 uppercase items-center font-semibold text-sm  transition hover:text-blue-500">
                <span class="w-6">
                    <i class="far fa-file-alt"></i>
                </span>
                About
            </a>
            <a href="#"
                class="flex px-4 py-1 uppercase items-center font-semibold text-sm  transition hover:text-blue-500">
                <span class="w-6">
                    <i class="fas fa-phone"></i>
                </span>
                Contact
            </a>
        </div>
        {/* <!-- navlinks end -->

        <!-- categories --> */}
        <div class="w-full mt-3 px-4 ">
            <h3 class="text-xl font-semibold text-gray-700 mb-3 font-roboto">Categories</h3>
            <div class="space-y-2">
                <a href="#"
                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                    <span class="mr-2">
                        <i class="far fa-folder-open"></i>
                    </span>
                    <span>Tagg</span>
                    <p class="ml-auto font-normal">(12)</p>
                </a>
                <a href="#"
                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                    <span class="mr-2">
                        <i class="far fa-folder-open"></i>
                    </span>
                    <span>Business</span>
                    <p class="ml-auto font-normal">(15)</p>
                </a>
                <a href="#"
                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                    <span class="mr-2">
                        <i class="far fa-folder-open"></i>
                    </span>
                    <span>Fashion</span>
                    <p class="ml-auto font-normal">(5)</p>
                </a>
                <a href="#"
                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                    <span class="mr-2">
                        <i class="far fa-folder-open"></i>
                    </span>
                    <span>Food</span>
                    <p class="ml-auto font-normal">(10)</p>
                </a>
                <a href="#"
                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                    <span class="mr-2">
                        <i class="far fa-folder-open"></i>
                    </span>
                    <span>Learn</span>
                    <p class="ml-auto font-normal">(3)</p>
                </a>
                <a href="#"
                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                    <span class="mr-2">
                        <i class="far fa-folder-open"></i>
                    </span>
                    <span>Music</span>
                    <p class="ml-auto font-normal">(7)</p>
                </a>
                <a href="#"
                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                    <span class="mr-2">
                        <i class="far fa-folder-open"></i>
                    </span>
                    <span>Nature</span>
                    <p class="ml-auto font-normal">(0)</p>
                </a>
                <a href="#"
                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                    <span class="mr-2">
                        <i class="far fa-folder-open"></i>
                    </span>
                    <span>People</span>
                    <p class="ml-auto font-normal">(13)</p>
                </a>
                <a href="#"
                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                    <span class="mr-2">
                        <i class="far fa-folder-open"></i>
                    </span>
                    <span>Sports</span>
                    <p class="ml-auto font-normal">(7)</p>
                </a>
                <a href="#"
                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                    <span class="mr-2">
                        <i class="far fa-folder-open"></i>
                    </span>
                    <span>Technology</span>
                    <p class="ml-auto font-normal">(17)</p>
                </a>
            </div>
        </div>
    </div>
</div>


</div>
    



  )
};

export default SingleBlog