import { DatePicker } from '@mui/x-date-pickers';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import TagsCard from './SingleBlogComponents/TagsCard';


const Sidebar = ({blogs}) => {
    const [cleared, setCleared] = useState(false);
    const [date, setDate] = useState(null);
    const [blogsByDate, setBlogsByDate] = useState([]);
    const [tags, setTags] = useState([]);
    const [topTags, setTopTags] = useState([]);

    useEffect(() => {
        const filterBlogsByDate = () => {

          if (date) {
            const year = new Date(date).getFullYear();
            const month = new Date(date).getMonth() + 1; 
    

            const filteredBlogs = blogs.filter((blog) => {
              const blogYear = new Date(blog.createdAt).getFullYear();
              const blogMonth = new Date(blog.createdAt).getMonth() + 1
    
              return blogYear === year && blogMonth === month;
            });
    
            setBlogsByDate(filteredBlogs.slice(0,4));
          } else {
            setBlogsByDate(blogs.slice(0,4));
          }
        };
    
        filterBlogsByDate();
      }, [date, blogs]); 
    
  

      useEffect(()=>{
        const fetchTags = async () => {
            try {
                let url = `https://localhost:7265/api/tags`;
                const response = await fetch(url);

                if (response.ok) {
                    const data = await response.json();
                    setTags(data);
                    // console.log(data);
                } else {
                    console.log('Error fetching tags:', response.statusText);
                }
            } catch (error) {
                console.log('Error fetching tags', error);
            }
        };

        fetchTags();

      },[])

      const getMostPopularTags = (tags) => {
        // Sort tags based on postCount in descending order and take the top 8
        const sortedTags = tags
          .slice() // Create a copy to avoid mutating the original array
          .sort((a, b) => b.postCount - a.postCount)
          .slice(0, 8);
      
        return sortedTags;
      };

      const mostPopularTags = getMostPopularTags(tags);
        const popularTagNames = mostPopularTags.map((tag) => tag.name);

        console.log("popular tag names ", popularTagNames)

   



      

  return (
    <div className="w-full  bg-white shadow-sm rounded-sm p-4 space-y-2 ">
                <h3 className="text-lg font-semibold text-gray-700 mb-3 font-roboto">Sort blogs by month and year</h3>
                <DatePicker
                views={['month', 'year']}
                value={date} onChange={(newDate) => setDate(newDate)}
                />
                <div className="space-y-4">
                {
                    blogsByDate.map((blog)=>(
                        <Link to={`/blogs/${blog.id}`} key={blog.id} className="flex">
                        <div className="flex-shrink-0">
                            <img src={blog.imageURL} className="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover"/>
                        </div>
                        <div className="flex-grow pl-3">
                            <h5
                                className="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                {blog.title}
                            </h5>
                            <div className="flex text-gray-400 text-sm items-center">
                                <span className="mr-1 text-xs"><i className="far fa-clock"></i></span>
                                {new Date(blog.createdAt).toLocaleString()}
                            </div>
                        </div>
                    </Link>
                    ))
                }
                   
                   
                </div>
                <TagsCard header={'Popular tags'} tags={popularTagNames}/>


                <div>
                   
                </div>
            </div>
    
  )
}

export default Sidebar