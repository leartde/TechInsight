import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteComment from '../../Services.jsx/DeleteComment';
import GetCommentById from '../../Services.jsx/GetCommentById';

const CommentSection = ({blog}) => {
    const cookies = new Cookies();
const token = cookies.get("token");
    const [comments, setComments] = useState([]);
    const [content, setContent] = useState();
    const [submitting, setSubmitting] = useState(false);
    const [editMode, setEditMode] = useState(false);    
    const [editedCommentId, setEditedCommentId] = useState(null);
    const [editedContent, setEditedContent] = useState("");

    const handleContentChange = (e) => {
        setContent(e.target.value);
      };

      const handleEditClick = (commentId, initialContent) => {
        setEditedCommentId(commentId);
        setEditedContent(initialContent);
    };

    const handleCancelEdit = () => {
        setEditedCommentId(null);
        setEditedContent("");
    };

    // console.log("Comments " , comments)

    const handleEditSubmit = async (originalComment) => {
        try {

            const formData = new FormData();
            formData.append('id', originalComment.id);
            formData.append('content', editedContent);
            formData.append(' postId',blog.id);
            
            
    
            const response = await axios.put('https://localhost:7265/api/comments/UpdateComment', formData);
    
            // Log the entire response object or specific properties
            console.log("Response:", response);
            console.log("Response Status:", response.status);
            console.log("Response Data:", response.data);
    
            if (response.status === 200) {
                console.log('Comment edited successfully');
                console.log("Updated comment:", response.data.updatedComment);
            } else {
                console.error('Error  editing the comment:', response.statusText);
                console.log("Updated comment:", response.data.updatedComment);
            }
        } catch (error) {
            console.log('Error editing comment', error);
        }
    
        setEditedCommentId(null);
        setEditedContent("");
    };
      

      
    



    useEffect(()=>{
        const fetchComments = async () =>{
            try{
                
                let url = `https://localhost:7265/api/comments/post/${blog.id}`;
                const response = await fetch(url);
                if (response.ok ) {
                    const data = await response.json();
                   
                    setComments(data);
                    // console.log(data);
               
                } else {
                    setComments([]);
                    console.log('Error fetching comments:', response.statusText);
                }

            }
            catch(error){
                console.log("Error fetching comments ", error)
            }
            

        }
        fetchComments();
        // console.log("Comments ", comments)
    },[blog.id, comments])

  
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
    }

    useEffect(() => {
        const addComment = async () => {
            const comment = {
                content: content,
                createdAt: new Date(),
                userId: token.id,
                postId: blog.id,
                username: token.username,
                userImage: ((token.imageURL) ? token.imageURL : ""),
                postTitle: blog.title,
        
                
            };
          if (!content ) {
            alert('Please fill in all fields.');
            return;
          }
          console.log("Comment ", JSON.stringify(comment));
    
         
    
  
          setSubmitting(true);
         
          try {
            const response = await fetch('https://localhost:7265/api/comments/AddComment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(comment)
            });
    
            
    
            if (response.ok) {
              toast.success('Comment posted successfully!')
              setContent("");
            
            } else {
              alert('Failed to post comment.');
            }
          } catch (error) {
            console.error('Error creating comment:', error);
            alert('Error creating comment. Please try again.');
          } finally {
          
            setSubmitting(false);
          }
        };
    
        
        if (submitting) {
            addComment();
        }
      }, [submitting, content]);
        
    
        
  return (
    <div className="p-4 bg-white rounded-sm shadow-sm mt-8">
        <ToastContainer
        autoClose={2000}
        position='top-left'
        />
                <h4 className="text-base uppercase  font-semibold mb-4 font-roboto">Post a comment</h4>
                {/* <p className="text-sm text-gray-500 mb-4">12 comments</p> */}

                <div className="space-y-5">
                {comments.map((comment) => (
    <div key={comment.id} className="flex items-start border-b  pb-5 border-gray-200">
       <div className="w-12 h-12 flex-shrink-0">
                            <img src={comment.userImage} className="w-full h-full rounded  "/>
                        </div>
        <div className="flex-grow pl-4">
            <h4 className="text-base font-roboto">{comment.username}</h4>
            <p className="text-xs text-gray-400">{new Date(comment.createdAt).toLocaleString()}</p>
            {editedCommentId === comment.id ? (
                
                <textarea
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                    className="w-full border border-gray-200 py-3 px-5 text-sm rounded-sm h-20 focus:outline-none focus:border-gray-400"
                    placeholder="Edit your comment"
                ></textarea>
            ) : (
            
                <p className="text-sm font-600 mt-2">{comment.content}</p>
            )}
            <div className="flex gap-2 mt-2">
                {editedCommentId === comment.id ? (
                  
                    <>
                        <button
                            onClick={() => handleEditSubmit(comment)}
                            className={ ` text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition`}
                        >
                            Save
                        </button>
                        <button
                            onClick={() => handleCancelEdit()}
                            className="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition"
                        >
                            Cancel
                        </button>
                    </>
                ) : (
               
                    <button
                        onClick={() => handleEditClick(comment.id, comment.content)}
                        className={` ${(token && comment.userId == token.id)?'block':'hidden' } text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition`}
                    >
                        Edit
                    </button>
                )}
                {token && (comment.userId === token.id || token.userRole === 1) && (
                    <button
                        onClick={() => DeleteComment(comment.id)}
                        className="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition"
                    >
                        Delete
                    </button>
                )}
            </div>
        </div>
    </div>
))}

                
                </div>

                <form   onSubmit={handleSubmit} method="post" className="mt-8">
                    <h5 className="text-base  mb-1">Comment:</h5>
                    <textarea type="text" value={content} onChange={handleContentChange}
                        className="w-full border border-gray-200 py-3 px-5 text-sm  rounded-sm h-20 focus:outline-none focus:border-gray-400"
                        placeholder="type your comment"></textarea>
                    <div className="mt-2">
                        <input type="submit"
                        className="text-white py-1 px-3 rounded-sm uppercase text-sm bg-blue-500 border border-blue-500 hover:text-blue-500 hover:bg-transparent transition"/>
                        
                   
                    
                    </div>
                </form>
            </div>
  )
}

export default CommentSection