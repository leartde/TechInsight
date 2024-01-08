import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';


const AddBlog = () => {
    const [id, userId] = useState(1);
const [title, setTitle] = useState('');
const [content, setContent] = useState('');
const [image, setImage] = useState({});
const [category, setCategory] = useState('Devices');
const [tags, setTags] = useState([]);
const [submitting, setSubmitting] = useState(false);

const cookies = new Cookies();
const token = cookies.get("token");

const [loading, setLoading] = useState(false)



const categories = ["Devices", "Code", "Innovation", "Cybersecurity", "Trends", "AI"];

const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      setImage(selectedFile);
    }
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

  
 
  
 

  useEffect(() => {
    const createBlogPost = async () => {
      if (!title || !content || !category || !tags) {
        alert('Please fill in all fields.');
        return;
      }

     

      setLoading(true);
      setSubmitting(true);

   
      try {
        const formData = new FormData();

  formData.append('Title', title);
  formData.append('Content', content);
  formData.append('UserId', token.id);
  formData.append('Author', token.username); 
  formData.append('Category', category);
  formData.append('Tags', JSON.stringify(tags));
  formData.append('Image', image);
  formData.append('CreatedAt', new Date().toISOString()); 
        const response = await fetch('https://localhost:7265/api/posts/AddPost', {
          method: 'POST',
          body: formData 
        });
        console.log("FORM DATA ", JSON.stringify(formData ));

        if (response.ok) {
          alert('Blog post created successfully!');
        } else {
          alert('Failed to create blog post.');
        }
      } catch (error) {
        console.error('Error creating blog post:', error);
        alert('Error creating blog post. Please try again.');
      } finally {
      
        setSubmitting(false);
        setLoading(false)
      }
    };

    
    if (submitting) {
      createBlogPost();
    }
  }, [submitting, title, content, category, tags]);
  return (
    <div className='mt-[200px] block w-3/4 mx-auto'>
      {token.id ? (
        <>
          <h1 className='text-center text-blue-400 text-3xl font-bold mb-4'>Create your blog</h1>
          {loading && <p className='text-2xl text-center text-blue-950'>Loading...</p>} 
          <form encType="multipart/form-data" className='flex flex-col space-y-4 w-1/2 mx-auto' method="post" onSubmit={handleSubmit}>
            <input type="text" placeholder='Title' onChange={handleTitleChange} className='p-2 border border-gray-300 rounded' />
            <textarea placeholder='Content' value={content} onChange={handleContentChange} className='p-2 border border-gray-300 rounded'></textarea>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="p-2 border border-gray-300 rounded"
            />
            {image && <p>{image.name}</p>}
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
            <input type="submit" value="Submit" className='p-2 bg-blue-500 text-white rounded cursor-pointer' />
          </form>
        </>
      ) : (
        <h1 className='text-center text-blue-400 text-3xl font-bold mb-4'>Please login to create a blog</h1>
      )}
    </div>
  );
      }

export default AddBlog;