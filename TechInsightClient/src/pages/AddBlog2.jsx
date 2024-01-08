import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

const AddBlog2 = () => {
    const [title, setTitle] = useState('');
const [content, setContent] = useState('');
const [image, setImage] = useState({});
const [category, setCategory] = useState('Devices');
const [tags, setTags] = useState([]);
const [submitting, setSubmitting] = useState(false);

const cookies = new Cookies();
const token = cookies.get("token");

const [loading, setLoading] = useState(false);
const [imagePreview, setImagePreview] = useState('');



const categories = ["Devices", "Code", "Innovation", "Cybersecurity", "Trends", "AI"];

const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files && e.target.files[0];
    // Create a FileReader to read the file as a data URL
  const reader = new FileReader();

  reader.onloadend = () => {
    // Set the data URL as the preview image source
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
    <div className='mt-24 mx-auto max-w-7xl  '>
        <div className='pt-24 border bg-stone-50  flex flex-row pb-24  '>
            <div className='mx-32  w-1/3 '>
              {loading && <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center"> Loading </div>}
            <h2 className='text-3xl font-semibold text-cyan-900'> Create your blog</h2>

            <form encType="multipart/form-data" method='post' onSubmit={handleSubmit} className='flex flex-col mt-4 space-y-4 mx-auto' action="">
                <input type="text"  onChange={handleTitleChange} className=' text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'  name="title" id="title" placeholder='Enter your blog title' />
                <textarea value={content} onChange={handleContentChange} className=' text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 focus:border-blue-500' name="content" id="content" cols="30" rows="10" placeholder='Enter your blog content'></textarea>
                <div className=' text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 focus:border-blue-500'>
                    <input type="file"  onChange={handleImageChange} name="image" id="image" placeholder='Enter your blog image'
              accept="image/*" />
                </div>
                {/* <div className='border  border-black w-full'>
                    <img className='w-full max-h-52' src="http://res.cloudinary.com/dertrvymu/image/upload/v1704730758/fep7tcccrcenu7nvf39i.jpg" alt="" />

                </div> */}
                <select  value={category} onChange={handleCategoryChange} className='text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 focus:border-blue-500'>
              {categories.map((element, index) => (
                <option  key={index}>{element}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Add tags (maximum 4)"
              value={tags.join(',')}
              onChange={handleTagsChange}
              
              className='text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 focus:border-blue-500'
            />
           <button type='submit' class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Publish
</button>
          

            </form>
            </div>

            {/* image preview */}
            
            <div className='border border-blue-200 mr-12 py-6 lg:block pl-24  hidden  w-1/2 space-y-3 shadow-[inset_-12px_-8px_40px_#46464620]'>
           
                <div className=' w-1/2 rounded-lg border border-blue-200'>
                    <img className='w-full h-80 bg-cover'   src={imagePreview?imagePreview:'https://camping-castello.gr/wp-content/uploads/2016/04/dummy-post-horisontal-thegem-blog-default-large.jpg'} alt="Your photo" />
                </div>
                <h2 className='ml-2 text-2xl font-semibold text-gray-600 '> {title}</h2>
                <p className='text-base ml-2 max-w-96 text-gray-500'> {content}</p>
                 <h3 className='text-lg ml-2 text-gray-500'> {category}</h3>
                 <h4 className='text-base m-2 text-gray-500'> {tags}</h4>


            </div>
            


        </div>

    </div>
  )
}

export default AddBlog2;