import axios from "axios"

const fetchUserClicks =  async() =>{
    try{
        const response = await axios.get('https://localhost:7265/api/userclicks');
        if(response.status == 200){
            return response.data;
            
    }
    else{
        console.log('Error fetching user clicks:', response.statusText);}  
        return [];      
    }
    catch(error){
        console.log("Error fetching user clicks ", error);
        return [];      
    }
}

export default fetchUserClicks;