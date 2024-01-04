import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const CategoriesCard = () => {
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
  return (
    <div class="w-full bg-white shadow-sm rounded-sm p-4 ">
    <h3 class="text-xl font-semibold text-gray-700 mb-3 font-roboto">Categories</h3>
    <div class="space-y-2">
        {
            categories.map((category)=>(
                <Link to={`/blogs?category=${category.name}`}  key={category.id}
            class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
           
            <span>{category.name}</span>
            <p class="ml-auto font-normal">{category.nrPosts}</p>
        </Link>
            ))
        }
       
    </div>
</div>
  )
}

export default CategoriesCard