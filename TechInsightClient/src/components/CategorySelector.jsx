import React from 'react';

const CategorySelector = ({onSelectCategory, activeCategory}) => {
    const categories = ["Devices","Code", "Innovation","Cybersecurity", "Trends","AI"]; //testing purposes ,will add more
    console.log("category: ", activeCategory)
    return (
        <div className='  flex justify-start pl-16 mb-8 space-x-8 lg:space-x-16 flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold'>
            <button className={`lg:ml-12 ${activeCategory?"":"active-button"}`} onClick={()=>onSelectCategory(null)}> All</button>
            {
                categories.map((category)=>(
                    <button onClick={()=>onSelectCategory(category)} className={`mr-2 space-x-16 ${activeCategory === category ?"active-button":"    "}` }
                    
                    key={category} > {category}</button>
                ))
            }
            
        </div>

    );
}

export default CategorySelector;
