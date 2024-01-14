import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BlogCard2 = ({ blogs, currentPage, selectedCategory, pageSize, user }) => {
  const filteredBlogs = blogs
    .filter((blog) => !selectedCategory || blog.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);
    const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-12 max-md:max-w-lg mx-auto">
      {filteredBlogs.map((blog) => (
        <div onClick={()=>navigate(`/blogs/${blog.id}`)} key={blog.id} className="relative group w-72 m-4 h-80">
          <div className="flex-shrink-0 w-full bg-white relative flex flex-col transition-all duration-1000 ease-in-out hover:cursor-pointer hover:shadow-sm hover:transform hover:scale-105 h-full">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${blog.imageURL})` }}></div>
            <a href="#" className="absolute inset-0"></a>
            <div className="absolute inset-0 bg-cover bg-center transition-all duration-350 ease-in-out opacity-0 group-hover:opacity-100" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.65)), url(${blog.imageURL})` }}></div>
            <div className="p-4 transition-all duration-200 ease-in-out flex-grow">
              <div className="flex justify-between items-center pb-2 transition-all duration-200 ease-in-out">
                <a href="#" className={`px-2 py-1 text-xs rounded-xl text-center text-white uppercase  ${blog.category}`}>{blog.category}</a>
                <div className="text-sm">{new Date(blog.createdAt).toLocaleDateString().toUpperCase()}</div>
              </div>
              <h1 className="text-md pb-2 transition-all duration-350 ease-in-out">{blog.title}</h1>
              <div className="pb-2 transition-all duration-250 ease-in-out">By <Link className ='text-gray-600' to={`/profile/${blog.userId}`}>{blog.author}</Link></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard2;
