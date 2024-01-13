const fetchBlogs = async () => {
  try {
    const response = await fetch('https://localhost:7265/api/posts');
    console.log('Response Status:', response.status);

    if (response.ok) {
      const data = await response.json();
      console.log('Fetched Blogs:', data);
      return data;
    } else {
      console.log('Error fetching blogs:', response.statusText);
      return [];
    }
  } catch (error) {
    console.log('Error fetching blogs', error);
    return [];
  }
}

export default fetchBlogs