import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteComment = async (id) => {
    try {
        const response = await axios.delete(`https://localhost:7265/api/comments/delete/${id}`);

        if (response.status === 200) {
            console.log('Comment deleted successfully');
            toast.success('Comment deleted successfully');
            return;
        } else {
            console.error('Error deleting comment:', response.statusText);
            toast.error('Error deleting comment: ' + response.statusText);
            return;
        }
    } catch (error) {
        console.log('Error deleting comment', error);
        toast.error('Error deleting comment: ' + error.message);
        return;
    }
};

export default DeleteComment;