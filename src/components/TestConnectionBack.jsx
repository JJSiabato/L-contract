import {useEffect, useState} from 'react'

const baseURL = 'http://192.168.1.8:3001/api/notes' || 'https://stark-coast-21200.herokuapp.com'


const TestConnectionBack = () => {
  const [data, setData] = useState([])
   
  useEffect(()=>{
    fetch(baseURL)
        .then(res => res.json())
        .then(json => setData(json))
  },[])
        
      
  return ( 
        <>
        <ol>
          {data.map((item) => (
            <li key={item.id}>{item.city}</li>
          ))}
        </ol>
        </>
  )
}

export default TestConnectionBack