import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BlogCard from '../components/BlogCard';
import Pagination from '../components/Pagination';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12; //number of blogs per page;
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null)
    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await fetch(`https://localhost:7265/api/Post?page=${currentPage}&limit=${pageSize}`);
                if (selectedCategory) {
                    url += `&category=${activeCategory}`;
                }
                if(response.ok){
                    const data = await response.json();
                    setBlogs(data);
                    console.log(data);
                }
                else{
                    console.log('Error fetching blogs:', response.statusText);
                }

            }
            catch(error){
                console.log('Error fetching blogs', error);

            }
            

        }
        fetchData();

    },[currentPage, pageSize, selectedCategory, activeCategory]);

    const handlePageChange = (pageNumber) =>{
        setCurrentPage(pageNumber);

    }
    const handleCategoryChange = (category) =>{
            setSelectedCategory(category);
            setCurrentPage(1);
            setActiveCategory(category)
            
    }
  return (
    <div>
         <div className='flex flex-col lg:flex-row max-w-7xl mx-auto gap-12 my-20'> 
                <BlogCard blogs={blogs} currentPage={currentPage} selectedCategory ={selectedCategory} pageSize={pageSize} />
            </div>
            <div>
            <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize}/>
            </div>
    </div>
  )
}

export default BlogPage