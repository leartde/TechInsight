import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUpDown } from 'react-icons/fa6';
import { FaTrash } from 'react-icons/fa';
import fetchTags from "../../Services.jsx/FetchTags";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TagsTable = () => {
  const [tags, setTags] = useState([]);
  const [sortDirection, setSortDirection] = useState('asc');
  const [sortColumn, setSortColumn] = useState('id');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTags();
      setTags(data);
    };
    fetchData();
  }, [tags]);

  const handleDelete = async(id)=>{
    try{
      const response =  await axios.delete(`https://localhost:7265/api/tags/delete/${id}`);
      if(response.status === 200) {
        console.log("Succesfully deleted tag");
        toast.success('Succesfully deleted tag');
      } else {
        console.error('Error deleting tag:', response.statusText);
        toast.error('Error deleting tag: ' + response.statusText);
      }
    }
    catch(error){
      console.log("Error deleting tag ", error);
      toast.error('Error deleting tag: ' + error.message);
    }
  }


  

  const handleSort = (column) => {
    setSortColumn(column);
    setSortDirection((prevDirection) => (prevDirection === 'asc' ? 'desc' : 'asc'));
  };

  const compareValues = (a, b) => {
    const columnA =
      sortColumn === 'submissionTime'
        ? new Date(a[sortColumn])
        : typeof a[sortColumn] === 'string'
        ? a[sortColumn].toLowerCase()
        : a[sortColumn];

    const columnB =
      sortColumn === 'submissionTime'
        ? new Date(b[sortColumn])
        : typeof b[sortColumn] === 'string'
        ? b[sortColumn].toLowerCase()
        : b[sortColumn];

    if (columnA < columnB) return sortDirection === 'asc' ? -1 : 1;
    if (columnA > columnB) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  };

  const sortedTags = [...tags].sort(compareValues);

  const filteredTags = sortedTags.filter((tag) => {
    return Object.values(tag).some(
      (value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className='my-2 mx-auto'>
      <ToastContainer/>
      <div className='pl-4 space-y-4 mb-6'>
        <h1 className='text-2xl font-bold lg:block hidden text-gray-800 text-left'>
          Tags Table
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
                onClick={() => handleSort('name')}
              >
                <span>Name</span>
                <FaUpDown
                  className={`ml-1 text-gray-600 inline ${
                    sortColumn === 'name' ? (sortDirection === 'desc' ? 'rotate-180' : '') : ''
                  }`}
                />
              </th>
              <th
                className='px-4 py-2 cursor-pointer'
                onClick={() => handleSort('postCount')}
              >
                <span>Blogs count</span>
                <FaUpDown
                  className={`ml-1 inline text-gray-600 ${
                    sortColumn === 'postCount' ? (sortDirection === 'desc' ? 'rotate-180' : '') : ''
                  }`}
                />
              </th>
          
              <th className='px-4 py-2'>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTags.map((tag) => (
              <tr key={tag.id} className='bg-gray-100 text-gray-500'>
                <td className='border px-4 py-2'>{tag.id}</td>
                <td
                  className='cursor-pointer border px-4 py-2 text-blue-600'
                >
                  {tag.name}
                </td>
                <td className='border px-4 py-2'>{tag.postCount}</td>
                
                <td className=' border space-x-4 text-2xl pl-2  py-2'>
                  
                  <FaTrash
                  onClick={()=>handleDelete(tag.id)}
                  
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

export default TagsTable;
