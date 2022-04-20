const baseURL = 'http://192.168.1.8:3001/api/notes'

const TestConnectionBack = () => {
    async function fetchTest (){
      try{
        fetch(baseURL)
        list = await response.json()
        console.log(list)
        if(!response.ok) throw {status: response.status};
      }
      catch(err){
        console.log(err)
      }
        
    }
  return ( 
        fetchTest()
  )
}

export default TestConnectionBack