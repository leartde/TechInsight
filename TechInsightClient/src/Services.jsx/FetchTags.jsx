const fetchTags = async () => {
    try {
      let url = `https://localhost:7265/api/tags`;
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        return data
        // console.log(data);
      } else {
        console.log("Error fetching tags:", response.statusText);
        return [];
      }
    } catch (error) {
      console.log("Error fetching tags", error);
      return [];
    };}

    export default fetchTags;