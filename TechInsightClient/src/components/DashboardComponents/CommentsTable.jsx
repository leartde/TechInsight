import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUpDown } from 'react-icons/fa6';
import { FaTrash } from 'react-icons/fa';
import DeleteComment from '../../Services.jsx/DeleteComment';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CommentsTable = () => {
  const [comments, setComments] = useState([]);
  const [sortDirection, setSortDirection] = useState('asc');
  const [sortColumn, setSortColumn] = useState('id');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7265/api/comments');
        if (response.status === 200) {
          const data = response.data;
          console.log("Data ", data);
          setComments(data);
        } else {
          console.log('Error fetching comments:', response.statusText);
        }
      } catch (error) {
        console.log("Error fetching comments ", error);
      }
    };

    fetchData();
  }, [comments])



  

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

  const sortedComments = [...comments].sort(compareValues);

  const filteredComments = sortedComments.filter((comment) => {
    return Object.values(comment).some(
      (value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className='my-2 mx-auto'>
  
      <div className='pl-4 space-y-4 mb-6'>
        <h1 className='text-2xl font-bold lg:block hidden text-gray-800 text-left'>
          Comments Table
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
                onClick={() => handleSort('username')}
              >
                <span>Username</span>
                <FaUpDown
                  className={`ml-1 text-gray-600 inline ${
                    sortColumn === 'username' ? (sortDirection === 'desc' ? 'rotate-180' : '') : ''
                  }`}
                />
              </th>
              <th
                className='px-4 py-2 cursor-pointer'
                onClick={() => handleSort('content')}
              >
                <span>Content</span>
                <FaUpDown
                  className={`ml-1 inline text-gray-600 ${
                    sortColumn === 'content' ? (sortDirection === 'desc' ? 'rotate-180' : '') : ''
                  }`}
                />
              </th>
              <th
                className='px-4 py-2 cursor-pointer'
                onClick={() => handleSort('postTitle')}
              >
                <span>Blog Title</span>
                <FaUpDown
                  className={` ml-1 inline text-gray-600 ${
                    sortColumn === 'postTitle' ? (sortDirection === 'desc' ? 'rotate-180' : '') : ''
                  }`}
                />
              </th>

              <th
                className='px-4 py-2 cursor-pointer'
                onClick={() => handleSort('createdAt')}
              >
                <span>Submission Time</span>
                <FaUpDown
                  className={`ml-1 text-gray-600 inline ${
                    sortColumn === 'createdAt' ? (sortDirection === 'desc' ? 'rotate-180' : '') : ''
                  }`}
                />
              </th>
              <th className='px-4 py-2'>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredComments.map((comment) => (
              <tr key={comment.id} className='bg-gray-100 text-gray-500'>
                <td className='border px-4 py-2'>{comment.id}</td>
                <td
                  className='cursor-pointer border px-4 py-2 text-blue-600'
                  onClick={()=>{navigate(`/profile/${comment.userId}`)}}
                >
                  {comment.username}
                </td>
                <td className='border px-4 py-2'>{comment.content}</td>
                <td className='border px-4 py-2'>{comment.postTitle}</td>

                <td className= 'border px-4 py-2'> {new Date(comment.createdAt).toLocaleDateString()}</td>
                <td className=' border space-x-4 text-2xl pl-2  py-2'>
                  
                  <FaTrash
                  onClick={()=>DeleteComment(comment.id)}
                  
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

export default CommentsTable;
