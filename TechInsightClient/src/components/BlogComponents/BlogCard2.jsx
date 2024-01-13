import React from 'react';
import { Link } from 'react-router-dom';
import addClick from '../../Services.jsx/AddClick';

const BlogCard2 = ({ blogs, currentPage, selectedCategory, pageSize, user }) => {
  const filteredBlogs = blogs
    .filter((blog) => !selectedCategory || blog.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-12 max-md:max-w-lg mx-auto">
        {filteredBlogs.map((blog) => (
          <Link to={`/blogs/${blog.id}`} key={blog.id} className="bg-white cursor-pointer rounded overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:opacity-50">
          
              <img
                src={blog.imageURL}
                className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-300 break-words"
                alt={blog.title}
              />
          
            <div className=" break-words p-6 absolute bottom-0 left-0 right-0 top-28  z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-500 bg-opacity-50">
              <span className="text-sm block mb-2 text-white font-semibold">{new Date(blog.createdAt).toLocaleDateString().toUpperCase()} | By {blog.author}</span>
              <h3 className="text-md font-bold text-white">{blog.title}</h3>
              <div className="mt-4">
                
                {/* <p className="text-gray-200 text-sm mt-2">{blog.content.slice(0,32)}...</p> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCard2;