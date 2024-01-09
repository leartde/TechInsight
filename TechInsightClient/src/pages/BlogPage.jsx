import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BlogCard from '../components/BlogCard';
import Pagination from '../components/Pagination';
import CategorySelector from '../components/CategorySelector';
import BlogCard2 from '../components/BlogCard2';
import { Navigate, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Cookies from 'universal-cookie';


    const BlogPage = () => {
        const [blogs, setBlogs] = useState([]);
        const navigate = useNavigate();
        const location = useLocation();
        const [tag, setTag] = useState('');
        const [currentPage, setCurrentPage] = useState(1);
        const pageSize = 12; //number of blogs per page;
        const [selectedCategory, setSelectedCategory] = useState(null);
        const [activeCategory, setActiveCategory] = useState(null);
        const cookies = new Cookies();
        const token = cookies.get("token");
        if(token){
          console.log(" token " , token)
       console.log("USER ID" , token.id);
        }
        else{
          console.log("User is not logged in")
        }

        
        const [searchParams, setSearchParams] = useSearchParams(); // useSearchParams without initial values

        useEffect(() => {
            const fetchData = async () => {
                try {
                    let url = `https://localhost:7265/api/posts?page=${currentPage}&limit=${pageSize}`;

                    if (searchParams.get('category')) {
                        url += `&category=${searchParams.get('category')}`;
                        setSelectedCategory(searchParams.get('category'));
                        setActiveCategory(searchParams.get('category'));
                    }
                    const tagParam = searchParams.get('tag');
                    if (tagParam) {
                      handleTagChange();
                      url += `&tag=${tagParam.trim()}`;
                    }

                    const response = await fetch(url);

                    if (response.ok) {
                        const data = await response.json();
                        setBlogs(data);
                        console.log(data);
                    } else {
                        console.log('Error fetching blogs:', response.statusText);
                    }
                } catch (error) {
                    console.log('Error fetching blogs', error);
                }
            };

            fetchData();
        }, [currentPage, pageSize, searchParams]);

        const handlePageChange = (pageNumber) => {
            setCurrentPage(pageNumber);
            

        };

        useEffect(() => {
          let isMounted = true;
            const fetchBlogsByTag = async () => {
              
              try {
               
                const tagParam = new URLSearchParams(location.search).get('tag');
                setTag(tagParam || '');
        
                let url = `https://localhost:7265/api/posts/tag/${tagParam}`;
                const response = await fetch(url);
        
                if (response.ok) {
                  const data = await response.json();
                  setBlogs(data);
                } else {
                  console.log('Error fetching blogs by tag. Status:', response.status);
                  const errorData = await response.text();
                  console.log('Error data:', errorData);
                }
              } catch (error) {
                console.error('Error fetching blogs by tag: ', error);
              }
            };
        
            fetchBlogsByTag();
            
            return () => {
              isMounted = false;
            };
          }, [location.search]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setActiveCategory(category);
        setCurrentPage(1)
    
       
        setSearchParams((prevParams) => {
          const newSearchParams = new URLSearchParams(prevParams);
  
          if (category !== null) {
              newSearchParams.set('category', category);
          } else {
              newSearchParams.delete('category');
          }
  
          return newSearchParams;
      });
    }

      const handleTagChange = (tag)=>{
        setTag(tag);
        setSearchParams((prevParams) => {
          const newSearchParams = new URLSearchParams(prevParams);
  
          if (category !== null) {
              newSearchParams.set('category', category);
          } else {
              newSearchParams.delete('category');
          }
  
          return newSearchParams;
      });
      }

    

  return (

    <div className='max-w-7xl mx-auto py-20'>
        <div> <CategorySelector onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory}  activeCategory={activeCategory}/></div>
        <div>
        <button type="button" onClick={()=>{navigate('/addblog')}} class="text-white bg-gradient-to-r from-[#009bd6] to-[#009bd6] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add a blog</button>
             </div>
         <div className='flex flex-col lg:flex-row  gap-12 '> 


                <div className='flex flex-row gap-12'>
                <BlogCard2 blogs={blogs} currentPage={currentPage} selectedCategory ={selectedCategory} pageSize={pageSize} />
                <div className=' max-xl:hidden max-w-80 mt-8 lg:mt-0'> <Sidebar blogs={blogs}/> </div>
                </div>
            </div>
            <div>
            <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize}/>
            </div>
    </div>
  )
}

export default BlogPage