import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import fetchBlogs from '../../Services.jsx/FetchBlogs';
import { FaUpDown } from 'react-icons/fa6';
import { FaTrash } from 'react-icons/fa';
import DeletePost from '../../Services.jsx/DeletePost';

const BlogsTable = () => {
  const [blogs, setBlogs] = useState([]);
  const [sortDirection, setSortDirection] = useState('asc');
  const [sortColumn, setSortColumn] = useState('id');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBlogs();
      setBlogs(data);
    };
    fetchData();
  }, [blogs]);

  

  const handleSort = (column) => {
    setSortColumn(column);
    setSortDirection((prevDirection) => (prevDirection === 'asc' ? 'desc' : 'asc'));
  };

  const compareValues = (a, b, column) => {
    const columnA =
      column === 'createdAt'
        ? new Date(a[column])
        : typeof a[column] === 'string'
        ? a[column].toLowerCase()
        : a[column];
  
    const columnB =
      column === 'createdAt'
        ? new Date(b[column])
        : typeof b[column] === 'string'
        ? b[column].toLowerCase()
        : b[column];
  
    if (columnA < columnB) return sortDirection === 'asc' ? -1 : 1;
    if (columnA > columnB) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  };
  

  const sortedBlogs = [...blogs].sort((a, b) => compareValues(a, b, sortColumn));

  const filteredBlogs = sortedBlogs.filter((blog) => {
    return Object.values(blog).some(
      (value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className='my-2 mx-auto'>
      <div className='pl-4 space-y-4 mb-6'>
        <h1 className='text-2xl font-bold lg:block hidden text-gray-800 text-left'>
          Blogs Table
        </h1>
        <div className='text-lg font-normal text-gray-600'>
          <input
            className='px-2'
            type='text'
            placeholder='Search...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className='max-h-96 overflow-y-scroll bg-[#F3F8FF]'>
        <table className='table-auto w-full'>
          <thead>
            <tr className='text-left text-base font-light text-gray-400'>
              <th
                className='px-4 py-2 cursor-pointer'
                onClick={() => handleSort('id')}
              >
                <span>Id</span>
                <FaUpDown
                  className={`ml-1 text-gray-600 inline ${
                    sortColumn === 'id' ? (sortDirection === 'desc' ? 'rotate-180' : '') : ''
                  }`}
                />
              </th>
              <th
                className='px-4 py-2 cursor-pointer'
                onClick={() => handleSort('title')}
              >
                <span>Title</span>
                <FaUpDown
                  className={`ml-1 text-gray-600 inline ${
                    sortColumn === 'title' ? (sortDirection === 'desc' ? 'rotate-180' : '') : ''
                  }`}
                />
              </th>
              <th
                className='px-4 py-2 cursor-pointer'
                onClick={() => handleSort('category')}
              >
                <span>Category</span>
                <FaUpDown
                  className={`ml-1 inline text-gray-600 ${
                    sortColumn === 'category' ? (sortDirection === 'desc' ? 'rotate-180' : '') : ''
                  }`}
                />
              </th>
              <th
                className='px-4 py-2 cursor-pointer'
                onClick={() => handleSort('tags')}
              >
                <span>Tags</span>
                <FaUpDown
                  className={` ml-1 inline text-gray-600 ${
                    sortColumn === 'tags' ? (sortDirection === 'desc' ? 'rotate-180' : '') : ''
                  }`}
                />
              </th>
              <th
                className='px-4 py-2 cursor-pointer'
                onClick={() => handleSort('createdAt')}
              >
                <span>Published Date</span>
                <FaUpDown
                  className={`ml-1 inline text-gray-600 ${
                    sortColumn === 'createdAt' ? (sortDirection === 'desc' ? 'rotate-180' : '') : ''
                  }`}
                />
              </th>
              <th
                className='px-4 py-2 cursor-pointer'
                onClick={() => handleSort('nrClicks')}
              >
                <span>Views</span>
                <FaUpDown
                  className={`ml-1 text-gray-600 inline ${
                    sortColumn === 'nrClicks' ? (sortDirection === 'desc' ? 'rotate-180' : '') : ''
                  }`}
                />
              </th>
              <th className='px-4 py-2'>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredBlogs.map((blog) => (
              <tr key={blog.id} className='bg-gray-100 text-gray-500'>
                <td className='border px-4 py-2'>{blog.id}</td>
                <td
                  onClick={() => {
                    navigate(`/blogs/${blog.id}`);
                  }}
                  className='cursor-pointer border px-4 py-2 text-blue-600'
                >
                  {blog.title}
                </td>
                <td className='border px-4 py-2'>{blog.category}</td>
                <td className='border px-4 py-2'>{blog.tags}</td>
                <td className='border px-4 py-2'>
                  {new Date(blog.createdAt).toLocaleDateString()}
                </td>
                <td className= 'border px-4 py-2'> {blog.nrClicks}</td>
                <td className=' border space-x-4 text-2xl pl-2  py-2'>
                  
                  <FaTrash
                    onClick={() => DeletePost(blog.id)}
                    className='text-red-400 cursor-pointer  mx-auto'
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogsTable;
