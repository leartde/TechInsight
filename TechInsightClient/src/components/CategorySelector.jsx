import React from 'react';

const CategorySelector = ({ onSelectCategory, activeCategory }) => {
  const categories = ["Devices", "Code", "Innovation", "Cybersecurity", "Trends", "AI"];

  return (
    <div class="relative mt-6 h-10 w-72 min-w-[200px]">
  <select
  value={activeCategory || "All"} 
     onChange={(e) => onSelectCategory(e.target.value === "All" ? null : e.target.value)}
    class="peer h-full w-full rounded-[7px] border border-gray-300 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
    <option value="All">All</option>
    {categories.map((category) => (
      <option key={category} value={category}> {category} </option>
    ))}
  </select>
  <label
    class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    Select a Category
  </label>
</div>
    // <div className='pl-4 mb-8 space-x-8 lg:space-x-16 flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold'>
    //   <span className="mr-2">Select Category:</span>
    //   <select
    //     className="mr-2"
    //     value={activeCategory || "All"} 
    //     onChange={(e) => onSelectCategory(e.target.value === "All" ? null : e.target.value)}
    //   >
    //     <option value="All">All</option>
    //     {categories.map((category) => (
    //       <option key={category} value={category}>
    //         {category}
    //       </option>
    //     ))}
    //   </select>
    // </div>
  );
};

export default CategorySelector;
