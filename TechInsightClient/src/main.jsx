import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Home from './pages/Home';
import Example from './pages/Example';
import BlogPage from './pages/BlogPage';
import Login from './pages/Login';
import SingleBlog from './pages/SingleBlog';
import SignUp from './pages/SignUp';
import Blogs from './pages/Blogs';
import AddBlog from './pages/AddBlog';


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
      path:"/example",
      element: <Example/>
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
      element: <AddBlog/>
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode >,
)
