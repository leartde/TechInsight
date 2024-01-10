const GetCommentById = async (id) => {
    try {
        const response = await axios.get(`https://localhost:7265/api/comments/commentById${id}`);

        if (response.status === 200) {
            console.log('Comment fetched successfully');
            return response.data;
        } else {
            console.error('Error fetching comment:', response.statusText);
            return;
        }
    } catch (error) {
        console.log('Error fetching comment', error);
        return;
    }

};

export default GetCommentById;