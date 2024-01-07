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

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleTagsChange = (e) => {
 
    const newTags = e.target.value.split(',').map(text => text.trim()).slice(0, 4);
    setTags(newTags);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    const createBlogPost = async () => {
      // Validate the input data
      if (!title || !content || !category || !tags) {
        alert('Please fill in all fields.');
        return;
      }

      // Create your blog object
      const Blog = {
        blogUserId : 1,
        blogTitle : title,
        blogContent : content,
        blogCategory : category,
        blogTags : tags,
        blodDate : new Date(),
    }
    console.log("Bloog ", Blog)
    

      // Set submitting to true to show a loading indicator if needed
      setSubmitting(true);

      // Call your API endpoint to create a new blog post
      try {
        const response = await fetch('https://localhost:7265/api/posts/AddPost', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(Blog),
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
    <div className='mt-[200px] block w-3/4 mx-auto border border-black'>
        <form className='flex flex-col space-y-4 w-1/2 mx-auto' method="post">
            <input type="text" placeholder='Title' value={title} onChange={handleTitleChange}  />
            <textarea  placeholder='Content' value={content} onChange={handleContentChange}  > </textarea>
          <select value={category} onChange={handleCategoryChange}  placeholder='SELECT A CATEGORY'>
          {categories.map((element, index) => (
            <option value={element} key={index}>{element}</option>
          ))}
          </select>

          <input
          type="text"
          placeholder="Add tags (maximum 4)"
          value={tags.join(',')}
          onChange={handleTagsChange}
        />
        <input type="submit" onSubmit={handleSubmit} />
        </form>
    </div>
  )
}

export default AddBlog