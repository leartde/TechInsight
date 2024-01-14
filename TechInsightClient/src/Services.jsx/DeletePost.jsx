import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeletePost = async (id) => {
    try {
        const response = await axios.delete(`https://localhost:7265/api/posts/delete/${id}`);

        if (response.status === 200) {
            console.log('Post deleted successfully');
            toast.success('Post deleted successfully');
            return;
        } else {
            console.error('Error deleting post:', response.statusText);
            toast.error('Error deleting post: ' + response.statusText);
            return;
        }
    } catch (error) {
        console.log('Error deleting post', error);
        toast.error('Error deleting post: ' + error.message);
        return;
    }
};

export default DeletePost;