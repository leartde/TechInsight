import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

const EditPosts = () => {
    const cookies = new Cookies();
    const token = cookies.get("token");
    const navigate = useNavigate();
    const { postId } = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchPostData(postId).then(data => {
            setTitle(data.title);
            setContent(data.content);
        });
    }, [postId]);

    const fetchPostData = async (postId) => {
        try {
            const response = await axios.get(`https://localhost:7265/api/posts/${postId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching post data:', error.message);
            return {};
        }
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleImageChange = (e) => {
        const selectedFile = e.target.files && e.target.files[0];
        setImage(selectedFile);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('content', content);
            formData.append('image', image);

            const response = await axios.put(`https://localhost:7265/api/posts/update`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                console.log('Post updated successfully');
                navigate(`/blogs/${postId}`); // Use postId instead of token.id
            } else {
                console.error('Error updating post:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating post:', error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex justify-center items-center flex-col mt-28'>
            <div className="bg-white p-8 shadow-md rounded-lg text-center w-1/2">
                {loading && <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center"> Loading </div>}
                <>
                    <div className='w-1/3 mx-auto space-y-4'>
                        <form onSubmit={handleSubmit} className='mx-auto w-1/2 flex flex-col space-y-4'>
                            <div className='mb-4'>
                                <label htmlFor='title' className='block text-sm font-medium text-gray-700'>
                                    Title
                                </label>
                                <input
                                    type='text'
                                    onChange={handleTitleChange}
                                    value={title}
                                    name='title'
                                    id='title'
                                    className='border-2 border-gray-400 text-sm rounded-lg block w-full p-2.5 bg-white placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400'
                                />
                            </div>

                            <div className='mb-4'>
                                <label htmlFor='content' className='block text-sm font-medium text-gray-700'>
                                    Content
                                </label>
                                <textarea
                                    className='border-2 border-gray-400 text-sm rounded-lg block w-full p-2.5 bg-white placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400'
                                    name='content'
                                    value={content}
                                    onChange={handleContentChange}
                                    cols='30'
                                    rows='5'
                                ></textarea>
                            </div>

                            <div className='mb-4'>
                                <label htmlFor='image' className='block text-sm font-medium text-gray-700'>
                                    Image
                                </label>
                                <input
                                    type='file'
                                    onChange={handleImageChange}
                                    name='image'
                                    id='image'
                                    accept='image/*'
                                />
                            </div>

                            <button
                                type='submit'
                                className='inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-[#009bd6] hover:bg-opacity-90'
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </>
            </div>
        </div>
    );
};

export default EditPosts;
