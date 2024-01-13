// AdminDashboard.jsx
import React, { useState } from 'react';
import UsersTable from '../components/DashboardComponents/UsersTable';
import BlogsTable from '../components/DashboardComponents/BlogsTable';
import ContactsTable from '../components/DashboardComponents/ContactsTable';
import CommentsTable from '../components/DashboardComponents/CommentsTable';
import TagsTable from '../components/DashboardComponents/TagsTable';
import Cookies from 'universal-cookie';


const AdminDashboard = () => {
  const [table, setTable] = useState('users');
  const cookies = new Cookies();
        const token = cookies.get("token");
  
  return (
    <div className='max-w-7xl mx-auto mt-32'>

{token && token.userRole === 1 ? (
        <>
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
              <option value="tags">Tags</option>
            </select>
          </div>
          {table === 'users' && <UsersTable />}
          {table === 'blogs' && <BlogsTable currentUser={token} />}
          {table === 'contacts' && <ContactsTable />}
          {table === 'comments' && <CommentsTable />}
          {table === 'tags' && <TagsTable />}
        </>
      ) : null}
    </div>
  );
};

export default AdminDashboard;
