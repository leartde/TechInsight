import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState({});
  const [category, setCategory] = useState("Devices");
  const [tags, setTags] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const cookies = new Cookies();
  const token = cookies.get("token");

  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  console.log("tags ", tags);

  const categories = [
    "Devices",
    "Code",
    "Innovation",
    "Cybersecurity",
    "Trends",
    "AI",
  ];

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files && e.target.files[0];

    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (selectedFile) {
      setImage(selectedFile);
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleTagsChange = (e) => {
    const newTags = e.target.value
      .split(",")
      .map((text) => text.trim())
      .slice(0, 4);
    setTags(newTags);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
  };

  console.log("tags array ", tags);
  useEffect(() => {
    const createBlogPost = async () => {
      if (!title || !content || !category || !tags || !image) {
       toast.warning("Please fill in all fields.");
        return;
      }

      setLoading(true);
      toast.info("Creating blog post...");
      setSubmitting(true);

      try {
        const formData = new FormData();

        formData.append("Title", title);
        formData.append("Content", content);
        formData.append("UserId", token.id);
        formData.append("Author", token.username);
        formData.append("Category", category);
        formData.append("TagsJson", JSON.stringify(tags));
        formData.append("Image", image);
        formData.append("CreatedAt", new Date().toISOString());
        const response = await fetch(
          "https://localhost:7265/api/posts/AddPost",
          {
            method: "POST",
            body: formData,
          }
        );
        console.log("FORM DATA ", JSON.stringify(formData));

        if (response.ok) {
          const responseData = await response.json();
          console.log("Response Data", responseData);
           toast.success("Blog post created successfully!");

          if (post) {
            navigate(`/blogs/${post.id}`);
          } else {
            console.error("No post found in the response data");
            alert("Failed to create blog post.");
          }
        }
      } catch (error) {
        console.error("Error creating blog post:", error);
        toast.error("Error creating blog post. Please try again.");
      } finally {
        setSubmitting(false);
        setLoading(false);
      }
    };

    if (submitting) {
      createBlogPost();
    }
  }, [submitting, title, content, category, tags]);
  return (
    <div className="mt-24 mx-auto max-w-7xl  ">
      
    <ToastContainer/>
      {!token && (
        <div className="text-center py-12">
          <h1 className="text-4xl text-blue-400">
            {" "}
            You have to be{" "}
            <Link to="/login">
              {" "}
              <span className="text-blue-600">logged in</span>
            </Link>{" "}
            to add a blog{" "}
          </h1>
        </div>
      )}
       <ToastContainer/>
      {token && (
        <div className="pt-24 border bg-stone-50  flex flex-row pb-24 ">
          <div className="mx-32  w-1/3 ">

            <h2 className="text-3xl font-semibold text-cyan-900">
              {" "}
              Create your blog
            </h2>

            <form
              encType="multipart/form-data"
              method="post"
              onSubmit={handleSubmit}
              className="flex flex-col mt-4 space-y-4 mx-auto rounded"
              action=""
            >
              <input
                type="text"
                onChange={handleTitleChange}
                className="border-2 border-gray-400 text-sm rounded-lg  block w-full p-2.5 bg-white placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                name="title"
                id="title"
                placeholder="Enter your blog title"
              />
              <textarea
                value={content}
                onChange={handleContentChange}
                className="border-2 border-gray-400 text-sm rounded-lg  block w-full p-2.5 bg-white placeholder-gray-400 text-black dark:focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                name="content"
                id="content"
                cols="30"
                rows="10"
                placeholder="Enter your blog content"
              ></textarea>
              <div className="border-2 border-gray-400 text-sm rounded-lg  block w-full p-2.5 bg-white placeholder-gray-400 text-black dark:focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400">
                <input
                  type="file"
                  onChange={handleImageChange}
                  name="image"
                  id="image"
                  placeholder="Enter your blog image"
                  accept="image/*"
                />
              </div>
              <select
                value={category}
                onChange={handleCategoryChange}
                className="border-2 border-gray-400 text-sm rounded-lg text-black block w-full p-2.5 bg-white placeholder-gray-40 shadow-xl"
              >
                {categories.map((element, index) => (
                  <option key={index}>{element}</option>
                ))}
              </select>
              <div className="flex flex-row w-full space-x-4">
                <input
                  type="text"
                  placeholder="Add tags (maximum 4)"
                  value={tags.join(",")}
                  onChange={handleTagsChange}
                  className="border-2 border-gray-400 text-sm rounded-lg  block w-full p-2.5 bg-white placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-[#009bd6] hover:bg-opacity-90"
              >
                Publish
              </button>
            </form>
          </div>

          {/* image preview */}

          <div className="relative border border-blue-200 mr-12 py-6 lg:block pl-24  hidden  w-1/2 space-y-3 shadow-[inset_-12px_-8px_40px_#46464620] rounded-md">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={
                imagePreview
                  ? imagePreview
                  : "https://camping-castello.gr/wp-content/uploads/2016/04/dummy-post-horisontal-thegem-blog-default-large.jpg"
              }
              alt="Your photo"
            />
            <div className="relative hidden">
              <h2 className="ml-2 text-2xl font-semibold text-gray-600 ">
                {" "}
                {title}
              </h2>
              <p className="text-base ml-2 max-w-96 text-gray-500">
                {" "}
                {content}
              </p>
              <h3 className="text-lg ml-2 text-gray-500"> {category}</h3>
              <h4 className="text-base m-2 text-gray-500"> {tags}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBlog;
