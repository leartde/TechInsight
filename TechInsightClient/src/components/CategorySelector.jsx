import React from 'react';

const CategorySelector = ({ onSelectCategory, activeCategory }) => {
  const categories = ["Devices", "Code", "Innovation", "Cybersecurity", "Trends", "AI"];

  return (
    <div className='pl-4 mb-8 space-x-8 lg:space-x-16 flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold'>
      <span className="mr-2">Select Category:</span>
      <select
        className="mr-2"
        value={activeCategory || "All"} 
        onChange={(e) => onSelectCategory(e.target.value === "All" ? null : e.target.value)}
      >
        <option value="All">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
