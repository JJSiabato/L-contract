import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Home from '../pages/Home';

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
      {loading ? <Loading/> : <Home/>}     
    </div>
  );
}

export default Index;