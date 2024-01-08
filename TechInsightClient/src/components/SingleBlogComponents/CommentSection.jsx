import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';


const CommentSection = ({blog}) => {
    const cookies = new Cookies();
const token = cookies.get("token");
    const [comments, setComments] = useState([]);
    const [content, setContent] = useState();
    const [submitting, setSubmitting] = useState(false);


    const handleContentChange = (e) => {
        setContent(e.target.value);
      };
      

      
    



    useEffect(()=>{
        const fetchComments = async () =>{
            try{
                let url = `https://localhost:7265/api/comments/post/${blog.id}`;
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    setComments(data);
                    // console.log(data);
                } else {
                    console.log('Error fetching comments:', response.statusText);
                }

            }
            catch(error){
                console.log("Error fetching comments ", error)
            }
            

        }
        fetchComments();
        // console.log("Comments ", comments)
    },[])

  
    
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
              alert('Comment posted successfully!');
            
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
                <h4 className="text-base uppercase  font-semibold mb-4 font-roboto">Post a comment</h4>
                {/* <p className="text-sm text-gray-500 mb-4">12 comments</p> */}

                <div className="space-y-5">
                    {
                        comments.map((comment)=>(
                            <div key={comment.id} className="flex items-start border-b  pb-5 border-gray-200">
                        <div className="w-12 h-12 flex-shrink-0">
                            <img src={comment.userImage} className="w-full h-full rounded  "/>
                        </div>
                        <div className="flex-grow pl-4">
                            <h4 className="text-base  font-roboto">{comment.username}</h4>
                            <p className="text-xs text-gray-400">{new Date(comment.createdAt).toLocaleString()}</p>
                            <p className="text-sm font-600 mt-2">{comment.content}s</p>
                            <div className="flex gap-2 mt-2">
                                {/* <button
                                    className="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Reply</button>
                                <button
                                    className="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Delete</button> */}
                            </div>
                        </div>
                    </div>
                        ))
                    }
                
                </div>

                <form onSubmit={handleSubmit} method="post" className="mt-8">
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