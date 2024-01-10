const fetchBlogs = async () => {
    try {
      const response = await fetch('https://localhost:7265/api/posts');
      if (response.ok) {
        const data = await response.json();
        return data; 
      } else {
        console.log('Error fetching users:', response.statusText);
        return [];
      }
    } catch (error) {
      console.log('Error fetching users', error);
      return [];
    }
  };
  
  export default fetchBlogs;