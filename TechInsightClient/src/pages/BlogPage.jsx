import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BlogCard from '../components/BlogCard';
import Pagination from '../components/Pagination';
import CategorySelector from '../components/CategorySelector';
import BlogCard2 from '../components/BlogCard2';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12; //number of blogs per page;
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
    
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

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setActiveCategory(category);
    
        // Construct the new searchParams object based on the category
        const newSearchParams = { ...searchParams};
    
        if (category !== null) {
            newSearchParams.category = category;
        } else {
            delete newSearchParams.category; // Remove the category property
        }
    
        setSearchParams(newSearchParams);

    };

  return (
    <div className='my-20'>
        <div> <CategorySelector onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory}  activeCategory={activeCategory}/></div>
         <div className='flex flex-col lg:flex-row max-w-7xl mx-auto gap-12 '> 
                <BlogCard2 blogs={blogs} currentPage={currentPage} selectedCategory ={selectedCategory} pageSize={pageSize} />
            </div>
            <div>
            <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize}/>
            </div>
    </div>
  )
}

export default BlogPage