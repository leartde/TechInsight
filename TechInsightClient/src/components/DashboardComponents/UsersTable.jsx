import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { FaArrowsUpDown, FaTrash, FaUpDown } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';




const UsersTable = () => {
    const [users, setUsers] = useState([]);
    const [sortDirection, setSortDirection] = useState('asc');
    const [sortColumn, setSortColumn] = useState('username');
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await fetch('https://localhost:7265/api/user');
          if (response.ok) {
            const data = await response.json();
            setUsers(data);
            console.log(data);
          } else {
            console.log('Error fetching users:', response.statusText);
          }
        } catch (error) {
          console.log('Error fetching users', error);
        }
      };
      fetchUsers();
    }, []);
  
    const handleSort = (column) => {
      setSortColumn(column);
      setSortDirection((prevDirection) =>
        prevDirection === 'asc' ? 'desc' : 'asc'
      );
    };
  
    const sortedUsers = [...users].sort((a, b) => {
      const columnA =
        sortColumn === 'registrationTime'
          ? new Date(a[sortColumn])
          : typeof a[sortColumn] === 'string'
          ? a[sortColumn].toLowerCase()
          : a[sortColumn];
  
      const columnB =
        sortColumn === 'registrationTime'
          ? new Date(b[sortColumn])
          : typeof b[sortColumn] === 'string'
          ? b[sortColumn].toLowerCase()
          : b[sortColumn];
  
      if (columnA < columnB) return sortDirection === 'asc' ? -1 : 1;
      if (columnA > columnB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  
    const filteredUsers = sortedUsers.filter((user) => {
      return Object.values(user).some((value) =>
        typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    console.log("MODAL IS OPEN? ", editModal)
  
    return (
      <div className='my-24 mx-auto'>
        <EditUserModal open={editModal} />
       <div className='pl-4 space-y-4 mb-6'>
       <h1 className='text-2xl font-bold  lg:block hidden text-gray-800  text-left'> Users Table</h1>
       <div className='text-lg font-normal text-gray-600'>
       <input
       className='px-2'
            type="text"
            placeholder='Search...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
       </div>
       </div>
        <div className=' max-h-96 overflow-y-scroll'>
          <table className='table-auto w-full'>
            <thead>
              <tr className='text-left text-base font-light text-gray-400'>
                <th className='px-4 py-2 cursor-pointer' onClick={() => handleSort('id')}>
                  <span>Id</span>
                  <FaUpDown
                    className={`ml-1 text-gray-600 inline`}
                  />
                </th>
                <th className='px-4 py-2 cursor-pointer' onClick={() => handleSort('username')}>
                 <span>Username</span>
                  <FaUpDown
                    className={`ml-1 text-gray-600 inline`}
                  />
                </th>
                <th className='px-4 py-2 cursor-pointer' onClick={() => handleSort('email')}>
                 <span>Email</span>
                  <FaUpDown
                    className={`ml-1 inline text-gray-600 `}
                  />
                </th>
                <th className='px-4 py-2 cursor-pointer' onClick={() => handleSort('userRole')}>
                  <span>Role</span>
                  <FaUpDown
                    className={` ml-1 inline text-gray-600 `}
                  />
                </th>
                <th className='px-4 py-2 cursor-pointer' onClick={() => handleSort('registrationTime')}>
                 <span>Registration Time</span>
                  <FaUpDown
                    className={`ml-1 inline text-gray-600 `}
                  />
                </th>
                <th className='px-4 py-2'>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className='bg-gray-100 text-gray-500'>
                  <td className='border px-4 py-2'>{user.id}</td>
                  <td onClick={()=>{navigate(`/profile/${user.id}`)}} className='cursor-pointer border px-4 py-2 text-blue-600'>{user.username}</td>
                  <td className='border px-4 py-2'>{user.email}</td>
                  <td className='border px-4 py-2'>{user.userRole === -0 ? 'user' : 'admin'}</td>
                  <td className='border px-4 py-2'>
                    {new Date(user.registrationTime).toLocaleDateString()}
                  </td>
                  <td className='flex flex-row border space-x-4 text-2xl pl-2  py-2'>
                    <FaEdit className='text-blue-400 cursor-pointer' />
                    
                    <FaTrash className='text-red-400' />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default UsersTable;
  