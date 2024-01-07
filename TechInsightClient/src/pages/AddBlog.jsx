import React, { useEffect, useState } from 'react';


const AddBlog = () => {
    const [id, userId] = useState(1);
const [title, setTitle] = useState('');
const [content, setContent] = useState('');
const [imageUrl, setImageUrl] = useState('');
const [category, setCategory] = useState('');
const [tags, setTags] = useState([]);
const [submitting, setSubmitting] = useState(false);








const categories = ["Devices", "Code", "Innovation", "Cybersecurity", "Trends", "AI"];

const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleTagsChange = (e) => {
 
    const newTags = e.target.value.split(',').map(text => text.trim()).slice(0, 4);
    setTags(newTags);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
  }

  const Blog = {
    id: 1,
    title: title,
    content: content,
    userId: 1,
    author :'author',
    category: category,
    tags: tags,
    imageURL: imageUrl,
    createdAt: new Date(),
  };
  console.log("BLOG ", JSON.stringify(Blog));

  // Rest of the code...

  useEffect(() => {
    const createBlogPost = async () => {
      if (!title || !content || !category || !tags) {
        alert('Please fill in all fields.');
        return;
      }

     

      // Set submitting to true to show a loading indicator if needed
      setSubmitting(true);

      // Call your API endpoint to create a new blog post
      try {
        const response = await fetch('https://localhost:7265/api/posts/AddPost', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(Blog)
        });

        

        if (response.ok) {
          alert('Blog post created successfully!');
          // You can also redirect or perform any other action after successful creation
        } else {
          alert('Failed to create blog post.');
        }
      } catch (error) {
        console.error('Error creating blog post:', error);
        alert('Error creating blog post. Please try again.');
      } finally {
        // Reset submitting status after the request is completed
        setSubmitting(false);
      }
    };

    // Check if submitting is true, meaning the form was submitted
    if (submitting) {
      createBlogPost();
    }
  }, [submitting, title, content, category, tags]);
  return (
    <div className='mt-[200px] block w-3/4 mx-auto '>
      <h1 className='text-center text-blue-400 text-3xl font-bold mb-4'>Create your blog</h1>
      <form className='flex flex-col space-y-4 w-1/2 mx-auto' method="post" onSubmit={handleSubmit}>
        <input type="text" placeholder='Title' value={title} onChange={handleTitleChange} className='p-2 border border-gray-300 rounded' />
        <textarea placeholder='Content' value={content} onChange={handleContentChange} className='p-2 border border-gray-300 rounded'></textarea>
        <input type="text" placeholder='Image Url' value={imageUrl} onChange={handleImageChange} className='p-2 border border-gray-300 rounded' />
        <select value={category} onChange={handleCategoryChange} placeholder='SELECT A CATEGORY' className='p-2 border border-gray-300 rounded'>
          {categories.map((element, index) => (
            <option value={element} key={index}>{element}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Add tags (maximum 4)"
          value={tags.join(',')}
          onChange={handleTagsChange}
          className='p-2 border border-gray-300 rounded'
        />
        <input type="submit" className='p-2 bg-blue-500 text-white rounded cursor-pointer' />
      </form>
    </div>
  )
}

export default AddBlog