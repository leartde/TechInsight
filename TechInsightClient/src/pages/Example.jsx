import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Example = () => {

    const [examples, setExamples] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://localhost:7265/api/Example');
                if (response.ok) {
                    const data = await response.json();
                    setExamples(data);
                    console.log(data)
                } else {
                    console.log('Error fetching examples:', response.statusText);
                }
            } catch (error) {
                console.log('Error fetching examples', error);
            }
        };

        fetchData();
    }, []);
    console.log("Examples: ", examples)

  return (
    <div>
    {examples.map((example) => (
        <div className='mt-12' key={example.id}>
            <h1 >{example.name}</h1>
            <p>{example.description}</p>
        </div>
    ))}
</div>
  )
}

export default Example