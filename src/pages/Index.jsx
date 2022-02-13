import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Login from '../components/Login';

function Index() {
  const [loading, setLoading]=useState(false)

  useEffect(()=>{
    setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1500); 
  },[])
  return (
    <div > 
          <Loading/>
      {loading ?    
          <Loading/>
          :        
          <Login/>
      }     
    </div>
  );
}

export default Index;