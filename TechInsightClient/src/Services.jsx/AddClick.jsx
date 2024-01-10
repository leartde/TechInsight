import axios from 'axios';

const addClick = async (postId, userId) => {
  try {
    const response = await axios.post(`https://localhost:7265/api/userclicks/AddClick/${postId}/${userId}`);
    if (response.ok) {
      console.log('Click added successfully');
    } else {
      console.log('Error adding click');
    }
  } catch (error) {
    console.log('Error adding click ', error);
  }
};

export default addClick;