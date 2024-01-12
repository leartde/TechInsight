import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import Login from './pages/Login';
import SingleBlog from './pages/SingleBlog';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About1 from './pages/About';
import DiscoverUsers from './pages/DiscoverUsers';
import AddBlog2 from './pages/AddBlog2';
import Contact from './pages/Contact';
import EditProfile from './pages/EditProfile';
import AdminDashboard from './pages/AdminDashboard';
import EditBlog from './pages/EditBlog';
import EditUser from './components/DashboardComponents/EditUser';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element:<Home/>
      },
    {
      path:"/contact",
      element: <Contact/>
    },
    {
      path:"/blogs",
      element: <BlogPage/>
    },
    {
      path:"/login",
      element: <Login/>
    },
    {
      path:"/signup",
      element: <SignUp/>
    },
    {
      path:"/blogs/:id",
      element:<SingleBlog/>,
      loader:({params})=> fetch(`https://localhost:7265/api/posts/${params.id}`)
    },
    {
      path:"/addBlog",
      element: <AddBlog2/>
    },
    {
      path:"/profile/:id",
      element: <Profile/>,
      loader:({params})=> fetch(`https://localhost:7265/api/User/${params.id}`)
    },
    {
      path:"/about",
      element: <About1/>,
    },
    {
      path:"/discover",
      element: <DiscoverUsers/>,
    },
    {
      path:"/editProfile",
      element: <EditProfile/>
    },
    {
      path:"/dashboard",
      element:<AdminDashboard/>
    },
    {
      path:"/editBlog/:id",
      element: <EditBlog/>,
      loader:({params})=> fetch(`https://localhost:7265/api/posts/${params.id}`)
    },
    {
      path:"/edituser/:id",
      element: <EditUser/>,
      loader:({params})=> fetch(`https://localhost:7265/api/User/${params.id}`)
    }


    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode >,
)
