import axios from "axios";

const DeleteComment = async (id) => {
    try {
        const response = await axios.delete(`https://localhost:7265/api/comments/delete/${id}`);

        if (response.status === 200) {
            console.log('Comment deleted successfully');
            return;
        } else {
            console.error('Error deleting comment:', response.statusText);
            return;
        }
    } catch (error) {
        console.log('Error deleting comment', error);
        return;
    }
};

export default DeleteComment;