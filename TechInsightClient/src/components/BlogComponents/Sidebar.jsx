import { DatePicker } from "@mui/x-date-pickers";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TagsCard from "../SingleBlogComponents/TagsCard";
import fetchTags from "../../Services.jsx/FetchTags";
const Sidebar = ({ blogs }) => {
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
          const blogMonth = new Date(blog.createdAt).getMonth() + 1;

          return blogYear === year && blogMonth === month;
        });

        setBlogsByDate(filteredBlogs.slice(0, 4));
      } else {
        setBlogsByDate(blogs.slice(0, 4));
      }
    };

    filterBlogsByDate();
  }, [date, blogs]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTags();
      setTags(data);
    };
    fetchData();
  }, [tags]);

  const getMostPopularTags = (tags) => {
    const sortedTags = tags
      .slice()
      .sort((a, b) => b.postCount - a.postCount)
      .slice(0, 8);

    return sortedTags;
  };

  const mostPopularTags = getMostPopularTags(tags);
  const popularTagNames = mostPopularTags.map((tag) => tag.name);

  // console.log("popular tag names ", popularTagNames)

  return (
    <div className="w-full ml-24  bg-white shadow-sm rounded-md p-4 space-y-2 ">
      <h3 className="text-lg font-semibold text-gray-700 mb-3 font-roboto">
        Sort blogs by month and year
      </h3>
      <DatePicker
        views={["month", "year"]}
        value={date}
        onChange={(newDate) => setDate(newDate)}
      />
   <div className="space-y-4">
  {blogsByDate.map((blog) => (
    <Link to={`/blogs/${blog.id}`} key={blog.id} className="flex items-start">
      <div className="flex-shrink-0">
        <img
          src={blog.imageURL}
          className="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover"
          alt={blog.title}
        />
      </div>
      <div className="flex-grow pl-3 w-3/4">
        <h5 className="text-md leading-5 block font-roboto font-semibold break-words  transition group-hover:text-blue-500 overflow-hidden">
          {blog.title}
        </h5>
        <div className="flex text-gray-400 text-sm items-center">
          <span className="mr-1 text-xs">
            <i className="far fa-clock"></i>
          </span>
          {new Date(blog.createdAt).toLocaleString()}
        </div>
      </div>
    </Link>
  ))}
</div>


      <TagsCard
        bg="bg-[#eef8fe]"
        header={"Popular tags"}
        tags={popularTagNames}
      />

      <div></div>
    </div>
  );
};

export default Sidebar;
