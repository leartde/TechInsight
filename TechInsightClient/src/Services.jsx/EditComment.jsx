import axios from "axios";

const EditComment = async(comment)=>{
    try{
        const response = await axios.put('https://localhost:7265/api/comments/UpdateComment/',comment);
        if(response.status === 200){
            console.log('Comment edited successfully');
            return;
        }else{
            console.error('Error editing comment:', response.statusText);
            return;
        }
    }
        catch(error){
            console.log('Error editing comment', error);
        }

};

export default EditComment;