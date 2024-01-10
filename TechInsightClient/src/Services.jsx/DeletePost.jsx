import axios from "axios";

const DeletePost = async (id) => {
    try {
        const response = await axios.delete(`https://localhost:7265/api/posts/delete/${id}`);

        if (response.status === 200) {
            console.log('Post deleted successfully');
            return;
        } else {
            console.error('Error deleting user:', response.statusText);
            return;
        }
    } catch (error) {
        console.log('Error deleting user', error);
        return;
    }
};

export default DeletePost;