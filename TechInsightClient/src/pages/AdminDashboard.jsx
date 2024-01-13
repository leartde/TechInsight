// AdminDashboard.jsx
import React, { useState } from 'react';
import UsersTable from '../components/DashboardComponents/UsersTable';
import BlogsTable from '../components/DashboardComponents/BlogsTable';
import ContactsTable from '../components/DashboardComponents/ContactsTable';
import CommentsTable from '../components/DashboardComponents/CommentsTable';


const AdminDashboard = () => {
  const [table, setTable] = useState('users');
  
  return (
    <div className='max-w-7xl mx-auto mt-32'>

      <div className='pl-4 mb-8 space-x-8  lg:space-x-16 flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold'>
      <span className="mr-2">Select a table:</span>
      <select
        value={table}  
        className="mr-2 bg-transparent"
        onChange={(e) => setTable(e.target.value)}
      >
        <option value="users">Users</option>
        <option value="blogs">Blogs</option>
        <option value="contacts">Contacts</option>
        <option value="comments">Comments</option>
      </select>
    </div>
      {table === 'users' && <UsersTable />}
      {table === 'blogs' && <BlogsTable />}
      {table ==='contacts' && <ContactsTable/>}
      {table ==='comments' && <CommentsTable/>}
    </div>
  );
};

export default AdminDashboard;
